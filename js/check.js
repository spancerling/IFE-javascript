/*2018.1.7*/
var input = $(".input"),
     tips = $(".tips");

$(document).ready(function () {
	//在点击时显示提示  
	  for(var i=0;i<input.length;i++){
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

    var formModule = (function(){    
        function codefund(a) {
            var len = input.eq(a).val();
            var sum = 0;
            var codeval;
            for (var i = 0;i < len.length;i++) {
                codeval = len.charCodeAt(i);
                if (codeval >= 0x00
                && codeval <= 0xFF) {
                    sum = sum + 1;
                }
                else {
                    sum = sum + 2;
                }
            }
            if (sum > 3 
            && sum < 17) {
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
        function checkCode(b) {
            var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            var code = input.eq(b).val();
                if (pPattern.test(code) == true) {
                    tips.eq(b).css("color","#a7ff83");
                    tips.eq(b).html("格式正确");
                    input.eq(b).css("border-color","#a7ff83");
                }
                else {
                    tips.eq(b).css("color","#dc2f2f");
                    tips.eq(b).html("格式错误");
                    input.eq(b).css("border-color","#dc2f2f");
                }
        }
        function checkCodeAgain(c) {
            var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
            var code=input.eq(1).val()
            if (pPattern.test(code) == true 
            && input.eq(c).val() == code) {
                tips.eq(c).css("color","#a7ff83");
                tips.eq(c).html("格式正确");
                input.eq(c).css("border-color","#a7ff83");
            }
            else {
                tips.eq(c).css("color","#dc2f2f");
                tips.eq(c).html("格式错误");
                input.eq(c).css("border-color","#dc2f2f");
            }
        }
        function checkMailbox (d) {
            var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var mailbox = input.eq(d).val()
                if (ePattern.test(mailbox) == true) {
                    tips.eq(d).css("color","#a7ff83");
                    tips.eq(d).html("格式正确");
                    input.eq(d).css("border-color","#a7ff83");
                }
                else {
                    tips.eq(d).css("color","#dc2f2f");
                    tips.eq(d).html("格式错误");
                    input.eq(d).css("border-color","#dc2f2f");
                }
        }
        function checkPhone(e) {
            var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
            var phonenumer=input.eq(4).val();
                if (mPattern.test(phonenumer) == true) {
                    tips.eq(e).css("color","#a7ff83");
                    tips.eq(e).html("格式正确");
                    input.eq(e).css("border-color","#a7ff83");
                }
                else {
                    tips.eq(e).css("color","#dc2f2f");
                    tips.eq(e).html("格式错误");
                    input.eq(e).css("border-color","#dc2f2f");
                }
        }
        function check() {
            var all=0;
            for (var i=0;i<tips.length;i++) {
                if (tips.eq(i).html() === "格式正确") {
                all=all+1;
                }
                else {
                all=0;
                }
            }
            if (all == 5 ) {
                alert("提交成功");
            }
            else {
                alert("提交失败");
            }
        }
        return {
            codefund : codefund,
            checkCode : checkCode,
            checkCodeAgain : checkCodeAgain,
            checkMailbox : checkMailbox,
            checkPhone : checkPhone,
            check : check
        };
})();   



/**
 * 用于查询姓名是否符合标准
 */  
    input.eq(0).blur( function(){
    	if (input.eq(0).val()) {
    		formModule.codefund(0);
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
    input.eq(1).blur(function () {
    	formModule.checkCode(1);
    });
    input.eq(1).focus(function () {
	    tips.eq(1).html("最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符");
    });
/**
 * 用于查询再次输入密码是否正确
 */
 	input.eq(2).blur(function (){
       formModule.checkCodeAgain (2);
    });
    input.eq(2).focus(function () {
	    tips.eq(2).html("再次输入相同密码");
    });
/**
 * 用于查询邮箱是否是正确格式
 */

    input.eq(3).blur(function () {
    	formModule.checkMailbox (3);
    });
    input.eq(3).focus(function () {
	    tips.eq(3).html("请输入合法邮箱");
    });
/**
 * 用于查询手机是否是正确格式
 */

    input.eq(4).blur(function (){
    	formModule.checkPhone (4);
    });
    input.eq(4).focus(function () {
	    tips.eq(4).html("请输入合法手机号码");
    });


/**
 * 提交时检查所有数据
 */

   $("button").eq(0).click(function(){ 
      formModule.check();
   })

	

	












