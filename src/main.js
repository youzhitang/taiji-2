let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫釉纸糖
 * 接下来我要展示一下我的前端功底
 * 我打算做一个太极
 * 首先我要准备一个 div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我将把这个 div 变成太极图
 * 先把 div 变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,5);
    border:none;
}
/*
 * 八卦是阴阳形成的
 * 一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 阳中有阴，阴中有阳
 * 白属阳性,向上升浮
 * 黑属阴性,向下沉降
*/
#div1::before{
    width:100px;
    height:100px;
    background: #000;
    left:0;
    top:0;
    left:50%;
    transform: translate(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    background: #fff;
    left:0;
    bottom:0;
    left:50%;
    transform: translate(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
 `;
let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        }
        else {
            string2 += string[n];
        }
        //如果是回车就加<br>
        //如果不是回车就照搬

        html.innerHTML = string2;
        window.scrollTo(0, 9999);
        html.scrollTo(0, 9999);
        style.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            //n不是最后一个就继续
            n += 1
            step();
        }
    }, 50);
};
step();
