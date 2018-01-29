require.config({
	paths : {
		"jquery": 'jquery-1.10.2.min'
	}
});



require(["jquery","window"],function($,w){
	$("#a").click(function(){
		new w.Window().alert({
			width: 300,
			height:150,
			//距离y轴的偏移量
			y:50,
			title: "提示",
			content: "welcome!",
			btnContent:"ok",
			//确定按钮的触发事件
			handler: function(){
				         alert(1);
			},
			hasCloseBtn: true,
			//通过添加Class名在css文件引入相关class名增加权重
			skinClassName: null,
	
		});
		
	});
});