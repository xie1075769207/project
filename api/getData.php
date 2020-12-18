<?php


    # 链接数据库
    $con = mysqli_connect('localhost','root','123456','mallprojects');

    // 请求第一页数据 传过来的start = 1 len = 30 请求的数据为0-29
    // 请求第二页数据 传过来的start = 2 len= 30  请求的数据为30-59 
    // 请求第三页数据 传过来的start = 3 len = 30  请求的额数据为 60 89  60
    $start = $_GET['start'];
    $len = $_GET['len'];
    $index = $_GET['index'];
    // $index = 2;
    // print_r($index);
    $s = ($start-1)*$len;
  
    # 设置SQL语句  $len表示的为长度  $s表示的为起始位置
    if($index == 0) {
      $sql = "SELECT * FROM `goods` LIMIT $s,$len";
    }else {
      $sql = "SELECT * FROM `goods` WHERE `cat_id` = '$index' LIMIT $s,$len";
    }
    
    

    # 执行SQL语句
    $res = mysqli_query($con,$sql);


    if(!$res) {
        die('error' . mysqli_error());
    }
    # 数据的处理
    $dataArr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($dataArr,$row);
        $row = mysqli_fetch_assoc($res);
    }
    # $row 得到的是当前请求的20条数据

    // $sql2 = "SELECT COUNT(*) `count` FROM `goods`";
    // SELECT * FROM `goods` WHERE cat_id = 1
    // 这里一定要记住,在php中参数名用单引号,字段名用反引号,sql语句用双引号
    if($index == 0) {
      $sql2 = "SELECT COUNT(*) `count` FROM `goods`";
    }else {
      $sql2 = "SELECT COUNT(*) `count` FROM `goods` WHERE `cat_id` = '$index'";
    }    
    $res2 = mysqli_query($con,$sql2);
  
    if (!$res2) {
      die('error for mysql: ' . mysqli_error());
    }
    $row2 = mysqli_fetch_assoc($res2);
    # 得到数据的总数量 
    # 需要把商品数据 和总数量都返回 给前端


    echo json_encode(array(
    "index"=>$index, 
    "total" => $row2, 
    "list" => $dataArr,
    "code" => 1,
    "message" => "获取列表数据成功"
  ));
?>