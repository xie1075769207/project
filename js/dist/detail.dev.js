"use strict";

// 打开详情页的时候先查看是否有携带id参数
// 如果灭有id参数的时候   跳转到列表页面
// 如果有id参数的时候  根据id去获取对象的数据  渲染
// search属性是一个可读可写的字符串,可以设置或返回当前url的查询部分(问号?之后的部分)
// let res = location.search;
var reg = /id=(\d+)/; //+表示前面的字符可以出现1-无限次 至少出现1一次  \d表示的为数字
// 如果不满足条件的话就跳转到我们的首页     这里的条件指的为参数
// if(!reg.test(location.search)) {
//   location.href = '../html/index.html';
// }
// 这里已经获取到了id

var id = reg.exec(location.search)[1]; // console.log(id);

var detail_row = document.querySelector("#detail_row"); // console.log(detail_row);
// 根据id获取数据    获取数据又要通过ajax请求数据

pAjax({
  url: '../api/getDetail.php',
  data: {
    id: id
  }
}).then(function (res) {
  // console.log(JSON.parse(res));
  // console.log(JSON.parse(res).detail);
  renderHtml(JSON.parse(res).detail);
}); // 渲染数据

function renderHtml(data) {
  // 这里因为只有一条数据,所以我们直接这样书写就好了
  detail_row.innerHTML = "<a rel=\"nofollow\" href=\"javascript:;\" class=\"img\">\n  <img src=\"".concat(data.goods_big_logo, "\" alt=\"\">\n</a>\n<div class=\"detail-col\">\n  <a class=\"title clearFix\">                           \n        <span class=\"tmall\"></span> \n        <span class=\"title\">").concat(data.goods_name, "</span>\n  </a>\n  <div class=\"desc\">\n      <span>\u63A8\u8350\u7406\u7531\uFF1A\u3010\u62CD\u7B2C\u4E8C\u4E2A\u9009\u9879\u301120\u4E2A\u88C5\u901F\u5C6F\uFF01\u6210\u4EBA\u4E00\u6B21\u6027\u533B\u7528\u53E3\u7F69\uFF01\u7194\u55B7\u5E03\u662F\u53E3\u7F69\u7684\u201C\u5FC3\u810F\u201D\uFF01\u4E09\u5C42\u9632\u62A4\u4E2D\u95F4\u7194\u55B7\u5E03\uFF0C\u81EA\u7531\u547C\u5438\uFF0C\u9AD8\u5BC6\u5EA6\uFF0C\u6709\u6548\u963B\u6B62\u98DE\u6CAB\u4F20\u64AD\uFF0C\u7ED9\u513F\u7AE5\u597D\u7684\u9632\u62A4~</span>\n  </div>\n  <div class=\"coupon-wrap clearFix\">\n      <span class=\"now-price\"><b>(\u72EC\u4EAB)</b>\u5238\u540E\u4EF7&nbsp;&nbsp;<b>\xA5<i>").concat(data.volume_price, "</i></b></span>\n      <span class=\"org-price\">\u5728\u552E\u4EF7&nbsp;&nbsp;\xA5<i>").concat(data.goods_price, "</i></span>   \n  </div>\n  <div class=\"text-wrap\">\n      <span class=\"text-wrap-span\">\n            \u5DF2\u9886\u5238<i>43000</i>\u5F20\uFF0C\u624B\u6162\u65E0\n       </span>\n      <span>\u5DF2\u6709<i>1770931</i>\u4EBA\u8D2D\u4E70</span>\n          </div>\n              <div class=\"ehy-normal clearFix\">\n              <div class=\"buy-coupon\">\n                  <span>\u4F18\u60E0\u5238</span>\n                  <span><b><i>\uFFE5</i>").concat(data.stock_amount, "</b></span>\n              </div>\n              <a rel=\"nofollow\" href=\"javascript:;\" id=\"addCar\"> \u9886\u5238\u8D2D\u4E70</a>\n          </div>                  \n  <div class=\"goods-tit-type\">\n      <div class=\"goods-type\">\n          <i class=\"tmall\" title=\"\u5929\u732B\"></i><i class=\"you\" title=\"\u4F18\u54C1\"></i>\n      </div>\n  </div>\n  <div class=\"text2\">\n      <span>\u5982\u679C\u60A8\u559C\u6B22\u6B64\u5B9D\u8D1D\uFF0C\u8BB0\u5F97\u5206\u4EAB\u7ED9\u60A8\u7684\u670B\u53CB\uFF0C\u4E00\u8D77\u4EAB\u4F18\u60E0\uFF1A</span>\n      <div class=\"bdshare\">\n          <div class=\"bdsharebuttonbox bdshare-button-style0-16\" data-bd-bind=\"1608108468140\">\n              <a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a>\n              <a href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"\u5206\u4EAB\u5230QQ\u7A7A\u95F4\"></a>\n              <a href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"\u5206\u4EAB\u5230\u65B0\u6D6A\u5FAE\u535A\"></a>\n              <a href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"\u5206\u4EAB\u5230\u5FAE\u4FE1\"></a>\n          </div>       \n      </div>\n  </div>\n\n</div>\n<div class=\"pos-right\">\n  <p><span>\u5927\u5BB6\u90FD\u5728\u62A2</span></p>\n  <div class=\"pos-box\">\n      <div class=\"pos-goods-list top\" style=\"height: 3480px; top: -1305px;\">\n                         <a class=\"pos-goods\" title=\"\u3010\u9650\u91CF\uFF01\u5F97\u62A2\u3011\u4E0D\u9508\u94A2\u53A8\u623F\u7F6E\u7269\u67B6\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=594763226083\">\n             <img alt=\"\u3010\u9650\u91CF\uFF01\u5F97\u62A2\u3011\u4E0D\u9508\u94A2\u53A8\u623F\u7F6E\u7269\u67B6\" src=\"https://img.alicdn.com/imgextra/i2/2493256648/O1CN01kTokMJ1yypfCJSu5x_!!2493256648.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u7EF4\u8FBE\u4EE3\u5DE5\u5382\u3011\u53A8\u623F\u4E13\u7528\u5438\u6CB9\u7EB83\u5927\u5305\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=632521534858\">\n             <img alt=\"\u3010\u7EF4\u8FBE\u4EE3\u5DE5\u5382\u3011\u53A8\u623F\u4E13\u7528\u5438\u6CB9\u7EB83\u5927\u5305\" src=\"https://img.alicdn.com/imgextra/i1/2208437894964/O1CN010EQeFb1mXYiAezrPM_!!2208437894964.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA57.80</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u65B0\u5238\uFF0120\u8D34\u888B\u9F20\u81EA\u53D1\u70ED\u6696\u8D34\u6696\u5B9D\u5B9D\u4FDD\u6696\u5BAB\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=625671741315\">\n             <img alt=\"\u65B0\u5238\uFF0120\u8D34\u888B\u9F20\u81EA\u53D1\u70ED\u6696\u8D34\u6696\u5B9D\u5B9D\u4FDD\u6696\u5BAB\" src=\"https://img.alicdn.com/i3/2207705926212/O1CN010i3lNM1vl8zsS4tLf_!!2207705926212.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA58.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u4E50\u529B\u3011\u76CA\u751F\u83CC\u5C0F\u84DD\u6761\u4E00\u76D220\u6761\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=536892809132\">\n             <img alt=\"\u3010\u4E50\u529B\u3011\u76CA\u751F\u83CC\u5C0F\u84DD\u6761\u4E00\u76D220\u6761\" src=\"https://img.alicdn.com/imgextra/i2/2911666548/O1CN01b63Y3a1yF20HNl45X_!!2911666548.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA514.00</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u5357\u6781\u4EBA\u3011\u4FDD\u6696\u8001\u5BD2\u817F\u5173\u8282\u81EA\u53D1\u70ED\u62A4\u819D\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=544318924892\">\n             <img alt=\"\u3010\u5357\u6781\u4EBA\u3011\u4FDD\u6696\u8001\u5BD2\u817F\u5173\u8282\u81EA\u53D1\u70ED\u62A4\u819D\" src=\"https://img.alicdn.com/imgextra/i4/1698892796/O1CN014TdD581WWc2G3BZhN_!!1698892796.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.00</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u5927\u5E0C\u5730\u3011\u8106\u76AE\u706B\u5C71\u77F3\u70E4\u80A020\u6839\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=616729634595\">\n             <img alt=\"\u3010\u5927\u5E0C\u5730\u3011\u8106\u76AE\u706B\u5C71\u77F3\u70E4\u80A020\u6839\" src=\"https://img.alicdn.com/imgextra/i3/1918385168/O1CN01hX2iKC1o2zViczSII_!!1918385168.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA535.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u8BFA\u68B5\u3011\u5723\u8BDE\u8282\u677E\u9732\u5DE7\u514B\u529B100\u9897\u9001\u5723\u8BDE\u5E3D\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=607845964933\">\n             <img alt=\"\u3010\u8BFA\u68B5\u3011\u5723\u8BDE\u8282\u677E\u9732\u5DE7\u514B\u529B100\u9897\u9001\u5723\u8BDE\u5E3D\" src=\"https://img.alicdn.com/i4/848228203/O1CN016SUYEK2AT1Z7rpL0J_!!848228203.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA529.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u68C9\u62D6\u978B\u5973\u5BB6\u5C45\u51AC\u5B63\u60C5\u4FA3\u5BA4\u5185\u5305\u8DDF\u539A\u5E95\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=624874306464\">\n             <img alt=\"\u68C9\u62D6\u978B\u5973\u5BB6\u5C45\u51AC\u5B63\u60C5\u4FA3\u5BA4\u5185\u5305\u8DDF\u539A\u5E95\" src=\"//img.alicdn.com/imgextra/i2/2121402114/O1CN01VlYCVo1RUFvVIbNI4_!!2121402114-0-lubanu-s.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA57.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u4E24\u9762\u9488\u65D7\u8230\u5E97\u3011\u7EA2\u8C46\u858F\u7C73\u82A1\u5B9E\u8336150g\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=633744013074\">\n             <img alt=\"\u3010\u4E24\u9762\u9488\u65D7\u8230\u5E97\u3011\u7EA2\u8C46\u858F\u7C73\u82A1\u5B9E\u8336150g\" src=\"https://img.alicdn.com/imgextra/i1/2643760953/O1CN01r8AFBq1IuW5pgDIwT_!!2643760953-2-daren.png_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u7F57\u9A6C\u4ED5\u65D7\u8230\u5E97\u3011\u82F9\u679C\u5FEB\u5145\u6570\u636E\u7EBF1\u7C73\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=595840948778\">\n             <img alt=\"\u3010\u7F57\u9A6C\u4ED5\u65D7\u8230\u5E97\u3011\u82F9\u679C\u5FEB\u5145\u6570\u636E\u7EBF1\u7C73\" src=\"https://img.alicdn.com/imgextra/i1/1952819637/O1CN01dpY0dW2L3nWnuEg8E_!!1952819637.png_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA51.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u301020\u7247\u3011\u6DA6\u6696\u6696\u8D34 \u81EA\u53D1\u70ED\u6696\u5B9D\u5B9D\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=523057656808\">\n             <img alt=\"\u301020\u7247\u3011\u6DA6\u6696\u6696\u8D34 \u81EA\u53D1\u70ED\u6696\u5B9D\u5B9D\" src=\"https://img.alicdn.com/imgextra/i3/436776929/O1CN01v8V7P0213Wz3watUA_!!436776929.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA57.80</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u6469\u897F\u6B27\u3011\u5145\u7535\u5F0F\u6BDB\u7403\u4FEE\u526A\u5668\u53BB\u6BDB\u7403\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=628403155577\">\n             <img alt=\"\u3010\u6469\u897F\u6B27\u3011\u5145\u7535\u5F0F\u6BDB\u7403\u4FEE\u526A\u5668\u53BB\u6BDB\u7403\" src=\"//img.alicdn.com/imgextra/i4/2208705124900/O1CN01uvfRI61m4FLi3Bi1M_!!2208705124900.png_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u4E03\u5EA6\u7A7A\u95F4\u5B98\u65D7\u3011\u8D85\u719F\u7761\u5B89\u5FC3\u88E43\u5305*3\u7247\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=617830128093\">\n             <img alt=\"\u3010\u4E03\u5EA6\u7A7A\u95F4\u5B98\u65D7\u3011\u8D85\u719F\u7761\u5B89\u5FC3\u88E43\u5305*3\u7247\" src=\"https://img.alicdn.com/imgextra/i4/3961118975/O1CN01fsydi62GAbKItLBae_!!2-item_pic.png_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA519.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u5357\u6781\u4EBA\u3011\u85B0\u8863\u8349\u7559\u9999\u6D17\u8863\u6DB2\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=596021579374\">\n             <img alt=\"\u3010\u5357\u6781\u4EBA\u3011\u85B0\u8863\u8349\u7559\u9999\u6D17\u8863\u6DB2\" src=\"https://img.alicdn.com/imgextra/i2/899107167/O1CN01YC9XSN22oXD0MFgan_!!899107167.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u5927\u724C\u4EC1\u548C\u3011\u7115\u989C\u7F8E\u767D\u795B\u6591\u971C\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=625893087763\">\n             <img alt=\"\u3010\u5927\u724C\u4EC1\u548C\u3011\u7115\u989C\u7F8E\u767D\u795B\u6591\u971C\" src=\"https://img.alicdn.com/imgextra/i3/2130096995/O1CN01b1Pw2m21Xl6K5bLnQ_!!2130096995.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u6668\u5149\u3011\u56DE\u5F62\u9488\u4E00\u76D2+6\u652F\u4E2D\u6027\u7B14\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=614382262420\">\n             <img alt=\"\u3010\u6668\u5149\u3011\u56DE\u5F62\u9488\u4E00\u76D2+6\u652F\u4E2D\u6027\u7B14\" src=\"https://img.alicdn.com/imgextra/i4/3697149989/O1CN01tUVi3c2Nf0r9WZEs2_!!3697149989.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA51.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u301030\u53EA\u3011\u53EF\u5B5A\u4E00\u6B21\u6027\u533B\u7528\u5916\u79D1\u9632\u5C18\u900F\u6C14\u53E3\u7F69\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=616974150512\">\n             <img alt=\"\u301030\u53EA\u3011\u53EF\u5B5A\u4E00\u6B21\u6027\u533B\u7528\u5916\u79D1\u9632\u5C18\u900F\u6C14\u53E3\u7F69\" src=\"https://img.alicdn.com/bao/uploaded/O1CN01ToM0jB1fXpcvQxhDt_!!6000000004017-2-yinhe.png_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA55.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u30104\u4E2A\u88C5\u3011\u7F51\u7EA2\u957F\u67C4\u4E0D\u9508\u94A2\u6C64\u5319\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=630138233753\">\n             <img alt=\"\u30104\u4E2A\u88C5\u3011\u7F51\u7EA2\u957F\u67C4\u4E0D\u9508\u94A2\u6C64\u5319\" src=\"https://img.alicdn.com/imgextra/i1/52319595/O1CN01OzpoZ52KkYtWIXsHj_!!52319595.png_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u87BA\u5E08\u7687\u6B63\u5B97\u67F3\u5DDE\u87BA\u86F3\u7C89345g*2\u5927\u888B\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=627043213329\">\n             <img alt=\"\u87BA\u5E08\u7687\u6B63\u5B97\u67F3\u5DDE\u87BA\u86F3\u7C89345g*2\u5927\u888B\" src=\"//img.alicdn.com/imgextra/i4/2208543568140/O1CN01AIt4aD2A0Ab6o71sb_!!2208543568140.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u4EA8\u535A\u58EB\u3011\u9E21\u5185\u91D1\u5C71\u6942\u5480\u56BC\u7247100\u7C92\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=624577308735\">\n             <img alt=\"\u3010\u4EA8\u535A\u58EB\u3011\u9E21\u5185\u91D1\u5C71\u6942\u5480\u56BC\u7247100\u7C92\" src=\"https://img.alicdn.com/i1/2775741203/O1CN01sqXajx1Kl166WVRIZ_!!2775741203.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u4E09\u5C71\u534A\uFF01\u6B63\u5B97\u6E56\u5357\u9EBB\u9633\u5B55\u5987\u7EA7\u51B0\u7CD6\u6A59\u5B505\u65A4\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=632033108262\">\n             <img alt=\"\u4E09\u5C71\u534A\uFF01\u6B63\u5B97\u6E56\u5357\u9EBB\u9633\u5B55\u5987\u7EA7\u51B0\u7CD6\u6A59\u5B505\u65A4\" src=\"https://img.alicdn.com/imgextra/i3/2989265740/O1CN01E1dD3R1sGy3pRIAA4_!!2989265740.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA56.80</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u4EC1\u548C\u836F\u4E1A\u3011\u4FBF\u643A\u5F0F\u53E3\u6C14\u6E05\u65B0\u524215mL\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=627483020952\">\n             <img alt=\"\u3010\u4EC1\u548C\u836F\u4E1A\u3011\u4FBF\u643A\u5F0F\u53E3\u6C14\u6E05\u65B0\u524215mL\" src=\"https://img.alicdn.com/bao/uploaded/O1CN01xVGpgb1qYi9hhFbh6_!!2-item_pic.png_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA55.90</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u3010\u5B87\u98CE\u3011\u5FB7\u56FD\u5200\u5177\u53A8\u623F\u5957\u88C5\u83DC\u52005\u4EF6\u5957\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=614524695007\">\n             <img alt=\"\u3010\u5B87\u98CE\u3011\u5FB7\u56FD\u5200\u5177\u53A8\u623F\u5957\u88C5\u83DC\u52005\u4EF6\u5957\" src=\"https://img.alicdn.com/imgextra/i2/2205573506631/O1CN01APUp7y1yr2vIze6B1_!!0-item_pic.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA539.00</span>\n        </a>\n                           <a class=\"pos-goods\" title=\"\u30109.9\u79D2\u6740\u3011\u5F62\u8C61\u7F8E\u6DF1\u6D77\u85FB\u773C\u819C6\" target=\"_blank\" href=\"/?tab=qproduct&amp;iid=586537874083\">\n             <img alt=\"\u30109.9\u79D2\u6740\u3011\u5F62\u8C61\u7F8E\u6DF1\u6D77\u85FB\u773C\u819C6\" src=\"https://img.alicdn.com/imgextra/i3/2921409858/O1CN01MPtiTA2Mh0zo2miRF_!!2921409858.jpg_130x130.jpg\">\n             <span>\u5238\u540E\uFF1A\xA59.90</span>\n        </a>\n                     \n      </div>\n  </div>\n  <div class=\"pos-act\">\n      <a class=\"bot-btn\" href=\"javascript:;\"></a>\n      <a class=\"top-btn\" href=\"javascript:;\"></a>\n  </div>\n</div>");
} // 这里用到了事件委托


detail_row.onclick = function () {
  var e = window.event; // 当我们点击领劵购买的时候    这个时候我们要添加到购物车  
  // 正常情况我们是要跳转到购物车页面  但是这里我们先判断是否
  // 登录了,如果已经登录了我们直接跳转到购物车页面 如果没有登录
  // 那么我们就跳转到登录页面

  if (e.target.id = 'addCar') {
    var login = getCookie("login");

    if (!login) {
      // 没有登录的话我们就跳转到登录页面进行登录
      location.href = '../html/login.html'; // 将当前页面存储在本地存储上面

      localStorage.setItem('url', 'http://gz2008.com/project/html/detail.html?id=' + id);
      return;
    } // 如果登录了当我点击添加到购物车的时候我们就得向数据库中查询这个商品
    // 根据id查询  传递两个参数  哪个用户  添加了哪个商品


    pAjax({
      url: '../api/addCarData.php',
      data: {
        username: login,
        goods_id: id
      }
    }).then(function (res) {
      // alert("添加成功!");
      window.location.href = "../html/car.html";
    });
  }
}; // let addCar = document.querySelector("#addCar");
// console.log(addCar);

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

/* 精品推荐商品列表  start */

var ul = document.querySelector("#goods-list #uls"); // console.log(ul);

pAjax({
  url: '../api/getDetailData.php'
}).then(function (res) {
  // console.log(JSON.parse(res));
  // console.log(JSON.parse(res).list);
  var str = "";
  JSON.parse(res).list.forEach(function (item) {
    str += "<li>\n    <a href=\"../html/detail.html?id=".concat(item.goods_id, "\" class=\"img\" rel=\"nofollow\" target=\"_blank\">\n        <img src=\"").concat(item.goods_big_logo, "\" alt=\"\">\n    </a>\n    <div class=\"padding\">\n        <div class=\"coupon-wrap clearFix\">\n            <span class=\"price\"><b><i>\uFFE5</i>").concat(item.volume_price, "</b>\u5238\u540E\u4EF7</span>\n            <span class=\"old-price\"><i>\uFFE5</i>").concat(item.goods_price, "</span>\n            <span class=\"coupon\"><em class=\"quan-left\"></em>\u5238<b><i>\uFFE5</i>").concat(item.stock_amount, "</b><em class=\"quan-right\"></em></span>\n        </div>\n        <div class=\"title\">\n            <a target=\"_blank\" href=\"../html/detail.html?id=").concat(item.goods_id, "\">").concat(item.goods_name, "</a>\n        </div>\n\n        <div class=\"goods-num-type\">\n            <span class=\"goods-num\">\u9500\u91CF<b>").concat(item.volume_price, "</b></span>\n            <div class=\"goods-type\">\n              <i class=\"taobao\" title=\"\u6DD8\u5B9D\"></i> \n            </div>\n        </div>\n    </div>\n</li>");
  });
  ul.innerHTML = str;
});
/* 精品推荐商品列表  end */