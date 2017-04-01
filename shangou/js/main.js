$(function(){
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".small_nav").css({"width":clientW})
    $(".menu_bottom").css({"width":clientW,"height":clientH});
    var flag=true;
    //导航
    var flag2=true;
    $(".menu").click(function(){
        $(".menu_bottom").css({display:"block"});
        if(flag2){
            //菜单变化
            $(".menu-option-uline").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(".menu-option-bline").css({
                transform:"translate(0,-4px) rotate(-45deg)"
            })
            //导航变化
            $(".menu_bottom li  a").each(function(i,obj){
                $(obj).css({
                    opacity:0,
                    animation:"menu .5s linear forwards "+i*0.2+"s"
                })
            })
            flag2=false;
        }else{
            //菜单变化
            $(".menu-option-uline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            $(".menu-option-bline").css({
                transform:"translate(0,0px) rotate(0deg)"
            })
            //导航变化
            $(".menu_bottom li  a").each(function(i,obj){
                $(obj).css({
                    opacity:1,
                    animation:"menu1 .5s linear forwards "+(1.4-i*0.2)+"s"
                })
            })
            flag2=true;
            setTimeout(function(){
                $(".menu_bottom").css({display:"none"});
            },6000)
        }
    })
    //监测浏览器宽度
    var oL=$(".nav_nav_active").offset();
    var oW=$(".nav_nav").offset();
    oY=(oL.left-oW.left)+"px";
    $(".flexbox").css({left:oY});
    var nava=document.getElementsByClassName("nav_nav_a");
    for(var i=0;i<nava.length;i++){
        nava[i].onmousemove=function(){
            $(".flexbox").stop().animate({left:this.offsetLeft},200);
        };
    }
    $(".nav_nav").mouseleave(function(){
        $(".flexbox").animate({left:oY});
    })
    $(window).resize(function(){
        var ch=$(window).height();
        var cw=$(window).width();
        var oL=$(".nav_nav_active").offset();
        var oW=$(".nav_nav").offset();
        oY=(oL.left-oW.left)+"px";
        $(".flexbox").css({left:oY});
        $(".small_nav").css({"width":clientW})
        if(cw>750){
            $(".menu_bottom li a").css({
                animation:"none",
                opacity:0
            })
            $(".menu-option-uline,.menu-option-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
        }
    })
    var imgbox=$(".imgbox")[0]
    var imgs=$(".img_box",imgbox);
    var conx=$("div",$(".btn")[0]);
    var lefts=$(".leftbn")[0]
    var rights=$(".rightbn")[0]
    var alls=$(".banner")[0]
    for(i=1;i<imgs.length;i++){
        imgs[i].style.left="100%"
    }
    var now=0
    var next=0
    function move(type){
        type=type||"rights"
        if(type=="rights") {
            next++;
            if(next>=imgs.length){
                next=0
            }
            $(imgs).eq(next).css({left:"100%"});
            $(imgs).eq(now).css({left:"0"});
            $(imgs).eq(now).animate({left:"-100%"});
        } else if(type=="lefts"){
            next--;
            if(next<0){
                next=imgs.length-1
            }
            $(imgs).eq(next).css({left:"-100%"});
            $(imgs).eq(now).animate({left:"100%"});


        }
        $(imgs).eq(now).css({left:"0"});
        $(imgs).eq(next).animate({left:"0"});
        conx[now].className="";
        conx[next].className="active";
        now=next;
    }
    var t1=setInterval(move,2000)
    for(var i=0;i<imgs.length;i++){
        conx[i].aa=i
        conx[i].onclick=function(){
            if(this.aa==now){
                return;
            }
            else{
                next=this.aa
                imgs[next].style.left="100%";
                imgs[now].style.left="0px";
                $(imgs).eq(now).animate({left:"-100%"});
                $(imgs).eq(next).animate({left:"0"});
                conx[now].className="";
                conx[next].className="active";
                now=next;
            }
        }
    }
              $(alls).mouseover(function(){
                clearInterval(t1);
                $(rights).show();
                $(lefts).show();
            })
            $(alls).mouseout(function(){
                t1=setInterval(move,2000)
                $(rights).hide();
                $(lefts).hide();
            })
    $(lefts).click(function(){
                move("lefts")
            })
            $(rights).click(function(){
                move();
            })
    $(".voice").mouseenter(function(){
            $(".voice_hover").css({animation:"voice 1s linear forwards"});

    })
    $(".voice").mouseleave(function(){
            $(".voice_hover").css({animation:"voiceout 1s linear forwards"});

    })
    $(".video").mouseenter(function(){
        $(".video_hover").css({animation:"voice 1s linear forwards"});

    })
    $(".video").mouseleave(function(){
        $(".video_hover").css({animation:"voiceout 1s linear forwards"});

    })
    $(".gorup").mouseenter(function(){
        $(".group_hover").css({animation:"voice 1s linear forwards"});

    })
    $(".gorup").mouseleave(function(){
        $(".group_hover").css({animation:"voiceout 1s linear forwards"});

    })
    var win = window,
    doc = document;
    function setFontSize() {
    　　var winWidth = $(window).width();
     
    　　//750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
    　　var size = (winWidth / 750) * 100;
    　　doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
    };
    //这里我们给个定时器来实现页面加载完毕再进行字体设置
    setTimeout(function() {
    　　//初始化
    　　setFontSize();
    }, 100);


     var browser = {
        versions: function () {
           var u = navigator.userAgent, app = navigator.appVersion;
            return {     //移动终端浏览器版本信息
              trident: u.indexOf('Trident') > -1, //IE内核
              presto: u.indexOf('Presto') > -1, //opera内核
              webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
              gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
              mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
              ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
              android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
              iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
              iPad: u.indexOf('iPad') > -1, //是否iPad
              webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
         language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }            
    if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
        $(".ios").click(function(){
            $(".ios-code").toggle()
        })
         $(".android").click(function(){
            $(".and-code").toggle()
        });
        $(".sellers").css({width:"100%",overflow:"hidden"})
        $(".website").css({width:"100%",overflow:"hidden"})
        $(".webBox ul").css({height:"176px"});
        $(".sellerBox ul").css({height:"176px"});
        $(".webBox").css({marginBottom:"30px"});
        $(".sellerBox").css({marginBottom:"30px"});
        $(".webBox .prev").css({width:"30px",height:"30px",left:"0px"});
        $(".webBox .prev img").css({width:"100%",height:"auto"});
        $(".webBox .next").css({width:"30px",height:"30px",right:"0px"});
        $(".webBox .next img").css({width:"100%",height:"auto"});
        $(".sellerBox .prev").css({width:"30px",height:"30px",left:"10px"});
        $(".sellerBox .prev img").css({width:"100%",height:"auto"});
        $(".sellerBox .next").css({width:"30px",height:"30px",right:"15px"});
        $(".sellerBox .next img").css({width:"100%",height:"auto"})
    } else {
       //否则就是PC浏览器打开
        $(".android").mouseenter(function(){
            $(".and-code").css({display:"block"})
        })
        $(".android").mouseleave(function(){
            $(".and-code").css({display:"none"})
        })
       
        $(".ios").mouseenter(function(){
            $(".ios-code").css({display:"block"})
        })
        $(".ios").mouseleave(function(){
            $(".ios-code").css({display:"none"})
        })
        $(".webBox ul").css({height:"900px"});
        $(".sellerBox ul").css({height:"900px"});
        $(".webBox").css({marginBottom:"100px"});
        $(".sellerBox").css({marginBottom:"100px"});
        $(".webBox .prev").css({width:"90px",height:"90px",left:"-190px"});
        $(".webBox .prev img").css({width:"100%",height:"auto"});
        $(".webBox .next").css({width:"90px",height:"90px",right:"-300px"});
        $(".webBox .next img").css({width:"100%",height:"auto"})
        $(".sellerBox .prev").css({width:"90px",height:"90px",left:"-190px"});
        $(".sellerBox .prev img").css({width:"100%",height:"auto"});
        $(".sellerBox .next").css({width:"90px",height:"90px",right:"-300px"});
        $(".sellerBox.next img").css({width:"100%",height:"auto"})
    }
})