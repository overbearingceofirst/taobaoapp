var kk=location.search.substring(location.search.indexOf("=")+1,location.search.length-3);
console.log(kk)

$.ajax({
    url:'https://cdn.bestseller.com.cn/detail/JACKJONES/'+kk+'.json',
    type: "GET",
    // date:{},
    dataType: "json",
    success: function (res) {
        var data=res.data;
        console.log(data)
        
        var div=document.getElementsByClassName("div")[0];
        console.log(div)
        var str='<p class="pirce">'
                    +'<span>￥'+data.color[0].originalPrice+'-2000</span><span>惊喜价</span>'
                +'</p>'
                +'<p class="oldpirce">'
                   + '<s>价格￥'+data.color[0].originalPrice+'-2000</s>'
                +'</p>'
                +'<p class="youhui">'
                    +'<span>该商品最高可享受3期免息优惠</span>'
                +'</p>'
               + '<p class="tip">'
                   + '<span>'+data.goodsName+'</i></span>'
                +'</p>'
               + '<p class="all">'
                 +   '<span>快递：0.00</span>'
                  +  '<span>月销15</span>'
                  +  '<span>江苏苏州</span>'
                +'</p>'
            div.innerHTML=str;
            var str2="";
            var swiper_wrapper=document.getElementsByClassName("swiper-wrapper")[0];
            for(var i=0;i<4;i++){
                str2+='<div class="swiper-slide">'
                +'<img src="https://cdn.bestseller.com.cn'+data.color[0].picurls[i]+'" alt="">'
                +'</div>'
            }
            swiper_wrapper.innerHTML=str2;

    }
})



function rem (doc, win) {  
    let docEl = doc.documentElement; //html 考虑以及兼容了 屏幕旋转的事件
    //判断事件orientationchange 横屏 事件  或resize 
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';  
    
            let recalc = function () {         
                var clientWidth = docEl.clientWidth;   //获取屏幕大小
                if (!clientWidth){ return };   //未获取屏幕尺寸        
                //屏幕大于750
                if (clientWidth >= 750) {
                   docEl.style.fontSize = '100px';
              } else {
//			            	html的font-size         100* 设备宽度 / 750
                   docEl.style.fontSize = 100*(clientWidth / 403)+ 'px';
              }
        };   
        if (!doc.addEventListener) {return ;}//addEventListener 兼容判断

      win.addEventListener(resizeEvt, recalc, false);               // 屏幕大小以及旋转变化自适应
      doc.addEventListener('DOMContentLoaded', recalc, false);     // 页面初次打开自适应
      recalc();
  }
  
      rem(document,window);
