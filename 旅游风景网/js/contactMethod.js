window.onload = function () {
    document.getElementById("weibo").onmouseover = function () {
        var temp = document.getElementById("weibo");
        var img = document.getElementById("weibo-pop");
        temp.style.backgroundImage = "url(images/weibo_hl.svg)";
        // console.log("over");
        img.style.display = "block";
    };
    document.getElementById("weibo").onmouseout = function () {
        var temp = document.getElementById("weibo");
        var img = document.getElementById("weibo-pop");
        temp.style.backgroundImage = "url(images/weibo.svg)";
        // console.log("out");
        img.style.display = "none";
    };
    document.getElementById("wechat").onmouseover = function (ev) {
        var temp = document.getElementById("wechat");
        var img = document.getElementById("wechat-pop");
        temp.style.backgroundImage = "url(images/wechat_hl.svg)";
        img.style.display = "block";
    };
    document.getElementById("wechat").onmouseout = function (ev) {
        var temp = document.getElementById("wechat");
        var img = document.getElementById("wechat-pop");
        temp.style.backgroundImage = "url(images/wechat.svg)";
        img.style.display = "none";
    };
};

