
window.onload=function(){
  let audio=document.getElementById("audio_9420");
  audio.play();
  changeContent("柳州");
  setTime();
}
function setTime() {
  /*var yearText=document.getElementById("year_li");
  var mouthText=document.getElementById("mouth_li");*/
  var dayText=document.getElementById("day_li");
  var hourText=document.getElementById("hour_li");
  var minuteText=document.getElementById("minute_li");
  var secondsText=document.getElementById("seconds_li");
  var date=new Date();
  dayText.innerText=date.getDate()+"";
  hourText.innerText=date.getHours()>9?date.getHours()+"":"0"+date.getHours();
  minuteText.innerText=date.getMinutes()>9?date.getMinutes()+"":"0"+date.getMinutes();
  secondsText.innerText=date.getSeconds()>9?date.getSeconds()+"":"0"+date.getSeconds();
  setTimeout(function () {
    setTime()
  },1000);
}
function changeContent(str){
  let img=document.getElementById("content_img");
  let title=document.getElementById("content_h1");
  let content=document.getElementById("content_p");
  let liuzhou="柳州，简称“柳”，别称壶城、龙城，广西第一大工业城市，国家Ⅱ型大城市，中国五大汽车城之一，西南地区工业重镇、" +
      "        综合交通枢纽、商贸物流中心，是全国唯一拥有一汽、东风、上汽和重汽等四大汽车集团整车生产企业的城市，\n" +
      "        中国内陆通向东盟的重要通道，与东盟双向往来产品加工贸易基地和物流中转基地城市，西南出海大通道集散枢纽城市，" +
      "        “一带一路”有机衔接门户的重要节点和西部大开发战略中西江经济带的龙头城市和核心城市。\n" +
      "        柳州是广西最大的工业基地；同时素有“桂中商埠”之称，是沟通西南与中南、华东、华南地区的铁路中枢及区域性综合交通枢纽，" +
      "        已形成集水陆空于一体的现代化交通网络。\n" +
      "        以柳州为圆心的250公里半径范围内，集中了广西80%以上的4A级旅游风景区，与毗邻的桂林市共同构成享誉世界的大桂林旅游风景区。" +
      "        柳州拥有2100多年建置史，是国家历史文化名城。“柳州奇石甲天下”，被誉为“中华石都”。";

  let lzzy="柳州职业技术学院坐落在祖国西南工业重镇广西柳州市，是1998年全国首批国家批准成立的全日制综合性高等职业院校，" +
      "        是全国100所、广西仅有的2所国家示范性高职院校之一。学校由柳州市人民政府举办，实行区市共管。\n" +
      "        学校占地面积75.3万平米，固定资产总值约8.2亿元，图书75万册。拥有国家级示范实训基地10个，" +
      "        自治区示范特色专业及实训基地5个，自治区示范性高等职业教育实训基地14个，自治区示范性高等职业教育建设实训基地2个，" +
      "        柳州市级千万元实训基地2个，校内外实训基地总共142个，职业技能鉴定机构9个，是全区实训条件最为先进、功能最为齐全的高职院校。" +
      "        学校现有全日制高职生近1.2万人，教职工近800人，其中专任教师600多人，双师素质专任教师441人，具有研究生学历或硕士学位教师314人，" +
      "        高级职称专任教师238人，国家级教学名师1人，自治区级教学名师6人，是广西拥有国家级、自治区级教学团队和教学名师人数最多的高职院校。";
  switch (str) {
    case "柳州":
      img.src="image/liuzhoujpg.jpg";
      title.innerText="柳州";
      content.innerText=liuzhou;
      break;
    case "学校":
      img.src="image/lzzy.jpg";
      title.innerText="学校简介";
      content.innerText=lzzy;
      break;
    case "宿舍":alert("未完成");
      break;
    case "关于":alert("未完成");
      break;
  }
}
function mouseOver() {
  let div=document.getElementById("div-content");
  let p=document.getElementById("div-content");
  div.style.opacity=1+"";
  p.style.color="#2b2b2b";
}
function mouseOut() {
  let div=document.getElementById("div-content");
  div.style.opacity=0.5+"";
  let p=document.getElementById("div-content");
  p.style.color="#68228B";
}