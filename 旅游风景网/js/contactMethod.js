window.onload=function () {
    document.getElementById("weibo").onmouseover=function () {
        document.getElementById("weibo").style.backgroundImage = "url(../images/weibo_hl.svg)";
        console.log("over");
    }
    document.getElementById("weibo").onmouseout=function () {
        document.getElementById("weibo").style.backgroundImage = "url(../images/weibo.svg)";
        console.log("out");
    }
}