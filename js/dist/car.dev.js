"use strict";

// 这个是购物车页面,在渲染购物车页面之前我们需要先判断我们是否
// 登录了,如果登录了就直接跳转到购物车页面,如果没有登录的话我们
// 就要跳转到登录页面进行登录。
// 判断是否有登录
var container = document.querySelector(".container");
var login = getCookie('login'); // 没有登录就跳转到登录页面进行登录
// 没有登录就跳转到登录页面进行登录

if (!login) {
  location.href = '../html/login.html';
  localStorage.setItem('url', 'http://gz2008.com/project/html/car.html');
} // 有登录的话就执行下面的代码   跳转到购物车页面  这个时候我们就要请求购物车的数据
// 跳转到购物车页面的时候我们需要渲染数据,这个时候就要通过ajax向后台获取数据


pAjax({
  url: '../api/getCarData.php',
  data: {
    username: login
  }
}).then(function (res) {
  // console.log(JSON.parse(res));
  // 这里是先把数据存放到本地
  localStorage.setItem('goodsList', JSON.stringify(JSON.parse(res)));
  render(JSON.parse(res));
}); // 渲染数据  纯粹就是渲染数据

function render(data) {
  // data请求出来的数据  有可能一条数据都没有
  // console.log(data.length);
  if (!data.length) {
    container.innerHTML = "<div class=\"jumbotron\">\n        <h1>\u4EB2\u7231\u7684\u7528\u6237</h1>\n        <p>\u60A8\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F,\u8BF7\u5230\u5546\u57CE\u9996\u9875\u9009\u8D2D\u4F60\u7684\u5546\u54C1</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"../html/index.html\" role=\"button\">\u70B9\u51FB\u53BB\u5230\u5546\u57CE\u754C\u9762</a></p>\n        </div>"; // 表示的为当我们的这个数据为空的时候我们渲染到这里就已经结束了

    return;
  } //如果每个都满足条件就返回true,否则就返回false  这个用于判断是否要全选


  var allChecked = data.every(function (item) {
    // console.log(item.is_select);
    return item.is_select == 1;
  });
  var total = shopNum(data); // 这个是购物车头部信息  单独渲染

  var str = "<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <div class=\"content\">\n            <label for=\"\" class=\"checkbox\">\n                <input type=\"checkbox\" id=\"all\" ".concat(allChecked ? 'checked' : '', ">\n                <span>\u5168\u9009</span>\n            </label>\n            <label for=\"\" class=\"type\">\n                <span>\u5546\u54C1\u79CD\u7C7B\uFF1A</span>\n                <span>").concat(data.length, "</span>\n            </label>\n            <label for=\"\" class=\"qty\">\n                <span>\u6240\u9009\u5546\u54C1\u6570\u91CF\uFF1A</span>                \n                <span>").concat(total.totalNum, "</span>\n            </label>\n            <label for=\"\" class=\"price\">\n                <span>\u6240\u9009\u5546\u54C1\u4EF7\u683C\uFF1A</span>\n                <span id=\"commodityPrices\">").concat(total.totalPrice, "</span>\n            </label>\n            <label for=\"\">\n                <button class=\"btn btn-warning btn-xs\" id=\"settlement\">\u7ED3\u7B97</button>\n                <button class=\"btn btn-info btn-xs\" id=\"clear\">\u6E05\u7A7A\u8D2D\u7269\u8F66</button>\n            </label>\n        </div>\n    </div>");
  str += "<div class=\"panel-body\"><ul>"; // 这里的数据需要拼接,这里我们根据数据库中的购物车中有几条数据我们就遍历生成几个li

  data.forEach(function (item) {
    str += " <li>\n        <div class=\"media\">\n            <div class=\"media-left media-middle\">\n                <input type=\"checkbox\" class=\"check\" ".concat(item.is_select == 1 ? 'checked' : '', " goods_id=\"").concat(item.goods_id, "\">\n                <a href=\"#\">\n                    <img class=\"media-object\"\n                        src=\"").concat(item.goods_small_logo, "\"\n                        alt=\"\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">").concat(item.goods_name, "</h4>\n                <div class=\"price\">\n                    <i class=\"glyphicon glyphicon-yen\"></i>\n                    <span>").concat(item.goods_price, "</span>\n                </div>\n                <div class=\"btn\">\n                    <p>\n                        <butto class=\"btn btn-danger del\" goods_id=\"").concat(item.goods_id, "\">\u5220\u9664\u5546\u54C1</butto>\n                    </p>\n                    <div class=\"btn-group\" role=\"group\" goods_id=\"").concat(item.goods_id, "\" aria-label=\"...\"> \n                        <button class=\"btn btn-default reduce\">-</button>\n                        <button class=\"btn btn-default\" id=\"goods_num\">").concat(item.cart_number, "</button>\n                        <button class=\"btn btn-default add\">+</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </li>");
  });
  str += " </ul></div></div>";
  container.innerHTML = str;
} // 这里采用事件委托的方式


container.onclick = function () {
  var e = window.event; //全选

  if (e.target.id == 'all') {
    // console.log(1);
    // 将本地存储的数据转换为js对象
    var data = JSON.parse(localStorage.getItem('goodsList')); // console.log(data);

    data.forEach(function (item) {
      // console.log(e.target.checked);
      // console.log(item.is_select);
      e.target.checked ? item.is_select = 1 : item.is_select = 0;
    });
    localStorage.setItem('goodsList', JSON.stringify(data)); // 之后我们还要将数据进行重新渲染

    render(data);
  } // 单选


  if (e.target.className == 'check') {
    var id = e.target.getAttribute('goods_id'); // console.log(id);
    // console.log(e.target.checked);
    // 获取本地的数据出来

    var _data = JSON.parse(localStorage.getItem('goodsList'));

    _data.forEach(function (item) {
      if (item.goods_id == id) {
        item.is_select = e.target.checked ? 1 : 0;
      }
    }); // 需要把  修改后的数据存储到本地存储中去


    localStorage.setItem('goodsList', JSON.stringify(_data)); // 重新渲染

    render(_data);
  } // 删除商品


  if (e.target.classList.contains('del')) {
    // console.log(1);
    // 删除数据库中和本地存储中对应的数据
    var _id = e.target.getAttribute('goods_id');

    pAjax({
      url: '../api/removeCarData.php',
      data: {
        username: login,
        goods_id: _id
      }
    }).then(function (res) {
      // console.log(JSON.parse(res));
      // 如果数据库中的数据删除成功的话我们就将我们本地存储的数据也进行删除操作
      // console.log(JSON.parse(res).code);
      if (JSON.parse(res).code) {
        // 先获取本地存储中的数据
        var _data2 = JSON.parse(localStorage.getItem("goodsList"));

        var _res = _data2.filter(function (item) {
          return item.goods_id != _id;
        }); // 每次删除之后我们将过滤后的数据存储到我们的本地存储中


        localStorage.setItem('goodsList', JSON.stringify(_res)); // 重现渲染结构

        render(_res);
      }
    });
  } // 更新商品的数量    reduce
  // 点击进行减少按钮


  if (e.target.classList.contains("reduce")) {
    // 需要把用户名  商品id 和  商品的数量传递给后端
    var goods_id = e.target.parentNode.getAttribute('goods_id'); // console.log(goods_id);

    var goods_num = e.target.nextElementSibling.innerHTML * 1 - 1; // 判断goods_num的值不能小于1

    if (goods_num <= 1) {
      goods_num = 1;
    }

    pAjax({
      url: '../api/updCarData.php',
      data: {
        username: login,
        goods_id: goods_id,
        goods_num: goods_num
      }
    }).then(function (res) {
      // console.log(JSON.parse(res).code);
      if (JSON.parse(res).code) {
        // 更改完数据库之后我们也需要更改本地存储中的数据
        var _data3 = JSON.parse(localStorage.getItem('goodsList')); // console.log(data);


        _data3.forEach(function (item) {
          // console.log(item.goods_id);
          if (item.goods_id === goods_id) {
            item.cart_number = goods_num;
          }
        }); // 重新渲染数据


        render(_data3);
        localStorage.setItem('goodsList', JSON.stringify(_data3));
      }
    });
  } // 点击进行增加按钮


  if (e.target.classList.contains('add')) {
    // console.log(e.target);
    // 需要把用户名  商品id 和  商品的数量传递给后端
    var _goods_id = e.target.parentNode.getAttribute('goods_id');

    var _goods_num = e.target.previousElementSibling.innerHTML * 1 + 1; // console.log(goods_id);
    // console.log(goods_num);


    pAjax({
      url: '../api/updCarData.php',
      data: {
        username: login,
        goods_id: _goods_id,
        goods_num: _goods_num
      }
    }).then(function (res) {
      // console.log(JSON.parse(res).code);
      if (JSON.parse(res).code) {
        // 更改完数据库之后我们也需要更改本地存储中的数据
        var _data4 = JSON.parse(localStorage.getItem('goodsList')); // console.log(data);


        _data4.forEach(function (item) {
          // console.log(item.goods_id);
          if (item.goods_id === _goods_id) {
            item.cart_number = _goods_num;
          }
        }); // 重新渲染数据


        render(_data4);
        localStorage.setItem('goodsList', JSON.stringify(_data4));
      }
    });
  } // console.log(e.target.id);


  if (e.target.id == 'clear') {
    //  clearData(login);
    pAjax({
      url: '../api/clearCarData.php',
      data: {
        username: login
      }
    }).then(function (res) {
      // console.log(JSON.parse(res));
      if (JSON.parse(res)) {
        localStorage.removeItem('goodsList');
        render([]);
      }
    });
  } // 点击的时候进行结算


  if (e.target.id == 'settlement') {
    // console.log(1);
    // alert(${total.totalPrice});
    var commodityPrices = document.querySelector("#commodityPrices"); // console.log(commodityPrices.innerHTML);

    alert("您购买的商品总价格为:" + commodityPrices.innerHTML);
  }
}; // 封装一个函数用于计算商品的数量


function shopNum(goods) {
  var res = goods.filter(function (item) {
    return item.is_select == 1;
  }); // 计算选中商品的数量

  var totalNum = res.reduce(function (pre, item) {
    // item.cart_number这个是一个字符串需要转换为数字进行计算
    return pre + item.cart_number * 1; // 这样书写表示的为pre从0开始算起,必须给我们的这个pre一个初始值
  }, 0); // console.log(totalNum);
  // 计算选中商品的总价格

  var totalPrice = res.reduce(function (pre, item) {
    return pre + item.goods_price * item.cart_number;
  }, 0);
  return {
    // totalNum:totalNum,
    totalNum: totalNum,
    totalPrice: totalPrice.toFixed(2)
  };
}
/* 
笔记:
【1】JSON.parse()
JSON通常用于与服务器交换数据
在接收服务器数据的时候一般是字符串
我们可以使用JSON.parse()方法将数据转换为JavaScript对象。
【2】JavaScript JSON.stringify()
JSON.stringify()方法用于将JavaScript值转换为JSON字符串。

*/