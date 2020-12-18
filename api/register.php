<?php
    // 首先获取客户端传递过来的参数
    $username = $_GET["username"];
    $password = $_GET["password"]; 
    $email = $_GET["email"];  

    // print_r($username);
    // print_r($password);
    // print_r($email);
    // 【1】链接数据库
    $con = mysqli_connect('localhost','root','123456','mallprojects');
    // 查询数据库,看数据库中是否有注册过
    // 在写SQL语句的时候整个语句用双引号,字段名和表名用反引号,参数名用单引号
    $sql = "SELECT * FROM `userlist` WHERE `username` = '$username'";
    // 无论存不存在查询的结果都是存在的,也就是说这个$res中是一定有内容的
    $res = mysqli_query($con,$sql);
    // 这个时候我们解析我们的第一条数据    
    $row = mysqli_fetch_assoc($res);
    // print_r($row);
    if($row) {
        // print_r("这个用户名已经注册了!");
        // 这个账号已经存在  注册失败
        echo json_encode(array(
            "code" => 0,
            "message" => "这个用户名已经注册了!"
        ));
    }else {
        $sql1 = "INSERT INTO `userlist` VALUES (NULL, '$username', '$password', '$email')";
        $res1 = mysqli_query($con,$sql1);
        if($res1) {
            // print_r("注册成功!"); 
             // 有匹配的数据 登录成功
            echo json_encode(array(
                "code" => 1,
                "message" => "注册成功"
            ));
        }else {
            print_r("注册失败!");
        }
        
    }
?>