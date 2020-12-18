"use strict";

// 添加一个 自定义的验证的方法

/* 
    jQuery.validator.addMethod('名字',fn,'message');
    fn 回调函数:你要验证的规则都在这个函数中写
    messages:如果验证失败,提示信息
*/
var form = document.querySelector("#form");
var username = document.querySelector("#username");
var password1 = document.querySelector("#password1");
var password2 = document.querySelector("#password2");
var email = document.querySelector("#email");
var yzm = document.querySelector("#yzm");
var loginImmediately = document.querySelector("#loginImmediately");
var reg = /^\w+([-\.]\w+)*@\w+([\.-]\w+)*\.\w{2,4}$/; //邮箱验证
// 初始化验证码

var verifyCode = new GVerify({
  id: "picyzm",
  length: 4
}); // 绑定表单提交事件

form.onsubmit = function _callee() {
  var e;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 这个会有一个默认行为,立马刷新,这里我们要阻止默认行为
          e = window.event;
          e.preventDefault(); //   表单验证

          if (!(username.value == "")) {
            _context.next = 7;
            break;
          }

          alert("请输入注册帐号");
          return _context.abrupt("return");

        case 7:
          if (!(username.value.length < 5)) {
            _context.next = 10;
            break;
          }

          alert("注册帐号长度至少为5位!");
          return _context.abrupt("return");

        case 10:
          if (!(password1.value == "")) {
            _context.next = 13;
            break;
          }

          alert("请输入密码!");
          return _context.abrupt("return");

        case 13:
          if (!(password2.value == "")) {
            _context.next = 16;
            break;
          }

          alert("请重复输入密码!");
          return _context.abrupt("return");

        case 16:
          if (!(password1.value != password2.value)) {
            _context.next = 19;
            break;
          }

          alert("两次密码不一致，请重新输入");
          return _context.abrupt("return");

        case 19:
          if (!(email.value == "")) {
            _context.next = 22;
            break;
          }

          alert("请输入邮箱!");
          return _context.abrupt("return");

        case 22:
          if (reg.test(email.value)) {
            _context.next = 25;
            break;
          }

          alert("邮箱格式错误,正确格式比如:19646618@qq.com");
          return _context.abrupt("return");

        case 25:
          if (!(yzm.value == "")) {
            _context.next = 28;
            break;
          }

          alert("请输入验证码!");
          return _context.abrupt("return");

        case 28:
          if (verifyCode.validate(yzm.value)) {
            _context.next = 31;
            break;
          }

          alert("验证码错误!");
          return _context.abrupt("return");

        case 31:
          /*  yzm.change = function() {
               let res1 = verifyCode.validate(yzm.value);
               console.log(1);
           } */
          // 发送ajax请求判断我们注册的账号是否存在,如果存在就跳转至登录页面  如果不存在就进行注册
          pAjax({
            url: '../api/register.php',
            data: {
              username: username.value,
              password: password1.value,
              email: email.value
            }
          }).then(function (res) {
            // console.log(res);
            // console.log(res.code);
            console.log(JSON.parse(res));

            if (JSON.parse(res).code == 1) {
              alert("注册成功!");
              location.href = "../html/login.html";
            } else {
              alert("注册的账户已经存在!");
            }
          });

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
};
/* jQuery.validator.addMethod('testUsername',function(value){
    // value就是你要验证的值
    // 注册帐号长度至少为5位!
    // .表示的为非换行以外的任意字符
    let reg = /.{5,n}/;
    if(reg.test(value)) {
        return true;
    }else {
        return false;
    }

})
jQuery.validator.addMethod('testTel',function(value) {
    // value就是你要验证的值
    let reg = /^1[3,4,5,7,8]\d{9}$/;
    // 验证成功返回true,验证失败返回false
    // console.log(value);
    if(reg.test(value)) {
        return true;
    }else {
        return false;
    }
},'验证失败的提示信息');
$('#form').validate ({
    rules:{
        // 这个属性就是input的name属性的属性值来验证
        username:{
            required:true,
            maxlength:12,
            minlength:6
        },
        password:{
            required:true,
            // maxlength:6,
            // minlength:6,
            digits:true,
            // equalTo:"#password",
            // range:[5,10],
            // testTel:true
        },
        password1:{
            required:true,
            digits:true,
            equalTo:"#password",
        },
        tel:{
            required:true,
            // maxlength:6,
            // minlength:6,
            digits:true,
            // equalTo:"#password",
            // range:[5,10],
            testTel:true
        }
    },
    // 当不满足规则的时候  编写的提示信息
    messages:{
        username:{
            required: '用户名必填项',
            maxlength: '用户的最大长度只能为12位',
            minlength: '用户名不能低于6位字符'
        },
        password:{
            required:'这个输入的是必须填写的哦',
            maxlength:'密码长度为6位数',
            minlength:'密码长度为6位数'
        },
        password1:{
            required:'这个输入的是必须填写的哦',
            maxlength:'密码长度为6位数',
            minlength:'密码长度为6位数',
            equalTo: "密码必须与上面的一致",
        }
    },
    submitHandler:function() {
        // 当界面中所有的表单验证都成功的时候  就会执行这个方法
        // 一般用跟后端进行数据交互
        // 发送ajax请求
        console.log(this.successList[0].value);
    }
});
 */