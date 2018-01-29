require.config({
	paths : {
		"jquery": 'jquery-1.10.2.min'
	}
});



require(["jquery","form"],function($,w){
	
		new w.Form().alert({
		//表头数据	
		heads: [
		{
	    //排序标准
		name: 'name',
		label: '姓名',
		sortable: false,
		upsort:false,
		downsort:false
	    },{
		name: 'chinese',
		label: '语文',
		sortable: true,
		upsort:true,
		downsort: true		
		},{
		name: 'math',
		label: '数学',
		sortable: true,
		upsort:true,
		downsort: true
	    },{
		name: 'english',
		label: '英语',
		sortable: true,
		upsort:true,
		downsort: true
	    },{
	    	//默认以最后一列为字段升序排列
		name: 'total',
		label: '总分',
		sortable: true,
		upsort:true,
		downsort: true
	    }],
        //表格内数据
		datas: [
        {
    	name: '小明',
    	chinese: 90,
    	math: 100,
    	english: 70,
    	total: 260
        },
        {
    	name: '小花',
    	chinese: 90,
    	math: 70,
    	english: 80,
    	total: 240
        },
        {
    	name: '小红',
    	chinese: 70,
    	math: 90,
    	english: 70,
    	total: 230
        }],
        //通过添加Class名在css文件引入相关class名增加权重
        skinClassName: null
	
	
		});
		
	});
