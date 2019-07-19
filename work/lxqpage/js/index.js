window.onload=function(){
  var winWidth=window.innerWidth;
  var winHeight=window.innerHeight;
  if (winWidth<=800||winHeight<=800) {
    alert("为了能得到更好的体验，请将浏览器的窗口大小设置为800x800以上"+
          "\n当前："+winWidth+"x"+winHeight);
          return;
  }
  document.getElementById("anim_bg").style.height=winHeight+"px";
  document.getElementById("hello").style.lineHeight=winHeight+"px";
  changetHello();
}
function changetHello(){
  var hello=["嗨，你好啊","欢迎访问","我的主页","这将会给你","焕然一新","的感觉","准备好了吗"];
  var i=0;
  var p=document.getElementById("hello");
  var code=setInterval(function(){
    if(i!=hello.length-1){
      p.innerHTML=hello[i];
      i++;
    }else{
      p.innerHTML=hello[i];
      setTimeout(function(){
        window.location.replace("lxq.html");
      },1000);
      return;
    }
    console.log(hello[i]);
  },2000);
}
