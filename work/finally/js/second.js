{
    window.onload=function(){
        alert("提示：单击手机屏幕暂停，滚动鼠标切换视频");
        pause();
    }
    let videoName=true;
    let isPlaying=false;
    function swap() {
        let video=document.getElementById("video");
        if (videoName){
            video.src="image/下载2.mp4";
            video.play();
            videoName=false;
        }else{
            video.src="image/下载.mp4";
            video.play();
            videoName=true;
        }
        console.log(video.src);
    }
    function pause() {
        let video=document.getElementById("video");
        if (isPlaying){
            video.pause()
            isPlaying=false;
        }else{
            video.play()
            isPlaying=true;
        }
    }
}