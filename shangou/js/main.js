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
    $(window).resize(function(){
        var ch=$(window).height();
        var cw=$(window).width();
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
    // function lunbo(father,fathers,time){
    //     $(father+">.imgbox>div").hide().eq(0).show();
    //     function move(type){
    //         type=type||"right";
    //         var num=$(fathers+">.active").index()
    //         if(type=="right"){
    //             num++;
    //             if(num>=$(father+">.imgbox>div").length){
    //                 num=0;
    //             }
    //         }else if(type=="left"){
    //             num--;
    //             if(num<0){
    //                 num=$(father+">.imgbox>div").length-1;
    //             }
    //         }
    //         $(father+">.imgbox>div").fadeOut(600).eq(num).fadeIn(800)
    //         $(father+">.btn>div").removeClass().eq(num).addClass("active")
    //     }
    //     var t=setInterval(move,time);
    //     $(father).mouseover(function(){
    //         clearInterval(t);
    //         $(father+">.rightbn").show();
    //         $(father+">.leftbn").show();
    //     })
    //     $(father).mouseout(function(){
    //         t=setInterval(move,time)
    //         $(father+">.rightbn").hide();
    //         $(father+">.leftbn").hide();
    //     })
    //     $(father+">.leftbn").click(function(){
    //         move("left")
    //     })
    //     $(father+">.rightbn").click(function(){
    //         move();
    //     })
    // }
    // lunbo(".banner","#btn1",2000)
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
    $(".and-box").mouseenter(function(){
        $(".and-code").css({display:"block"})
    })
    $(".and-box").mouseleave(function(){
        $(".and-code").css({display:"none"})
    })
    $(".ios-box").mouseenter(function(){
        $(".ios-code").css({display:"block"})
    })
    $(".ios-box").mouseleave(function(){
        $(".ios-code").css({display:"none"})
    })
})