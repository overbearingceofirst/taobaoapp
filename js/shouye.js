var list2=document.getElementsByClassName("list2")[0];
//   数据渲染
$.ajax({
    url: "https://www.jackjones.com.cn/api/goods/dmpRecommendGoods?projectName=firstPageHot&brand=two&userId=&itemId=&brandCode=JACKJONES",
    type: "GET",
    // date:{},
    dataType: "json",
    success: function (res) {
        console.log(res)
        var data=res.data;
        console.log(data)
        var kuan=document.getElementsByClassName("kuan")[0];
        var heng=document.getElementsByClassName("heng")[0];
        var str="";
        var kk=[33,56,48,78,88,32,62,54,58,110]
        for(var i=0;i<10;i++){
            str+=' <li>'
            +'<a href="xiangxi.html?design='+data[i].colorCode+'">'
                +'<div class="pic">'
                    +'<img src="https://cdn.bestseller.com.cn'+data[i].picurls[0]+'" alt="">'
                +'</div>'
                +'<div class="wenzi">'+data[i].goodsName+'</div>'
                +'<p class="pirce">￥'+data[i].originalPrice+'</p>'
                +'<p class="all"><span>月销'+kk[i]+'笔</span><span>免邮费</span></p>'
            +'</a>'
        +'</li>'
        }
        kuan.innerHTML=str;
        var flag=true;
        var str2="";
        list2.onclick=function(){
            if(flag){
                kuan.style.display="none";
                heng.style.display="block";
                // 更换内容
                for(var i=0;i<10;i++){
                    str2+='<li>'
                    +'<a href="xiangxi.html?design='+data[i].colorCode+'" class="pad">'
                            +'<div class="pic2">'
                                +'<img src="https://cdn.bestseller.com.cn'+data[i].picurls[0]+'" alt="">'
                        +' </div>'
                            +'<div class="all2">'
                            +' <p class="wenzi2">'+data[i].goodsName+'</p>'
                                +'<p class="pirce2">￥'+data[i].originalPrice+'</p>'
                                +'<p class="all3"><span class="one1">月销'+kk[i]+'笔</span><span>免邮费</span></p>'
                            +'</div>'
                        +'</a>'
                    +'</div>'
                    
                +'</a>'
                }
                heng.innerHTML=str2;
                flag=false;
            }else{
                kuan.style.display="block";
                heng.style.display="none";
                flag=true;
            }
            
        }
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
