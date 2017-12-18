var scrollFunc = function (e) {
    // var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
    var header = document.getElementById("header");
    var status = getComputedStyle(header).getPropertyValue("opacity");
    if (e.wheelDelta > 0) { //当滑轮向上滚动时
        status = 0.84;
        if($(document).scrollTop()<421){
            header.style.backgroundColor="";
            status = 1;
        }
        else{
            header.style.backgroundColor="#005c30";
        }
    }
    else { //当滑轮向下滚动时
        status -= 0.08;
        // console.log($(document).scrollTop()+ " px");
        // document不用加双引号
    }
    header.style.opacity = status;
    // console.log(status);
};
window.onmousewheel = document.onmousewheel = scrollFunc;