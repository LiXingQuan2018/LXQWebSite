var timeout;
function returnArray(){
    let bannerImg=new Array();
    bannerImg[0]="image/2019banner.jpg";
    bannerImg[1]="image/2018boyaa.jpg";
    bannerImg[2]="image/2018banner.jpg";
    bannerImg[3]="image/boyaaddz.jpg";
    return bannerImg;
}
function lisID(){
    let liids=new Array();
    liids[0]=document.getElementById("on1");
    liids[1]=document.getElementById("on2");
    liids[2]=document.getElementById("on3");
    liids[3]=document.getElementById("on4");
    return liids;
}
window.onload=function () {
   
   changeBanBackground();

   document.getElementById("top").addEventListener("click",function(){
       window.scroll(0,0)
    });

}
function changeBanBackground(a=0) {
    let bannerImg=returnArray();
    let bannerDiv=document.getElementById("banner-img");
    let currentArrayIndex=a;
    bannerDiv.style.backgroundImage=`url(${bannerImg[currentArrayIndex]})`;
    currentArrayIndex++;
    timeout=setInterval(function () {
        if(currentArrayIndex==bannerImg.length)currentArrayIndex=0;
        bannerDiv.style.backgroundImage=`url(${bannerImg[currentArrayIndex]})`;
        setOpactive(currentArrayIndex);
        currentArrayIndex++;
    },2000);
}
function clickChange(a){
    let bannerImg=returnArray();
    let bannerDiv=document.getElementById("banner-img");
    
    clearTimeout(timeout)
    switch(a){
        case 1:
            bannerDiv.style.backgroundImage=`url(${bannerImg[0]})`;
            setOpactive(0);
            break;
        case 2:
            bannerDiv.style.backgroundImage=`url(${bannerImg[1]})`;
            setOpactive(1);
            break;
        case 3:
            bannerDiv.style.backgroundImage=`url(${bannerImg[2]})`;
            setOpactive(2);
            break;
        case 4:
            bannerDiv.style.backgroundImage=`url(${bannerImg[3]})`;
            setOpactive(3);
            break;
    }
    changeBanBackground(a-1);
}
function setOpactive(a){
    let li=lisID();
    for(let i=0;i<4;i++){
        if(i===a){
            li[i].style.opacity=1;
        }else{
            li[i].style.opacity=0.5;
        }
    }
}