var config = {
    Titles: [
        {title: '员工ID', field: 'EmployeeId'},
        {title: '姓名', field: 'DisplayName'},
        {title: '部门', field: 'BUName'},
        {title: '状态', field: 'UserState', cellFn: StatusFn},
        {title: '操作', cellFn: unLockBtn}
    ],
    expand: // 展开按钮
        {
            title: '详情',
            // type: linkType._img,
            text: "展开",
            iconUrlOpen: 'Library/idb/images/openUpIcon_1.jpg',
            iconUrlClose: 'Library/idb/images/openUpIcon_2.jpg',
            expandDiv: createExpandDiv //这是回调函数,并且使用这个回调函数是否存在来判断是否需要展开内容
        },
    checkable: { // 复选框
        isHas: 1, //自定义标志位,0代表没有,1代表有
        c_class: 'chkClass',
        title: ''
    }
};

var xxx = { // 用对象方式来组,因为可以用键值对来进行访问,适合比较固定的数据访问进行键值访问
    "Data": [ //这里 data 先用数组来组,因为 data 里面的数据不需要太固定的访问方式
        { //然后用对象的方式来组,因为数据的格式是需要比较固定的
            "EmployeeId": "123",
            "DisplayName": "DisplayName1",
            "BUName": "BUName1",
            "UserState": 2

        }, {
            "EmployeeId": "456",
            "DisplayName": "DisplayName2",
            "BUName": "BUName2",
            "UserState": 2

        }, {
            "EmployeeId": "789",
            "DisplayName": "DisplayName3",
            "BUName": "BUName3",
            "UserState": 1

        }, {
            "EmployeeId": "000",
            "DisplayName": "DisplayName4",
            "BUName": "BUName4",
            "UserState": 1
        }
    ]
};
//自定义了一个展开的数据
var showDetail = {
    "Data": [
        {
            "showName": '我叫XXX',
            "showAge": 999
        }
    ]
};

document.write("<table id='tableContainer' border='1' align='center' width=50% cellspacing='0'>");
document.write("<tr>");
//列出表头的数据,遍历Titles对象
document.write("<td align='center'></td>");
for (var k = 0; k < config.Titles.length; k++) {
    document.write("<td align='center'>" + config.Titles[k].title + "</td>");
}
document.write("<td align='center'></td>");
document.write("</tr>");
//表内容
for (var i = 0; i < xxx.Data.length; i++) {
    document.write("<tr>");
    //
    if (config.checkable.isHas == 1) {
        document.write(
            "<td align='center'>" +
            "<input type='checkbox' name='category' value=" + i + "/>" +
            "</td>"
        );
    }
    for (var j in xxx.Data[i]) {//用 for in 主要是看到 data 表里面的每一个对象都是不固定的键
        //简单一点处理,直接判断当 j 等于UserState的时候的表里面的状态显示和相对应的操作显示
        if (config.Titles[3]['field'] == j && config.Titles[3].cellFn != undefined) {
            document.write("<td align='center'>" + config.Titles[3].cellFn(xxx.Data[i]) + "</td>");
            document.write("<td align='center'>" + config.Titles[4].cellFn(xxx.Data[i]) + "</td>");
        } else {
            document.write("<td align='center'>" + xxx.Data[i][j] + "</td>");
        }
    }
    //
    if (config.expand.expandDiv != undefined) {
        document.write(
            "<td class='detailClick' align='center'>" +
            config.expand.title +
            "</td>"
        );
    }
    document.write("</tr>");
}

//表尾
document.write("</table>");

//自定义的展开按钮点击事件
var detailClickBtn = document.getElementsByClassName('detailClick');
detailClickBtn[0].addEventListener('click',function () {
    //判断expandDiv是否存在
    if (config.expand.expandDiv != undefined) {
        document.body.appendChild(config.expand.expandDiv(showDetail));
    }
});


//判断状态显示(回调函数)
function StatusFn(t) {
    return (t.UserState == 2) ? '已锁定' : '未锁定';
}
//根据状态来控制处理显示(回调函数)
function unLockBtn(t) {
    return (t.UserState == 2) ? '解锁' : '锁定';
}
// n是传入一个数据对象,根据数据对象来显示数据(回调函数)
function createExpandDiv(n) {
    //返回一个 div, 放在 table 下方
    var html = n.Data[0].showName +
        "<br>" +
        n.Data[0].showAge;
    var htmlDiv = document.createElement("div");
    htmlDiv.setAttribute('style','border: 1px solid red');
    htmlDiv.innerHTML = html ;
    return htmlDiv;
}