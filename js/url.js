var dir;

function MobleControl() {
    if (get_url() != "") {
        dir = get_url();
        localStorage.setItem('dir', dir);
    } else {
        dir = "stop";
    }
    setInterval('MyFun()', 1000);
}

function MyFun() {
    console.log("dir的值是：" + dir);
    if (dir == "up") {
        console.log("执行了一次向上移动的操作");
        localStorage.setItem('dir', 'stop');
        MobleUp();
    } else if (dir == "down") {
        console.log("执行了一次向下移动的操作");
        localStorage.setItem('dir', 'stop');
        MobleDown();
    } else if (dir == "left") {
        console.log("执行了一次向左移动的操作");
        localStorage.setItem('dir', 'stop');
        MobleLeft();
    } else if (dir == "right") {
        console.log("执行了一次向右移动的操作");
        localStorage.setItem('dir', 'stop');
        MobleRight();
    }    
    dir = localStorage.getItem('dir');
}

function get_url() {
    var src = window.location.href;
    var I = src.substr(src.indexOf("?dir=") + 5).length;
    var T = src.indexOf("?dir=");
    if (0 >= T) return "";
    if (I == src.length) return -1;
    var url = src.substr(src.indexOf("?dir=") + 5);
    return url;
}

function MobleClean() {
    localStorage.setItem('dir', 'init');
    console.log("clean被运行了");
    window.opener = null;
    window.close();
}

function sayHello(){
    alert("2048的hello被执行了");
}

function toastMessage(message) {
    window.control.toastMessage(message);
}

function test(){
    var x=document.getElementById("test");
    console.log(x.innerHTML);
}
function change(){
    var x=document.getElementById("test");
    x.innerHTML="hello";
}
