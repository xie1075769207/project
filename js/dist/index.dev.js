"use strict";

/* 轮播图部分 js代码   */
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  // 循环模式选项
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
/* 轮播图部分 js代码 */

/*轮播图右侧的 鼠标移入到图片就显示这个块元素*/

var plus = document.querySelector("#plus");
var shareTo = document.querySelector(".shareTo");

plus.onmouseover = function () {
  // console.log(1);
  shareTo.style.display = "block";
};

plus.onmouseout = function () {
  shareTo.style.display = "none";
};
/* end */

/* 火箭部分  start */


var toTop = document.querySelector(".toTop");
var doc = document.documentElement;

window.onscroll = function () {
  if (scrollY >= 500) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
/* 火箭部分  end */

/* nav 导航栏部分 渲染   start */


var bannerContent = document.querySelector(".bannerContent");
pAjax({
  url: '../api/getNavData.php'
}).then(function (res) {
  // console.log(JSON.parse(res).list[0].title);
  // console.log(JSON.parse(res));
  var str = " <a href=\"#\" class=\"homePage\">\n  <i class=\"iconfont icon-fenlei3\"></i>\n  <span>\u7F51\u7AD9\u9996\u9875</span>\n</a>";
  JSON.parse(res).list.forEach(function (item) {
    str += "<a href=\"".concat(item.src, "\" class=\"bannerContent_a\">").concat(item.title, "</a>"); // console.log(item.title);
  });
  bannerContent.innerHTML = str;
});
/* nav 导航栏部分  渲染  end */
// banner_con_left  部分  渲染  start

var banner_uls = document.querySelector(".banner_con_left ul");
pAjax({
  url: '../api/getBannerData.php'
}).then(function (res) {
  // console.log(JSON.parse(res));
  var str = "";
  JSON.parse(res).list.forEach(function (item) {
    str += "<li>\n    <i class=\"".concat(item["class"], "\"></i>\n    <a href=\"").concat(item.src, "\">").concat(item.title, "</a>\n</li>");
  });
  banner_uls.innerHTML = str;
}); // banner_con_left  部分  渲染  end

/* swiper-wrapper  轮播图 部分  渲染  start */
// let swiper_container = document.querySelector('#swiper_container');
// pAjax({
//   url:'../api/getSlideShow.php'
// }).then(res=>{
//   // console.log(JSON.parse(res));
//   let str = `<div class="swiper-wrapper" id="swiper_wrapper">`;
//   JSON.parse(res).list.forEach(item=>{
//     str += `<div class="swiper-slide">
//     <img src="${item.src}" alt="">
// </div>`;
//   });
//   str += `</div>
//   <div class="swiper-pagination"></div>
//   <div class="swiper-button-next"></div>
//   <div class="swiper-button-prev"></div>`;
//   swiper_container.innerHTML = str;
// })

/* swiper-wrapper  轮播图 部分  渲染  end */

/* 领券秒杀精选部分  渲染  start */

var secondsKillSelected_product = document.querySelector("#secondsKillSelected_product");
pAjax({
  url: '../api/getSecondsKillSelected.php'
}).then(function (res) {
  console.log(JSON.parse(res).list);
  var str = ""; // console.log(JSON.parse(res));

  JSON.parse(res).list.forEach(function (item) {
    str += "<div class=\"secondsKillSelected_product_box\">\n    <a href=\"../html/detail.html?id=".concat(item.goods_id, "\">\n        <img src=\"").concat(item.goods_big_logo, "\" alt=\"\">\n    </a>\n    <div class=\"secondsKillSelected_product_content\">\n        <h3>").concat(item.goods_name, "</h3>\n        <div class=\"expirationTime\">\n            <p>\u52B5&nbsp;<span>\xA5&nbsp;").concat(item.stock_amount, "</span></p>\n            <p>\u8FC7\u671F\u65F6\u95F4<span>2020-12-30</span></p>\n        </div>\n        <p class=\"couponBalance\">\u4F18\u60E0\u5238\u5269\u4F59<i>10000</i>&nbsp;\u5F20,\u5DF2\u9886\u53D6<i>105000</i>&nbsp;\u5F20</p>\n        <p class=\"sales\">\u9500\u91CF<i>50000</i>&nbsp;\u4EF6</p>\n        <div class=\"goBuy\">\n            <div class=\"buy_price\">").concat(item.volume_price, "</div>\n            <div class=\"old_price\">\n                <p><i>\xA5</i>").concat(item.goods_price, "</p>\n                <span>\u52B5\u540E\u4EF7</span>\n            </div>\n            <div class=\"go_buy\">\n                <a href=\"../html/detail.html?id=").concat(item.goods_id, "\">\u53BB\u4E0B\u5355</a>\n            </div>\n        </div>\n    </div>\n    \n\n</div>");
  });
  secondsKillSelected_product.innerHTML = str;
});
/* 领券秒杀精选部分 渲染  end */

/* 领劵优惠直播部分  start */

var cat_list_lis = document.querySelectorAll(".main_container .cat_list li a");
var preferentialLive = document.querySelector(".preferentialLive");
var goods_list_us = document.querySelectorAll(".goods_list ul");
var page = document.querySelector(".page");
var dishead_left = document.querySelector(".dishead_left");
var tatal = document.querySelector(".tatal");
var goods_list = document.querySelector("#goods_list");
var cat_list = document.querySelector(".cat_list"); // 定义一个数组长度为11的空数组
// let arr = new Array(11);
// // function getArr() {
//   for(let i = 0;i <cat_list_lis.length;i++) {
//     // 获取数据
//     let len = 8;
//     let defaultInfo = {
//       len:len,
//       num:1
//     }
//     pAjax({
//        // 先给地址获取数据
//        url:'../api/getData.php',
//        async:false,
//        data:{
//          start:defaultInfo.num,
//          len:defaultInfo.len,
//          index:i
//        }
//     }).then(res=>{
//       // console.log(JSON.parse(res).total.count);
//       arr[i] = JSON.parse(res).total.count;
//       // console.log(arr[i]);     
//     })
//   }
// return arr;
// }
// console.log(arr[0]);
// console.log(arr[0]);
//  cat_list.innerHTML = ` <ul>
// <li>
//     <a href="javascript:void(0);">全部优惠<b>(1)</b></a>
// </li>                                              
// <li>
//     <a href="javascript:void(0);">
//         女装<b>(2)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//         母婴<b>(3)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//         化妆品<b>(4)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//         居家<b>(5)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//      鞋包配饰<b>(6)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//          美食<b>(7)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//         文体车品<b>(8)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//         数码家电<b>(9)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//         男装<b>(10)</b>
//     </a>
// </li>                                               
// <li>
//     <a href="javascript:void(0);">
//         内衣<b>(11)</b>
//     </a>
// </li>                                                                
// </ul>`; 
// console.log(arr[3]);

fun(0);

for (var i = 0; i < cat_list_lis.length; i++) {
  // 开始给每个小li设置索引号
  cat_list_lis[i].setAttribute('index', i);

  cat_list_lis[i].onclick = function () {
    // 干掉所有人留下自己
    for (var j = 0; j < cat_list_lis.length; j++) {
      cat_list_lis[j].style.color = "#4c4c4c";
    }

    this.style.color = "#ff6255";
    var index = this.getAttribute("index");

    for (var _j = 0; _j < goods_list_us.length; _j++) {
      goods_list_us[_j].style.display = "none";
    }

    goods_list_us[index].style.display = "block"; // console.log(index);
    // 每次点击的时候重新渲染数据

    fun(index);
  };
} // 渲染数据部分


function fun(index) {
  // 获取数据
  var len = 8;
  var defaultInfo = {
    len: len,
    num: 1
  };
  pAjax({
    // 先给地址获取数据
    url: '../api/getData.php',
    data: {
      start: defaultInfo.num,
      len: defaultInfo.len,
      index: index
    }
  }).then(function (res) {
    // console.log(index);
    // console.log(JSON.parse(res));
    // console.log(JSON.parse(res).list);
    // 获取到数据之后就对数据进行处理
    dishead_left.innerHTML = "<h1>\u9886\u5238\u4F18\u60E0\u76F4\u64AD\n      <span class=\"tatal\">".concat(JSON.parse(res).total.count, "</span>\n  </h1>"); // 处理数据 这里对数据进行分页操作

    new Pagination(page, {
      pageInfo: {
        pagenum: defaultInfo.num,
        //当前页面
        pagesize: defaultInfo.len,
        //每页多少条
        total: JSON.parse(res).total.count,
        //数据总数
        totalpage: Math.ceil(JSON.parse(res).total.count / defaultInfo.len)
      },
      textInfo: {
        first: '首页',
        prev: '上一页',
        list: '',
        next: '下一页',
        last: '尾页'
      },
      change: function change(num) {
        // 当我们点击的时候要重新获取数据
        // console.log(num);
        defaultInfo.num = num;
        getData(); // console.log(JSON.parse(res));
      }
    });
  }); // 获取数据,这里可以理解为当我们切换分页按钮的时候要再次获取数据

  function getData() {
    var res;
    return regeneratorRuntime.async(function getData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(pAjax({
              url: '../api/getData.php',
              data: {
                start: defaultInfo.num,
                len: defaultInfo.len,
                index: index
              }
            }));

          case 2:
            res = _context.sent;
            rendHtml(JSON.parse(res).list); // console.log(JSON.parse(res).list);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  } // 渲染结构


  function rendHtml(data) {
    var str = "<ul class=\"active clearFix\">";
    data.forEach(function (item) {
      // console.log(item);
      str += "<li>\n          <a href=\"../html/detail.html?id=".concat(item.goods_id, "\" class=\"img\" rel=\"nofollow\" target=\"_blank\">\n            <i class=\"today-new\"></i> \n             <img src=\"").concat(item.goods_big_logo, "\" alt=\"\">\n          </a>\n         <div class=\"goods_padding\">\n             <div class=\"coupon_wrap\">\n                 <span class=\"price\"><b><i>\uFFE5</i>").concat(item.volume_price, "</b>\u5238\u540E</span>\n                 <span class=\"old_price\"><i>\uFFE5</i>").concat(item.goods_price, "</span>\n                 <span class=\"coupon\"><em class=\"quan_left\"></em>\u5238<b><i>\uFFE5</i>").concat(item.stock_amount, "</b><em class=\"quan_right\"></em></span>\n             </div>\n             <div class=\"title\">\n                 <a target=\"_blank\" href=\"../html/detail.html?id=").concat(item.goods_id, "\">").concat(item.goods_name, "</a>\n             </div>\n             <div class=\"goods_num_type\">\n             \n                 <div class=\"goods_type\">\n                     <i class=\"tmall\" title=\"\u5929\u732B\"></i>\t\t\t\t\t\t\t                                  </div>\n             \n             </div>\n         </div>\n         </li>");
    });
    str += "</ul>";
    goods_list.innerHTML = str;
  }
}
/* 领劵优惠直播部分  end */