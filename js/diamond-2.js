//2018.1.11

//建立表格主体
(function createTable() {
	var tbody = document.getElementById("tbody");
	var tr_arr = new Array();
	for (var i=0; i<11; i++) {
	    tr_arr [i] = document.createElement("tr");
	    for (j=0;j<11;j++) {
	    var td_arr = new Array();
		td_arr[j] = document.createElement("td");
		if (i == 0) {
			td_arr[j].setAttribute("class","clear_border");
			if(j>0){
				td_arr[j].innerHTML = j;
			}
		}
		if (j ==0 ) {
			 td_arr[0].setAttribute("class", "clear_border");
			 if(i>0) {
			  td_arr[0].innerHTML = i;
			 }
		} 
		tr_arr[i].appendChild(td_arr[j]);	
	    }
	tbody.appendChild(tr_arr[i]);
    }
})();


//定义全局变量保存小长条的方向
var a;
var block = document.getElementById("diamond");
var direction = document.getElementById("direction");
//防止溢出
function forbidden() {
	
	var t = parseInt(block.style.top);
	var l = parseInt(block.style.left);
	if(t < 45){
		block.style.top = "45px";
	}
	else if(t > 450){
		block.style.top = "450px";
	}
	else if(l < 480){
		block.style.left = "480px";
	}
	else if(l > 885){
		block.style.left = "885px";
	}
}

/*判断小长条的方向*/
function check(){
    var w = direction.style.width;
    var to = direction.style.top;
    var le = direction.style.left;
    if (w =="10px"
    && to == "0px"  
    && le == "0px") {
    	a = 2;//left
    }
    if (w == "10px" 
    && le == "32px") {
    	a = 4;//right
    }
    if (w == "42px" 
    && to == "0px") {
    	a = 1;//top
    }
    if (w == "42px" 
    && to == "32px") {
    	a = 3;//bottom
    }
   console.log(a);
}


function moveLeft() {
	
	var t = parseInt(block.style.top);
	var l = parseInt(block.style.left);
	block.style.left = l -45 +"px";
	forbidden();
}

function moveRight() {
	
	var l = parseInt(block.style.left);
	block.style.left = l + 45 +"px";
	forbidden();
}

function moveTop() {
	
	var t = parseInt(block.style.top);
	block.style.top = t - 45 +"px";
	forbidden();
}
function moveBot() {

	var t = parseInt(block.style.top);
	block.style.top = t + 45 +"px";
	forbidden();
}
function turnLeft(){
    check();
    var q;
    var deg;
    if(a>2){
    q = a - 2;
    deg = q * 90;
    block.style.transform = "rotate("+deg+"deg)"
    }else if(a=1){
    q = a + 2;
    deg = q * 90;
    block.style.transform = "rotate("+deg+"deg)"
    }
}
function turnRight(){
    check();
    var q;
    var deg;
    q = a % 4;
    deg = q * 90;
    block.style.transform = "rotate("+deg+"deg)"    
}

function turnTop(){
    check();
    var q;
    var deg;
    q = (a + 1) % 2;
    deg = q * 90;
    block.style.transform = "rotate("+deg+"deg)"  
    console.log(q);  
}

function turnBot() {
	if(a>=3){
    q = a % 3;
    deg = q * 90;
    block.style.transform = "rotate("+deg+"deg)"
    }else {
    q = (a % 3) + 1;
    deg = q * 90;
    block.style.transform = "rotate("+deg+"deg)"
    }
}
function toLeft() {
	turnLeft();
	setTimeout("moveLeft()",1000);
}
function toRight() {
	turnRight();
	setTimeout("moveRight()",1000);
}
function toTop() {
	turnTop();
	setTimeout("moveTop()",1000);
}
function toBot() {
	turnBot();
	setTimeout("moveBot()",1000);
}