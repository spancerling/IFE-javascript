/*2018.1.7*/


var input=$(".input");
var tips=$(".tips");


$(document).ready(function () {
	var input=$(".input");
	//在点击时显示提示
	for(i=0;i<input.length;i++){
		(function (n) {
			input.eq(n).focus(function () {
				var a=n;
				tips.eq(a).css("display","block");
				input.eq(a).css("border-color","#1fffff");
	    		tips.eq(a).css("color","#000");
			})
		})(i);
	}
 });   
/**
 * 用于查询名字是否符合标准
 */	
    function codefund(a) {
	    var len=input.eq(a).val();
	    var sum=0;
	    var codeval;
	    for (i=0;i<len.length;i++) {
	    codeval=len.charCodeAt(i);
	        if (codeval >= 0x00
	        && codeval <= 0xFF) {
	            sum=sum+1;
	        }
	        else {
	            sum=sum+2;
	        }
        }
	    if (sum>3 
	    && sum<17) {
  	        tips.eq(a).css("color","#a7ff83");
  	        tips.eq(a).html("格式正确");
  	        input.eq(a).css("border-color","#a7ff83");	
  	    }
  	    else {
  	        tips.eq(a).html("格式错误");
  	        tips.eq(a).css("color","#dc2f2f");
  	        input.eq(a).css("border-color","#dc2f2f");
  	    }
    };
    input.eq(0).blur( function(){
    	if (input.eq(0).val()) {
    		codefund(0);
    	}
    	else {
    		tips.eq(0).html("姓名不能为空");
	        tips.eq(0).css("color","#dc2f2f");
	        input.eq(0).css("border-color","#dc2f2f");
    	}
    });
    input.eq(0).focus(function () {
	    tips.eq(0).html("必填，长度为4~16个字符");
    });

/**
 * 用于查询密码是否符合标准
 */
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    input.eq(1).blur(function () {
    	code=input.eq(1).val()
    	if (pPattern.test(code) == true) {
        	tips.eq(1).css("color","#a7ff83");
  		    tips.eq(1).html("格式正确");
  		    input.eq(1).css("border-color","#a7ff83");
    	}
    	else {
    		tips.eq(1).css("color","#dc2f2f");
  		    tips.eq(1).html("格式错误");
  		    input.eq(1).css("border-color","#dc2f2f");
    	}
    });
    input.eq(1).focus(function () {
	    tips.eq(1).html("最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符");
    });
/**
 * 用于查询再次输入密码是否正确
 */
 	input.eq(2).blur(function (){
    	code=input.eq(1).val()
    	if (pPattern.test(code) == true 
    	&& input.eq(2).val() == code) {
        	tips.eq(2).css("color","#a7ff83");
  		    tips.eq(2).html("格式正确");
  		    input.eq(2).css("border-color","#a7ff83");
    	}
    	else {
    		tips.eq(2).css("color","#dc2f2f");
  		    tips.eq(2).html("格式错误");
  		    input.eq(2).css("border-color","#dc2f2f");
    	}
    });
    input.eq(2).focus(function () {
	    tips.eq(2).html("再次输入相同密码");
    });
/**
 * 用于查询邮箱是否是正确格式
 */
var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    input.eq(3).blur(function () {
    	mailbox=input.eq(3).val()
    	if (ePattern.test(mailbox) == true) {
        	tips.eq(3).css("color","#a7ff83");
  		    tips.eq(3).html("格式正确");
  		    input.eq(3).css("border-color","#a7ff83");
    	}
    	else {
    		tips.eq(3).css("color","#dc2f2f");
  		    tips.eq(3).html("格式错误");
  		    input.eq(3).css("border-color","#dc2f2f");
    	}
    });
    input.eq(3).focus(function () {
	    tips.eq(3).html("请输入合法邮箱");
    });
/**
 * 用于查询手机是否是正确格式
 */
var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    input.eq(4).blur(function (){
    	phonenumer=input.eq(4).val()
    	if (mPattern.test(phonenumer) == true) {
        	tips.eq(4).css("color","#a7ff83");
  		    tips.eq(4).html("格式正确");
  		    input.eq(4).css("border-color","#a7ff83");
    	}
    	else {
    		tips.eq(4).css("color","#dc2f2f");
  		    tips.eq(4).html("格式错误");
  		    input.eq(4).css("border-color","#dc2f2f");
    	}
    });
    input.eq(4).focus(function () {
	    tips.eq(4).html("请输入合法手机号码");
    });


/**
 * 提交时检查所有数据
 */
function check() {
	
	var all=0;
	for (i=0;i<tips.length;i++) {
		if (tips.eq(i).html() === "格式正确") {
			  all=all+1;
		}
    else {
			all=0;
		}
	}console.log(all);
	    if (all == 5 ) {
	    	alert("提交成功");
	    }
      else {
	    	alert("提交失败");
	    }
}


	

	












