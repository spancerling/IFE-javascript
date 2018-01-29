var d = document.getElementById("background");
var tk = document.getElementById("tk");
tk.onclick = function(){
	pop();
}

function pop() {
    var wrap = document.createElement("div");
    d.appendChild(wrap);
    wrap.id = "wrap";

    var layer = document.createElement("div");
    layer.id = "layer";
    d.appendChild(layer);

    var coor = document.createElement("div");
    coor.id = "coor";
    layer.appendChild(coor);

    var first =document.createElement("div");
    first.innerHTML = "这是一个浮出层";
    first.id = "first";
    layer.appendChild(first);

    var p = document.createElement("p");
    p.id = "p";
    p.innerHTML = "这是一个浮出层"
    layer.appendChild(p);


    var but = document.createElement("div");
    but.id = "but";
    layer.appendChild(but);

    var buttona = document.createElement("button");
    buttona.innerHTML = "确定";
    buttona.id = "buttona";
    but.appendChild(buttona);

    var buttonb = document.createElement("button");
    buttonb.innerHTML = "取消";
    buttonb.id = "buttonb";
    but.appendChild(buttonb);

    turnoff(wrap,layer,wrap);
    turnoff(buttona,layer,wrap);
    turnoff(buttonb,layer,wrap);

    
    enlarge(layer,coor);
    drag(layer,first);

}
//关闭浮出层  
//element 添加事件的对象
//eventOne 删除的dom对象
//eventTwo 删除的dom对象
function turnoff(element,eventOne,eventTwo){
    element.onclick = function() {
        d.removeChild(eventOne);
        d.removeChild(eventTwo);
    }
}

//实现弹出面板的拖动
//定义参数

var params = {
        left: 0,
        top: 0,
        currentX: 0,
        currentY: 0,
        width: 0,
        height: 0,
        move: false,
        flag: false
};
//获取元素的坐标
//node 返回的css对象 
//key 需要获取的属性
function getCss(node,key) {
     return node.currentStyle ? node.currentStyle[key]:window.getComputedStyle(node,false)[key];
}


//拖曳函数

function drag(target,obj){
    //获取弹出层现在的位置
    params.left = getCss(target,'left');
    params.top = getCss(target,'top');
    

    obj.onmousedown =function(evt) {
        params.move = true;
        //组织鼠标按下的默认事件
        evt.preventDefault();
        //记录鼠标按下时，鼠标在窗口的位置
        params.currentX = evt.clientX;
        params.currentY = evt.clientY;
                
    };

    obj.onmouseup = function(evt) {
        params.move = false;
        //更新弹出层在窗口的位置
        params.left = getCss(target,'left');
        params.top = getCss(target,'top');
        
        
    };

    obj.onmousemove = function(evt) {
        if (params.move) {
            //记录鼠标现在在窗口中的位置
            var nowX = evt.clientX;
            var nowY = evt.clientY;
            //通过鼠标现在的位置减去鼠标按下时的位置，来计算鼠标移动的距离
            var disX = nowX - params.currentX;
            var disY = nowY - params.currentY;
            //用弹出层原来的位置加上鼠标移动的距离，来更新弹出层的位置
            target.style.left = parseInt(params.left) + disX + 'px';
            target.style.top = parseInt(params.top) + disY + 'px';
            
        }
    };
}
//放大缩小函数
function enlarge(target,obj){
    //获取弹出层现在的位置
    params.left = getCss(target,'left');
    params.top = getCss(target,'top');
    params.width = getCss(target,'width');
    params.height = getCss(target,'height');
    

    obj.onmousedown =function(evt) {
        
        params.flag = true;
        //组织鼠标按下的默认事件
        evt.preventDefault();
        //记录鼠标按下时，鼠标在窗口的位置
        params.currentX = evt.clientX;
        params.currentY = evt.clientY;
        
    };

    obj.onmouseup = function(evt) {
        
        params.flag = false;
        //更新弹出层在窗口的位置
        params.left = getCss(target,'left');
        params.top = getCss(target,'top');
        params.width = getCss(target,'width');
        params.height = getCss(target,'height');
        
    };

    obj.onmousemove = function(evt) {
        if (params.flag) {
            //记录鼠标现在在窗口中的位置
            var nowX = evt.clientX;
            var nowY = evt.clientY;
            //通过鼠标现在的位置减去鼠标按下时的位置，来计算鼠标移动的距离
            var disX = nowX - params.currentX;
            var disY = nowY - params.currentY;
            //用弹出层原来的位置加上鼠标移动的距离，来更新弹出层的位置
            target.style.width = Math.max(344,parseInt(params.width) + disX)  + 'px';
            target.style.height = Math.max(176,parseInt(params.height) + disY)  + 'px';

        }
    };
}