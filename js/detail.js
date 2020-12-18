// 打开详情页的时候先查看是否有携带id参数
// 如果灭有id参数的时候   跳转到列表页面
// 如果有id参数的时候  根据id去获取对象的数据  渲染

// search属性是一个可读可写的字符串,可以设置或返回当前url的查询部分(问号?之后的部分)
// let res = location.search;
let reg = /id=(\d+)/;//+表示前面的字符可以出现1-无限次 至少出现1一次  \d表示的为数字
// 如果不满足条件的话就跳转到我们的首页     这里的条件指的为参数
// if(!reg.test(location.search)) {
//   location.href = '../html/index.html';
// }

// 这里已经获取到了id
let id = reg.exec(location.search)[1];
// console.log(id);

let detail_row = document.querySelector("#detail_row");
// console.log(detail_row);
// 根据id获取数据    获取数据又要通过ajax请求数据
pAjax({
  url:'../api/getDetail.php',
  data:{
    id:id 
  }
}).then(res=>{
  // console.log(JSON.parse(res));
  // console.log(JSON.parse(res).detail);
  renderHtml(JSON.parse(res).detail);
});

// 渲染数据
function renderHtml(data) {
  // 这里因为只有一条数据,所以我们直接这样书写就好了
  detail_row.innerHTML = `<a rel="nofollow" href="javascript:;" class="img">
  <img src="${data.goods_big_logo}" alt="">
</a>
<div class="detail-col">
  <a class="title clearFix">                           
        <span class="tmall"></span> 
        <span class="title">${data.goods_name}</span>
  </a>
  <div class="desc">
      <span>推荐理由：【拍第二个选项】20个装速屯！成人一次性医用口罩！熔喷布是口罩的“心脏”！三层防护中间熔喷布，自由呼吸，高密度，有效阻止飞沫传播，给儿童好的防护~</span>
  </div>
  <div class="coupon-wrap clearFix">
      <span class="now-price"><b>(独享)</b>券后价&nbsp;&nbsp;<b>¥<i>${data.volume_price}</i></b></span>
      <span class="org-price">在售价&nbsp;&nbsp;¥<i>${data.goods_price}</i></span>   
  </div>
  <div class="text-wrap">
      <span class="text-wrap-span">
            已领券<i>43000</i>张，手慢无
       </span>
      <span>已有<i>1770931</i>人购买</span>
          </div>
              <div class="ehy-normal clearFix">
              <div class="buy-coupon">
                  <span>优惠券</span>
                  <span><b><i>￥</i>${data.stock_amount}</b></span>
              </div>
              <a rel="nofollow" href="javascript:;" id="addCar"> 领券购买</a>
          </div>                  
  <div class="goods-tit-type">
      <div class="goods-type">
          <i class="tmall" title="天猫"></i><i class="you" title="优品"></i>
      </div>
  </div>
  <div class="text2">
      <span>如果您喜欢此宝贝，记得分享给您的朋友，一起享优惠：</span>
      <div class="bdshare">
          <div class="bdsharebuttonbox bdshare-button-style0-16" data-bd-bind="1608108468140">
              <a href="#" class="bds_more" data-cmd="more"></a>
              <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
              <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
              <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
          </div>       
      </div>
  </div>

</div>
<div class="pos-right">
  <p><span>大家都在抢</span></p>
  <div class="pos-box">
      <div class="pos-goods-list top" style="height: 3480px; top: -1305px;">
                         <a class="pos-goods" title="【限量！得抢】不锈钢厨房置物架" target="_blank" href="/?tab=qproduct&amp;iid=594763226083">
             <img alt="【限量！得抢】不锈钢厨房置物架" src="https://img.alicdn.com/imgextra/i2/2493256648/O1CN01kTokMJ1yypfCJSu5x_!!2493256648.jpg_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="【维达代工厂】厨房专用吸油纸3大包" target="_blank" href="/?tab=qproduct&amp;iid=632521534858">
             <img alt="【维达代工厂】厨房专用吸油纸3大包" src="https://img.alicdn.com/imgextra/i1/2208437894964/O1CN010EQeFb1mXYiAezrPM_!!2208437894964.jpg_130x130.jpg">
             <span>券后：¥7.80</span>
        </a>
                           <a class="pos-goods" title="新券！20贴袋鼠自发热暖贴暖宝宝保暖宫" target="_blank" href="/?tab=qproduct&amp;iid=625671741315">
             <img alt="新券！20贴袋鼠自发热暖贴暖宝宝保暖宫" src="https://img.alicdn.com/i3/2207705926212/O1CN010i3lNM1vl8zsS4tLf_!!2207705926212.jpg_130x130.jpg">
             <span>券后：¥8.90</span>
        </a>
                           <a class="pos-goods" title="【乐力】益生菌小蓝条一盒20条" target="_blank" href="/?tab=qproduct&amp;iid=536892809132">
             <img alt="【乐力】益生菌小蓝条一盒20条" src="https://img.alicdn.com/imgextra/i2/2911666548/O1CN01b63Y3a1yF20HNl45X_!!2911666548.jpg_130x130.jpg">
             <span>券后：¥14.00</span>
        </a>
                           <a class="pos-goods" title="【南极人】保暖老寒腿关节自发热护膝" target="_blank" href="/?tab=qproduct&amp;iid=544318924892">
             <img alt="【南极人】保暖老寒腿关节自发热护膝" src="https://img.alicdn.com/imgextra/i4/1698892796/O1CN014TdD581WWc2G3BZhN_!!1698892796.jpg_130x130.jpg">
             <span>券后：¥9.00</span>
        </a>
                           <a class="pos-goods" title="【大希地】脆皮火山石烤肠20根" target="_blank" href="/?tab=qproduct&amp;iid=616729634595">
             <img alt="【大希地】脆皮火山石烤肠20根" src="https://img.alicdn.com/imgextra/i3/1918385168/O1CN01hX2iKC1o2zViczSII_!!1918385168.jpg_130x130.jpg">
             <span>券后：¥35.90</span>
        </a>
                           <a class="pos-goods" title="【诺梵】圣诞节松露巧克力100颗送圣诞帽" target="_blank" href="/?tab=qproduct&amp;iid=607845964933">
             <img alt="【诺梵】圣诞节松露巧克力100颗送圣诞帽" src="https://img.alicdn.com/i4/848228203/O1CN016SUYEK2AT1Z7rpL0J_!!848228203.jpg_130x130.jpg">
             <span>券后：¥29.90</span>
        </a>
                           <a class="pos-goods" title="棉拖鞋女家居冬季情侣室内包跟厚底" target="_blank" href="/?tab=qproduct&amp;iid=624874306464">
             <img alt="棉拖鞋女家居冬季情侣室内包跟厚底" src="//img.alicdn.com/imgextra/i2/2121402114/O1CN01VlYCVo1RUFvVIbNI4_!!2121402114-0-lubanu-s.jpg_130x130.jpg">
             <span>券后：¥7.90</span>
        </a>
                           <a class="pos-goods" title="【两面针旗舰店】红豆薏米芡实茶150g" target="_blank" href="/?tab=qproduct&amp;iid=633744013074">
             <img alt="【两面针旗舰店】红豆薏米芡实茶150g" src="https://img.alicdn.com/imgextra/i1/2643760953/O1CN01r8AFBq1IuW5pgDIwT_!!2643760953-2-daren.png_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="【罗马仕旗舰店】苹果快充数据线1米" target="_blank" href="/?tab=qproduct&amp;iid=595840948778">
             <img alt="【罗马仕旗舰店】苹果快充数据线1米" src="https://img.alicdn.com/imgextra/i1/1952819637/O1CN01dpY0dW2L3nWnuEg8E_!!1952819637.png_130x130.jpg">
             <span>券后：¥1.90</span>
        </a>
                           <a class="pos-goods" title="【20片】润暖暖贴 自发热暖宝宝" target="_blank" href="/?tab=qproduct&amp;iid=523057656808">
             <img alt="【20片】润暖暖贴 自发热暖宝宝" src="https://img.alicdn.com/imgextra/i3/436776929/O1CN01v8V7P0213Wz3watUA_!!436776929.jpg_130x130.jpg">
             <span>券后：¥7.80</span>
        </a>
                           <a class="pos-goods" title="【摩西欧】充电式毛球修剪器去毛球" target="_blank" href="/?tab=qproduct&amp;iid=628403155577">
             <img alt="【摩西欧】充电式毛球修剪器去毛球" src="//img.alicdn.com/imgextra/i4/2208705124900/O1CN01uvfRI61m4FLi3Bi1M_!!2208705124900.png_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="【七度空间官旗】超熟睡安心裤3包*3片" target="_blank" href="/?tab=qproduct&amp;iid=617830128093">
             <img alt="【七度空间官旗】超熟睡安心裤3包*3片" src="https://img.alicdn.com/imgextra/i4/3961118975/O1CN01fsydi62GAbKItLBae_!!2-item_pic.png_130x130.jpg">
             <span>券后：¥19.90</span>
        </a>
                           <a class="pos-goods" title="【南极人】薰衣草留香洗衣液" target="_blank" href="/?tab=qproduct&amp;iid=596021579374">
             <img alt="【南极人】薰衣草留香洗衣液" src="https://img.alicdn.com/imgextra/i2/899107167/O1CN01YC9XSN22oXD0MFgan_!!899107167.jpg_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="【大牌仁和】焕颜美白祛斑霜" target="_blank" href="/?tab=qproduct&amp;iid=625893087763">
             <img alt="【大牌仁和】焕颜美白祛斑霜" src="https://img.alicdn.com/imgextra/i3/2130096995/O1CN01b1Pw2m21Xl6K5bLnQ_!!2130096995.jpg_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="【晨光】回形针一盒+6支中性笔" target="_blank" href="/?tab=qproduct&amp;iid=614382262420">
             <img alt="【晨光】回形针一盒+6支中性笔" src="https://img.alicdn.com/imgextra/i4/3697149989/O1CN01tUVi3c2Nf0r9WZEs2_!!3697149989.jpg_130x130.jpg">
             <span>券后：¥1.90</span>
        </a>
                           <a class="pos-goods" title="【30只】可孚一次性医用外科防尘透气口罩" target="_blank" href="/?tab=qproduct&amp;iid=616974150512">
             <img alt="【30只】可孚一次性医用外科防尘透气口罩" src="https://img.alicdn.com/bao/uploaded/O1CN01ToM0jB1fXpcvQxhDt_!!6000000004017-2-yinhe.png_130x130.jpg">
             <span>券后：¥5.90</span>
        </a>
                           <a class="pos-goods" title="【4个装】网红长柄不锈钢汤匙" target="_blank" href="/?tab=qproduct&amp;iid=630138233753">
             <img alt="【4个装】网红长柄不锈钢汤匙" src="https://img.alicdn.com/imgextra/i1/52319595/O1CN01OzpoZ52KkYtWIXsHj_!!52319595.png_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="螺师皇正宗柳州螺蛳粉345g*2大袋" target="_blank" href="/?tab=qproduct&amp;iid=627043213329">
             <img alt="螺师皇正宗柳州螺蛳粉345g*2大袋" src="//img.alicdn.com/imgextra/i4/2208543568140/O1CN01AIt4aD2A0Ab6o71sb_!!2208543568140.jpg_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="【亨博士】鸡内金山楂咀嚼片100粒" target="_blank" href="/?tab=qproduct&amp;iid=624577308735">
             <img alt="【亨博士】鸡内金山楂咀嚼片100粒" src="https://img.alicdn.com/i1/2775741203/O1CN01sqXajx1Kl166WVRIZ_!!2775741203.jpg_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                           <a class="pos-goods" title="三山半！正宗湖南麻阳孕妇级冰糖橙子5斤" target="_blank" href="/?tab=qproduct&amp;iid=632033108262">
             <img alt="三山半！正宗湖南麻阳孕妇级冰糖橙子5斤" src="https://img.alicdn.com/imgextra/i3/2989265740/O1CN01E1dD3R1sGy3pRIAA4_!!2989265740.jpg_130x130.jpg">
             <span>券后：¥6.80</span>
        </a>
                           <a class="pos-goods" title="【仁和药业】便携式口气清新剂15mL" target="_blank" href="/?tab=qproduct&amp;iid=627483020952">
             <img alt="【仁和药业】便携式口气清新剂15mL" src="https://img.alicdn.com/bao/uploaded/O1CN01xVGpgb1qYi9hhFbh6_!!2-item_pic.png_130x130.jpg">
             <span>券后：¥5.90</span>
        </a>
                           <a class="pos-goods" title="【宇风】德国刀具厨房套装菜刀5件套" target="_blank" href="/?tab=qproduct&amp;iid=614524695007">
             <img alt="【宇风】德国刀具厨房套装菜刀5件套" src="https://img.alicdn.com/imgextra/i2/2205573506631/O1CN01APUp7y1yr2vIze6B1_!!0-item_pic.jpg_130x130.jpg">
             <span>券后：¥39.00</span>
        </a>
                           <a class="pos-goods" title="【9.9秒杀】形象美深海藻眼膜6" target="_blank" href="/?tab=qproduct&amp;iid=586537874083">
             <img alt="【9.9秒杀】形象美深海藻眼膜6" src="https://img.alicdn.com/imgextra/i3/2921409858/O1CN01MPtiTA2Mh0zo2miRF_!!2921409858.jpg_130x130.jpg">
             <span>券后：¥9.90</span>
        </a>
                     
      </div>
  </div>
  <div class="pos-act">
      <a class="bot-btn" href="javascript:;"></a>
      <a class="top-btn" href="javascript:;"></a>
  </div>
</div>`;
}

// 这里用到了事件委托
detail_row.onclick = function() {
  let e = window.event;
  // 当我们点击领劵购买的时候    这个时候我们要添加到购物车  
  // 正常情况我们是要跳转到购物车页面  但是这里我们先判断是否
  // 登录了,如果已经登录了我们直接跳转到购物车页面 如果没有登录
  // 那么我们就跳转到登录页面
  if(e.target.id = 'addCar') {
      let login = getCookie("login");
      if(!login) {
            // 没有登录的话我们就跳转到登录页面进行登录
            location.href = '../html/login.html';
            // 将当前页面存储在本地存储上面
            localStorage.setItem('url','http://gz2008.com/project/html/detail.html?id='+id);
            return;
      }

      // 如果登录了当我点击添加到购物车的时候我们就得向数据库中查询这个商品
      // 根据id查询  传递两个参数  哪个用户  添加了哪个商品
      pAjax({
        url:'../api/addCarData.php',
        data:{
          username:login,
          goods_id:id
        }
      }).then(res=>{
        // alert("添加成功!");
        window.location.href = "../html/car.html";
      })
  }
}
// let addCar = document.querySelector("#addCar");
// console.log(addCar);




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



/* 精品推荐商品列表  start */
let ul = document.querySelector("#goods-list #uls");
// console.log(ul);
pAjax({
  url:'../api/getDetailData.php'
}).then(res=>{
  // console.log(JSON.parse(res));
  // console.log(JSON.parse(res).list);
  let str = ``;
  JSON.parse(res).list.forEach((item)=>{
    str += `<li>
    <a href="../html/detail.html?id=${item.goods_id}" class="img" rel="nofollow" target="_blank">
        <img src="${item.	goods_big_logo}" alt="">
    </a>
    <div class="padding">
        <div class="coupon-wrap clearFix">
            <span class="price"><b><i>￥</i>${item.volume_price}</b>券后价</span>
            <span class="old-price"><i>￥</i>${item.goods_price}</span>
            <span class="coupon"><em class="quan-left"></em>券<b><i>￥</i>${item.stock_amount}</b><em class="quan-right"></em></span>
        </div>
        <div class="title">
            <a target="_blank" href="../html/detail.html?id=${item.goods_id}">${item.goods_name}</a>
        </div>

        <div class="goods-num-type">
            <span class="goods-num">销量<b>${item.volume_price}</b></span>
            <div class="goods-type">
              <i class="taobao" title="淘宝"></i> 
            </div>
        </div>
    </div>
</li>`;
  })
  ul.innerHTML = str;
})

/* 精品推荐商品列表  end */