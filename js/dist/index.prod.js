"use strict";var swiper=new Swiper(".swiper-container",{spaceBetween:30,centeredSlides:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),plus=document.querySelector("#plus"),shareTo=document.querySelector(".shareTo");plus.onmouseover=function(){shareTo.style.display="block"},plus.onmouseout=function(){shareTo.style.display="none"};var toTop=document.querySelector(".toTop"),doc=document.documentElement;window.onscroll=function(){500<=scrollY?toTop.style.display="block":toTop.style.display="none"},toTop.onclick=function(){scrollTo({top:0,behavior:"smooth"})};var bannerContent=document.querySelector(".bannerContent");pAjax({url:"../api/getNavData.php"}).then(function(n){var e=' <a href="#" class="homePage">\n  <i class="iconfont icon-fenlei3"></i>\n  <span>网站首页</span>\n</a>';JSON.parse(n).list.forEach(function(n){e+='<a href="'.concat(n.src,'" class="bannerContent_a">').concat(n.title,"</a>")}),bannerContent.innerHTML=e});var banner_uls=document.querySelector(".banner_con_left ul");pAjax({url:"../api/getBannerData.php"}).then(function(n){var e="";JSON.parse(n).list.forEach(function(n){e+='<li>\n    <i class="'.concat(n.class,'"></i>\n    <a href="').concat(n.src,'">').concat(n.title,"</a>\n</li>")}),banner_uls.innerHTML=e});var secondsKillSelected_product=document.querySelector("#secondsKillSelected_product");pAjax({url:"../api/getSecondsKillSelected.php"}).then(function(n){console.log(JSON.parse(n).list);var e="";JSON.parse(n).list.forEach(function(n){e+='<div class="secondsKillSelected_product_box">\n    <a href="../html/detail.html?id='.concat(n.goods_id,'">\n        <img src="').concat(n.goods_big_logo,'" alt="">\n    </a>\n    <div class="secondsKillSelected_product_content">\n        <h3>').concat(n.goods_name,'</h3>\n        <div class="expirationTime">\n            <p>劵&nbsp;<span>¥&nbsp;').concat(n.stock_amount,'</span></p>\n            <p>过期时间<span>2020-12-30</span></p>\n        </div>\n        <p class="couponBalance">优惠券剩余<i>10000</i>&nbsp;张,已领取<i>105000</i>&nbsp;张</p>\n        <p class="sales">销量<i>50000</i>&nbsp;件</p>\n        <div class="goBuy">\n            <div class="buy_price">').concat(n.volume_price,'</div>\n            <div class="old_price">\n                <p><i>¥</i>').concat(n.goods_price,'</p>\n                <span>劵后价</span>\n            </div>\n            <div class="go_buy">\n                <a href="../html/detail.html?id=').concat(n.goods_id,'">去下单</a>\n            </div>\n        </div>\n    </div>\n    \n\n</div>')}),secondsKillSelected_product.innerHTML=e});var cat_list_lis=document.querySelectorAll(".main_container .cat_list li a"),preferentialLive=document.querySelector(".preferentialLive"),goods_list_us=document.querySelectorAll(".goods_list ul"),page=document.querySelector(".page"),dishead_left=document.querySelector(".dishead_left"),tatal=document.querySelector(".tatal"),goods_list=document.querySelector("#goods_list"),cat_list=document.querySelector(".cat_list");fun(0);for(var i=0;i<cat_list_lis.length;i++)cat_list_lis[i].setAttribute("index",i),cat_list_lis[i].onclick=function(){for(var n=0;n<cat_list_lis.length;n++)cat_list_lis[n].style.color="#4c4c4c";this.style.color="#ff6255";for(var e=this.getAttribute("index"),t=0;t<goods_list_us.length;t++)goods_list_us[t].style.display="none";goods_list_us[e].style.display="block",fun(e)};function fun(t){var a={len:8,num:1};pAjax({url:"../api/getData.php",data:{start:a.num,len:a.len,index:t}}).then(function(n){dishead_left.innerHTML='<h1>领券优惠直播\n      <span class="tatal">'.concat(JSON.parse(n).total.count,"</span>\n  </h1>"),new Pagination(page,{pageInfo:{pagenum:a.num,pagesize:a.len,total:JSON.parse(n).total.count,totalpage:Math.ceil(JSON.parse(n).total.count/a.len)},textInfo:{first:"首页",prev:"上一页",list:"",next:"下一页",last:"尾页"},change:function(n){var e;a.num=n,regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(pAjax({url:"../api/getData.php",data:{start:a.num,len:a.len,index:t}}));case 2:e=n.sent,function(n){var e='<ul class="active clearFix">';n.forEach(function(n){e+='<li>\n          <a href="../html/detail.html?id='.concat(n.goods_id,'" class="img" rel="nofollow" target="_blank">\n            <i class="today-new"></i> \n             <img src="').concat(n.goods_big_logo,'" alt="">\n          </a>\n         <div class="goods_padding">\n             <div class="coupon_wrap">\n                 <span class="price"><b><i>￥</i>').concat(n.volume_price,'</b>券后</span>\n                 <span class="old_price"><i>￥</i>').concat(n.goods_price,'</span>\n                 <span class="coupon"><em class="quan_left"></em>券<b><i>￥</i>').concat(n.stock_amount,'</b><em class="quan_right"></em></span>\n             </div>\n             <div class="title">\n                 <a target="_blank" href="../html/detail.html?id=').concat(n.goods_id,'">').concat(n.goods_name,'</a>\n             </div>\n             <div class="goods_num_type">\n             \n                 <div class="goods_type">\n                     <i class="tmall" title="天猫"></i>\t\t\t\t\t\t\t                                  </div>\n             \n             </div>\n         </div>\n         </li>')}),e+="</ul>",goods_list.innerHTML=e}(JSON.parse(e).list);case 4:case"end":return n.stop()}})}})})}