define([ "jquery"],function ($) {
	function Form(){
		this.cfg = {
		heads: [
		{
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
		name: 'total',
		label: '总分',
		sortable: true,
		upsort:true,
		downsort: true
	    }],

		datas: [
        {
    	name: '小明',
    	chinese: 90,
    	total: 260
        },
        {
    	name: '小花',
    	chinese: 90,
    	total: 240
        },
        {
    	name: '小红',
    	chinese: 70,
    	total: 230
        }],
        skinClassName: null
	};
}
	Form.prototype = {
		alert: function(cfg){
			var CFG = $.extend(this.cfg,cfg);
			var tabCon = $('<table class="tab" border="1"></table>');
			var tabHeadLen = CFG.heads.length;
            var tabHead = CFG.heads;
            var dataLen = CFG.datas.length;
            var datas = CFG.datas;
			var body = $("body");
			//建立表格主体

            function init() {
	           addThead();
	           addTbody();
            }

            //插入表头数据
            
			function addThead() {
	        var tHead = $('<thead></thead>');
	        var trNode = addTr();

	        //生成表头单元格
	        tabHead.forEach(function (head){
		    var tds = addTd(head.label);

		    if(head.sortable){
			var val = head.name;
			var upBtn = $('<span></span>');
			upBtn.attr("class","upBtn") ;
			if(head.upsort){
			tds.append(upBtn);
			upBtn.click (function () {
				upSort(val);
			});
		   }

			//添加降序按钮
			var downBtn = $('<span></span>');
			downBtn.attr("class","downBtn") ;
			if(head.downsort){
			tds.append(downBtn);
			//绑定事件
			downBtn.click (function () {
				downSort(val);
			});
		   }
		}
		    trNode.append(tds);
	});
            tHead.append(trNode);
            tabCon.append(tHead);
            body.append(tabCon);

}
		//添加表格内容

        function addTbody() {
	    var tBody = $('<tbody></tbody>');
	    for (var i=0; i<dataLen; i++) {
		var trNode = addTr();
		    for(var key in datas[i]){
			var tds = addTd(datas[i][key]);
			trNode.append(tds);
		    }
		tBody.append(trNode);
	    }
	    tabCon.append(tBody);
	    body.append(tabCon);
}	

        //生成单元行
        
        function addTr() {
	     var trNode = $('<tr></tr>');
	     return trNode;
}
        //生成单元格

        function addTd(value) {
	    var tdNode = $('<td></td>');
	    tdNode.html(value);
	    return tdNode;
}
        //添加升序按钮

        function upSort(val) {
        sort1(val);
        tabCon.html("");
        init();
}

        function sort1(val) {
	    var byScore = function (a,b) {
		return a[val] - b[val];
	};
	    return datas.sort(byScore);
}

        //添加降序按钮

        function downSort(val) {
        sort2(val);
        tabCon.html("");
        init();
}

        function sort2(val) {
	    var byScore = function (a,b) {
		return b[val] - a[val];
	};
	    return datas.sort(byScore);
}
        //默认以最后一列为字段升序排列
        upSort('total');

		if(CFG.skinClassName){
				tabCon.addClass(CFG.skinClassName);
			}
		}
	}
	return {
		Form: Form
	}

})