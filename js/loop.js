$(document).ready(function() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // alert("我用手机访问");
        // window.stop();
    } else {
        // alert("我用电脑访问");
        // setInterval('Androidloop()', 1000);
        setInterval('test()', 1000);
    }

})

function Androidloop() {
    console.log("localStorage.getItem('dir')   " + localStorage.getItem('dir'));
    if (localStorage.getItem('dir')== "up") {
        console.log("执行了一次向上移动的操作");
        localStorage.setItem('dir', 'stop');
        MobleUp();
    }
}

function AndroidMoveUp() {
    localStorage.setItem('dir', 'up');
    alert("赋值完毕");
}
