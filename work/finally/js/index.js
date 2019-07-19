{
    window.onload=function () {
        setBody()
    }
    function setBody() {
        setTimeout(function () {
            document.getElementById("body").style.overflowY="auto";
        },12000)
    }
    function send(){
        alert("发送失败");
    }
}
