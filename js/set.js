!function(n){
    var e=n.document,
    t=e.documentElement,
    i=750,      // 设计稿的宽度
    d=i/50,    // 根字号
    o="orientationchange"in n?"orientationchange":"resize",
    a=function(){
        var n=t.clientWidth||320;n>750&&(n=750),
        t.style.fontSize=n/d+"px"
    };
    e.addEventListener && (n.addEventListener(o,a,!1),
    e.addEventListener("DOMContentLoaded",a,!1))

    // 加载完在显示
        document.addEventListener("DOMContentLoaded", function(){
        document.body.style.display = "block";
        });

}(window);


