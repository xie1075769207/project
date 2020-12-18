"use strict";

var username = document.querySelector("#username");
var password = document.querySelector("#password");
var formLogin = document.querySelector("#formLogin");
/* console.log(username);
console.log(password);
console.log(formLogin); */
// 绑定表单提交事件

formLogin.onsubmit = function () {
  // 这个会有一个默认行为,立马刷新,这里我们要阻止默认行为
  var e = window.event;
  e.preventDefault(); // 发送ajax请求判断是否登录成功 

  pAjax({
    url: '../api/login.php',
    type: 'post',
    data: {
      username: username.value,
      password: password.value
    }
  }).then(function (res) {
    // console.log(res.code);
    // console.log(JSON.parse(res).code);
    if (JSON.parse(res).code == 1) {
      // 表示登录成功
      // 把当前的用户名   存储在cookie中
      setCookie('login', username.value);
      var url = localStorage.getItem('url'); // 这样写的目的是能够做到当我们登录之后继续跳转到我们登录前访问的详情页面

      if (url) {
        location.href = url; //登录成功的时候把url的这个cookie值清除
        // setCookie('url','',-10);

        localStorage.removeItem('url');
      } else {
        // location.href = 'http://gz2008.com/project/html/car.html';
        window.location.href = "../html/car.html";
      }
    } else {
      username.value = "";
      password.value = "";
      alert('用户名或者密码错误!');
    }
  });
};
/* $('#formLogin').validate ({ 
   rules:{
       // 这个属性就是input的name属性的属性值来验证
       username:{
           required:true,
           maxlength:12,
           minlength:1
       },
       password:{
           required:true,
           maxlength:6,
           minlength:6,
           // digits:true,
           // equalTo:"#password",
           // range:[5,10],
           // testTel:true
       }          
   },
   // 当不满足规则的时候  编写的提示信息
   messages:{
       username:{
           required: '用户名必填项',
           maxlength: '用户的最大长度只能为12位',
           minlength: '用户名不能低于1位字符'
       },
       password:{
           required:'这个输入的是必须填写的哦',
           maxlength:'密码长度为6位数',
           minlength:'密码长度为6位数'
       }      
   },
   submitHandler:function() {
       // 当界面中所有的表单验证都成功的时候  就会执行这个方法
       // 一般用跟后端进行数据交互
       // 发送ajax请求
         // 发送ajax请求判断是否登录成功 
   pAjax({
       url:'../api/login.php',
       type:'post',
       data:{
           username:username.value,
           password:password.value 
       }
   }).then(res=>{
       // console.log(res);
       if(res.code == 1) {
           // 表示登录成功
           // 把当前的用户名   存储在cookie中
           setCookie('login',username.value);

           // console.log("登录成功!");
           // 登录成功就将页面跳转至首页
           username.value = "";
           password.value = "";
           window.location.href = "../html/index01.html";
       }else {
           username.value = "";
           password.value = "";
           alert('用户名或者密码错误!');
       }
   })
   }
}) */