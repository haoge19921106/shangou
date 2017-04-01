// JavaScript Document

/* 客户端商家端点击切换滚动动画 */
function ZoomPic()
{this.initialize.apply(this,arguments)}
ZoomPic.prototype={initialize:function(id)
{var _this=this;this.wrap=typeof id==="string"?document.getElementById(id):id;this.oUl=this.wrap.getElementsByTagName("ul")[0];this.aLi=this.wrap.getElementsByTagName("li");this.prev=this.wrap.getElementsByTagName("div")[0];this.next=this.wrap.getElementsByTagName("div")[1];this.timer=null;this.aSort=[];this.iCenter=3;this._doPrev=function(){return _this.doPrev.apply(_this)};this._doNext=function(){return _this.doNext.apply(_this)};
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
    if (browser.versions.mobile) {
        //判断是否是移动设备打开。browser代码在下面
        this.options=[{width:68,height:122,top:38,left:55,zIndex:1},
                      {width:68,height:122,top:38,left:55,zIndex:2},
                      {width:83,height:149,top:29,left:86,zIndex:3},
                      {width:96,height:171,top:20,left:123,zIndex:4},
                      {width:83,height:149,top:29,left:174,zIndex:3},
                      {width:68,height:122,top:38,left:218,zIndex:2},
                      {width:68,height:122,top:38,left:143,zIndex:1},];;
    } else {
        //否则就是PC浏览器打开
        this.options=[{width:350,height:623,top:196,left:0,zIndex:1},{width:350,height:623,top:196,left:0,zIndex:2},{width:427,height:760,top:148,left:160,zIndex:3},{width:491,height:873,top:100,left:348,zIndex:4},{width:427,height:760,top:148,left:608,zIndex:3},{width:350,height:623,top:196,left:834,zIndex:2},{width:350,height:623,top:196,left:450,zIndex:1},];
    }
for(var i=0;i<this.aLi.length;i++)this.aSort[i]=this.aLi[i];this.aSort.unshift(this.aSort.pop());this.setUp();this.addEvent(this.prev,"click",this._doPrev);this.addEvent(this.next,"click",this._doNext);this.doImgClick();this.timer=setInterval(function()
{_this.doNext()},3000);this.wrap.onmouseover=function()
{clearInterval(_this.timer)};this.wrap.onmouseout=function()
{_this.timer=setInterval(function()
{_this.doNext()},3000);}},doPrev:function()
{this.aSort.unshift(this.aSort.pop());this.setUp()},doNext:function()
{this.aSort.push(this.aSort.shift());this.setUp()},doImgClick:function()
{var _this=this;for(var i=0;i<this.aSort.length;i++)
{this.aSort[i].onclick=function()
{if(this.index>_this.iCenter)
{for(var i=0;i<this.index-_this.iCenter;i++)_this.aSort.push(_this.aSort.shift());_this.setUp()}
else if(this.index<_this.iCenter)
{for(var i=0;i<_this.iCenter-this.index;i++)_this.aSort.unshift(_this.aSort.pop());_this.setUp()}}}},setUp:function()
{var _this=this;var i=0;for(i=0;i<this.aSort.length;i++)this.oUl.appendChild(this.aSort[i]);for(i=0;i<this.aSort.length;i++)
{this.aSort[i].index=i;if(i<7)
{this.css(this.aSort[i],"display","block");this.doMove(this.aSort[i],this.options[i],function()
{_this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0],{opacity:100},function()
{_this.doMove(_this.aSort[_this.iCenter].getElementsByTagName("img")[0],{opacity:100},function()
{_this.aSort[_this.iCenter].onmouseover=function()
{_this.doMove(this.getElementsByTagName("div")[0],{bottom:0})};_this.aSort[_this.iCenter].onmouseout=function()
{_this.doMove(this.getElementsByTagName("div")[0],{bottom:-100});}})})});}
else
{this.css(this.aSort[i],"display","none");this.css(this.aSort[i],"width",0);this.css(this.aSort[i],"height",0);this.css(this.aSort[i],"top",152);this.css(this.aSort[i],"left",this.oUl.offsetWidth/2)}
    if(i<this.iCenter||i>this.iCenter)
    {this.css(this.aSort[i].getElementsByTagName("img")[0],"opacity",30)
        this.aSort[i].onmouseover=function()
        {_this.doMove(this.getElementsByTagName("img")[0],{opacity:100})};this.aSort[i].onmouseout=function()
    {_this.doMove(this.getElementsByTagName("img")[0],{opacity:35})};this.aSort[i].onmouseout();}
    else
    {this.aSort[i].onmouseover=this.aSort[i].onmouseout=null}}},addEvent:function(oElement,sEventType,fnHandler)
{return oElement.addEventListener?oElement.addEventListener(sEventType,fnHandler,false):oElement.attachEvent("on"+sEventType,fnHandler)},css:function(oElement,attr,value)
{if(arguments.length==2)
{return oElement.currentStyle?oElement.currentStyle[attr]:getComputedStyle(oElement,null)[attr]}
else if(arguments.length==3)
{switch(attr)
{case"width":case"height":case"top":case"left":case"bottom":oElement.style[attr]=value+"px";break;default:oElement.style[attr]=value;break}}},doMove:function(oElement,oAttr,fnCallBack)
{var _this=this;clearInterval(oElement.timer);oElement.timer=setInterval(function()
{var bStop=true;for(var property in oAttr)
{var iCur=parseFloat(_this.css(oElement,property));property=="opacity"&&(iCur=parseInt(iCur.toFixed(2)*100));var iSpeed=(oAttr[property]-iCur)/5;iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);if(iCur!=oAttr[property])
{bStop=false;_this.css(oElement,property,iCur+iSpeed)}}
    if(bStop)
    {clearInterval(oElement.timer);fnCallBack&&fnCallBack.apply(_this,arguments)}},30)}};
/*客户端商家端动画调用*/
