<?php
     # 链接数据库
     $con = mysqli_connect('localhost','root','123456','mallprojects');
      
    //  $sql = "SELECT  `title` FROM `navtitle` ORDER BY id";
    $sql = "SELECT  * FROM `goods` LIMIT 16,16";
    $res = mysqli_query($con,$sql);
 
     
    if (!$res) {
        die('error for mysql: ' . mysqli_error());
    }
    # 数据的处理
    $dataArr = array();
    $row = mysqli_fetch_assoc($res);
    while($row){
        array_push($dataArr,$row);
        $row = mysqli_fetch_assoc($res);
    }
     # 得到数据的总数量 
     # 需要把商品数据 和总数量都返回 给前端
 
 
     echo json_encode(array(   
     "total" => $row, 
     "list" => $dataArr,
     "code" => 1,
     "message" => "获取列表数据成功"
   ));
?>