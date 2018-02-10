/*2018.1.10*/
/**
 * /
 * @param {[string]} little [大方块的ID名]
 * @param {[string]} big    [小方块的ID名]
 */
function Box(little,big) {
    //定义变量保存小长条的方向
    var a;
    /*判断小长条的方向*/
    this.check = function () {        
        var direction = document.getElementById(little),
            w = direction.style.width,
            t = direction.style.top,
            l = direction.style.left;
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
    
    };
    /*定位大方块的位置，初始化*/
    this.on = function () {
        var block = document.getElementById(big);
        var direction = document.getElementById(little);
        block.style.left = "651px";
        block.style.top = "205px";
        direction.style.top = "0";
        direction.style.left = "0";
        direction.style.width = "42px";
        direction.style.height = "10px";

    };
    /*实现向前走一格*/
    this.go = function () {
        this.check();
        var block = document.getElementById(big),
            top = parseInt(block.style.top),
            left = parseInt(block.style.left);
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
            }
            else{
                block.style.left = "479px";}
            }
        if(left > 866){
            block.style.left = "866px";
        }
        if(top > 420){
            block.style.top = "420px";
        }   
    };
    this.left = function () {
        this.check();
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
    };
    this.right = function () {
        this.check();
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
    };
    this.back = function () {
        this.check();
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
    };
}

var box1 = new Box("direction","diamond");

var area = document.getElementById("move");
area.addEventListener("click",function(event){
    var target = event.target;
    switch(target.id){
        case "a":
            box1.on();
            break;
        case "b":
            box1.go();
            break;
        case "c":
            box1.left();
            break;
        case "d":
            box1.right();
            break;
        case "e":
            box1.back();
            break;
    }
});



