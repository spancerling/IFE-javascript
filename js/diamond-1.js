/*2018.1.10*/

//定义全局变量保存小长条的方向
var a;

/*定位大方块的位置，初始化*/
function on() {
	var block = document.getElementById("diamond");
	var direction = document.getElementById("direction");
	block.style.left = "651px";
	block.style.top = "205px";
	direction.style.top = "0";
	direction.style.left = "0";
	direction.style.width = "42px";
    direction.style.height = "10px";
}
/*实现向前走一格*/
function go() {
	check();
	var block = document.getElementById("diamond");
	var top = parseInt(block.style.top);
	var left = parseInt(block.style.left);
	if(a == "top"){
	top = top - 43;
	block.style.top = top + "px";
	}
	else if (a == "left"){
	left = left - 43;
    block.style.left = left +"px";
	}
	else if (a == "right"){
	left = left + 43;
	block.style.left = left +"px";
	}
	else if (a == "bottom") {
	top = top + 43;
	block.style.top = top + "px";
	}
	//防止溢出
	if(top < 0){
		block.style.top = "33px";
	}
	if(left < 479){
		//禁止开始时按go就出现
		if(left == -42){
			block.style.left = "-42px";
			block.style.top = "-42px";
		}else{
		block.style.left = "479px";}
	}
	if(left > 866){
		block.style.left = "866px";
	}
	if(top > 420){
		block.style.top = "420px";
	}	
}

/*判断小长条的方向*/
function check(){
    var direction = document.getElementById("direction");
    var w = direction.style.width;
    var t = direction.style.top;
    var l = direction.style.left;
    if (w =="10px"
    && t == "0px") {
    	a = "left";
    }
    if (w == "10px" 
    && l == "32px") {
    	a = "right";
    }
    if (w == "42px" 
    && t == "0px") {
    	a = "top";
    }
    if (w == "42px" 
    && t == "32px") {
    	a = "bottom";
    }
   console.log(a);
}

function left()  {
	check();
	if (a == "top") {
    direction.style.width = "10px";
    direction.style.height = "42px";
    }
    else if (a == "left") {
    direction.style.top = "32px";
    direction.style.width = "42px";
    direction.style.height = "10px";
    }
    else if (a == "right") {
    direction.style.width = "42px";
    direction.style.height = "10px";
    direction.style.left = "0px";
    } 
    else if (a == "bottom") {
    direction.style.width = "10px";
    direction.style.height = "42px";
    direction.style.top = "0px";
    direction.style.left = "32px";
    } 	
}

function right() {
	check();
	if (a == "top") {
    direction.style.width = "10px";
    direction.style.height = "42px";
    direction.style.left = "32px";
    }
    else if (a == "right") {
    direction.style.top = "32px";
    direction.style.width = "42px";
    direction.style.height = "10px";
    direction.style.left = "0px";
    } 
    else if (a == "bottom") {
    direction.style.width = "10px";
    direction.style.height = "42px";
    direction.style.top = "0px";
    }
    else if (a == "left") {
    direction.style.top = "0px";
    direction.style.width = "42px";
    direction.style.height = "10px";
    } 	
}

function back() {
	check();
	if (a == "top") {
    direction.style.top = "32px";
    }
    else if (a == "bottom") {
    direction.style.top = "0px";
    }
    else if (a == "left") {
    direction.style.width = "10px";
    direction.style.height = "42px";
    direction.style.top = "0px";
    direction.style.left = "32px";
    }
    else if (a == "right") {
    direction.style.width = "10px";
    direction.style.height = "42px";
    direction.style.top = "0px";
    direction.style.left = "0px";
    }
}