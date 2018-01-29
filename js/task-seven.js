var tabHeader = {
	heads: [{
		name: 'name',
		label: '姓名',
		sortable: false
	},{
		name: 'chinese',
		label: '语文',
		sortable: true
	},{
		name: 'math',
		label: '数学',
		sortable: true
	},{
		name: 'english',
		label: '英语',
		sortable: true
	},{
		name: 'total',
		label: '总分',
		sortable: true
	}]
};


//表格内容数据
var datas =[
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
    }
];
//建立表格主体

function init() {
	addThead();
	addTbody();
}

var tabCon = document.getElementById('tab');
var tabHeadLen = tabHeader.heads.length;
var tabHead = tabHeader.heads;
var dataLen = datas.length;

//插入表头数据

function addThead() {
	var tHead = document.createElement('thead');
	var trNode = addTr();

	//生成表头单元格
	tabHead.forEach(function (head){
		var tds = addTd(head.label);

		if(head.sortable){
			var val = head.name;
			var upBtn = document.createElement('span');
			upBtn.className = 'upBtn';
			tds.appendChild(upBtn);
			upBtn.onclick = function () {
				upSort(val);
			};

			//添加降序按钮
			var downBtn = document.createElement('span');
			downBtn.className = 'downBtn';
			tds.appendChild(downBtn);
			//绑定事件
			downBtn.onclick = function () {
				downSort(val);
			};
		}
		trNode.appendChild(tds);
	});
    tHead.appendChild(trNode);
    tabCon.appendChild(tHead);

}

//添加表格内容
//
function addTbody() {
	var tBody = document.createElement('tbody');
	for (var i=0; i<dataLen; i++) {
		var trNode = addTr();
		for(var key in datas[i]){
			var tds = addTd(datas[i][key]);
			trNode.appendChild(tds);
		}
		tBody.appendChild(trNode);
	}
	tabCon.appendChild(tBody);
}

//生成单元行
function addTr() {
	var trNode = document.createElement('tr');
	return trNode;
}

//生成单元格

function addTd(value) {
	var tdNode = document.createElement('td');
	tdNode.innerText = value;
	return tdNode;
}

//添加升序按钮
//
function upSort(val) {
     sort1(val);
     tabCon.innerHTML = ' ';
     init();
}

function sort1(val) {
	var byScore = function (a,b) {
		return a[val] - b[val];
	};
	return datas.sort(byScore);
}

//添加降序按钮
//
function downSort(val) {
     sort2(val);
     tabCon.innerHTML = ' ';
     init();
}

function sort2(val) {
	var byScore = function (a,b) {
		return b[val] - a[val];
	};
	return datas.sort(byScore);
}
upSort('total');
