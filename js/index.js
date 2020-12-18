/* 轮播图部分 js代码   */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true, // 循环模式选项
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
/* 轮播图部分 js代码 */


/*轮播图右侧的 鼠标移入到图片就显示这个块元素*/
let plus = document.querySelector("#plus");
let shareTo = document.querySelector(".shareTo");
plus.onmouseover = function() {
  // console.log(1);
  shareTo.style.display = "block";
}
plus.onmouseout = function(){
  shareTo.style.display = "none";
}
/* end */



/* 火箭部分  start */
let toTop = document.querySelector(".toTop");
let doc = document.documentElement;
window.onscroll = function () {
  if (scrollY >= 500) {
    toTop.style.display = "block";
  }else {
    toTop.style.display = "none";
  }
}

toTop.onclick = function() {
  scrollTo({
    top:0,
    behavior:"smooth"
  });
}
/* 火箭部分  end */


/* nav 导航栏部分 渲染   start */
let bannerContent = document.querySelector(".bannerContent");
pAjax({
  url:'../api/getNavData.php'
}).then(res=>{
  // console.log(JSON.parse(res).list[0].title);
  // console.log(JSON.parse(res));
  let str = ` <a href="#" class="homePage">
  <i class="iconfont icon-fenlei3"></i>
  <span>网站首页</span>
</a>`;
  JSON.parse(res).list.forEach((item)=>{
    str += `<a href="${item.src}" class="bannerContent_a">${item.title}</a>`;
    // console.log(item.title);
  })
  bannerContent.innerHTML = str;
})
/* nav 导航栏部分  渲染  end */

// banner_con_left  部分  渲染  start
let banner_uls = document.querySelector(".banner_con_left ul");
pAjax({
  url:'../api/getBannerData.php'
}).then(res=>{
  // console.log(JSON.parse(res));
  let str = ``;
  JSON.parse(res).list.forEach(item=>{
    str += `<li>
    <i class="${item.class}"></i>
    <a href="${item.src}">${item.title}</a>
</li>`;
  });
  banner_uls.innerHTML = str;
})
// banner_con_left  部分  渲染  end

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
let secondsKillSelected_product = document.querySelector("#secondsKillSelected_product");
pAjax({
  url:'../api/getSecondsKillSelected.php'
}).then(res=>{
  console.log(JSON.parse(res).list);
  let str = ``;
  // console.log(JSON.parse(res));
  JSON.parse(res).list.forEach(item=>{
    str += `<div class="secondsKillSelected_product_box">
    <a href="../html/detail.html?id=${item.goods_id}">
        <img src="${item.goods_big_logo}" alt="">
    </a>
    <div class="secondsKillSelected_product_content">
        <h3>${item.goods_name}</h3>
        <div class="expirationTime">
            <p>劵&nbsp;<span>¥&nbsp;${item.stock_amount}</span></p>
            <p>过期时间<span>2020-12-30</span></p>
        </div>
        <p class="couponBalance">优惠券剩余<i>10000</i>&nbsp;张,已领取<i>105000</i>&nbsp;张</p>
        <p class="sales">销量<i>50000</i>&nbsp;件</p>
        <div class="goBuy">
            <div class="buy_price">${item.volume_price}</div>
            <div class="old_price">
                <p><i>¥</i>${item.goods_price}</p>
                <span>劵后价</span>
            </div>
            <div class="go_buy">
                <a href="../html/detail.html?id=${item.goods_id}">去下单</a>
            </div>
        </div>
    </div>
    

</div>`;
  });
  secondsKillSelected_product.innerHTML = str;
})
/* 领券秒杀精选部分 渲染  end */









/* 领劵优惠直播部分  start */

let cat_list_lis = document.querySelectorAll(".main_container .cat_list li a");
let preferentialLive = document.querySelector(".preferentialLive");
let goods_list_us = document.querySelectorAll(".goods_list ul");
let page = document.querySelector(".page");
let dishead_left = document.querySelector(".dishead_left");
let tatal = document.querySelector(".tatal");
let goods_list = document.querySelector("#goods_list");
let cat_list = document.querySelector(".cat_list");

// 定义一个数组长度为11的空数组
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
for(let i = 0;i < cat_list_lis.length;i++) {
  // 开始给每个小li设置索引号
  cat_list_lis[i].setAttribute('index',i);
  cat_list_lis[i].onclick = function() {
    // 干掉所有人留下自己
    for(let j = 0;j < cat_list_lis.length;j++) {
      cat_list_lis[j].style.color = "#4c4c4c";
    }
    this.style.color = "#ff6255";
    let index = this.getAttribute("index");
    for(let j = 0;j < goods_list_us.length;j++) {
      goods_list_us[j].style.display = "none";      
    }  
    goods_list_us[index].style.display = "block";  
    // console.log(index);
    // 每次点击的时候重新渲染数据
    fun(index);
  }
}

// 渲染数据部分
function fun(index) {
    // 获取数据
    let len = 8;
    let defaultInfo = {
      len:len,
      num:1
    }
    pAjax({
      // 先给地址获取数据
      url:'../api/getData.php',
      data:{
        start:defaultInfo.num,
        len:defaultInfo.len,
        index:index
      }
    }).then(res=>{
      // console.log(index);
      // console.log(JSON.parse(res));
      // console.log(JSON.parse(res).list);
      // 获取到数据之后就对数据进行处理
      dishead_left.innerHTML = `<h1>领券优惠直播
      <span class="tatal">${JSON.parse(res).total.count}</span>
  </h1>`;    
      // 处理数据 这里对数据进行分页操作
      new Pagination(page,{
        pageInfo:{
          pagenum:defaultInfo.num,//当前页面
          pagesize:defaultInfo.len,//每页多少条
          total:JSON.parse(res).total.count,//数据总数
          totalpage:Math.ceil(JSON.parse(res).total.count / defaultInfo.len) 
        },
        textInfo:{
        first:'首页',
        prev:'上一页',
        list:'',
        next:'下一页',
        last:'尾页'
      },
        change:function(num) {
          // 当我们点击的时候要重新获取数据
          // console.log(num);
          defaultInfo.num = num;
          getData();  
          // console.log(JSON.parse(res));
        }
      });
    });
    // 获取数据,这里可以理解为当我们切换分页按钮的时候要再次获取数据
    async function getData() {
      // console.log(index);
      let res = await pAjax({
        url:'../api/getData.php',
        data:{
          start:defaultInfo.num,
          len:defaultInfo.len,
          index:index 
        }
      });
      rendHtml(JSON.parse(res).list);
      // console.log(JSON.parse(res).list);
    }


    // 渲染结构
    function rendHtml(data) {
      let str = `<ul class="active clearFix">`;
      data.forEach(item=>{
        // console.log(item);
          str += `<li>
          <a href="../html/detail.html?id=${item.goods_id}" class="img" rel="nofollow" target="_blank">
            <i class="today-new"></i> 
             <img src="${item.goods_big_logo}" alt="">
          </a>
         <div class="goods_padding">
             <div class="coupon_wrap">
                 <span class="price"><b><i>￥</i>${item.volume_price}</b>券后</span>
                 <span class="old_price"><i>￥</i>${item.goods_price}</span>
                 <span class="coupon"><em class="quan_left"></em>券<b><i>￥</i>${item.stock_amount}</b><em class="quan_right"></em></span>
             </div>
             <div class="title">
                 <a target="_blank" href="../html/detail.html?id=${item.goods_id}">${item.goods_name}</a>
             </div>
             <div class="goods_num_type">
             
                 <div class="goods_type">
                     <i class="tmall" title="天猫"></i>							                                  </div>
             
             </div>
         </div>
         </li>`;
      });
       str += `</ul>`;
       goods_list.innerHTML = str;
    } 

}


/* 领劵优惠直播部分  end */