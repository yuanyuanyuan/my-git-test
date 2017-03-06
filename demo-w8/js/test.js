/**
 * Created by jinhuiyuan on 17/1/22.
 */


function $(id) {
    return document.getElementById(id);
}

window.onload = function () {
    var text = $('text');
    var scroll = {};
    scroll.bar = $('scroll');
    scroll.btn = $('btn-scroll');


    //鼠标拖动滚动条
    scroll.btn.onmousedown = function(e){

        //获得鼠标的起始的Y坐标(鼠标当前Y坐标-滚动条的当前Y坐标)
        //每次鼠标点击后都要处理一次,因为需要记录起始鼠标位置
        var disY = e.clientY - scroll.btn.offsetTop;
        //绑定移动鼠标事件
        document.onmousemove = function(e){
            //获得鼠标真正在滚动条区间内移动的Y坐标(mousemove会不断触发)
            //当前鼠标的y坐标-鼠标的起始位置y坐标
            var t = e.clientY - disY;
            //最大滚动距离(要排除掉滚动块本身的高度)=滚动条的长度(包括上下边框) - 滚动块本身的高度
            //因为滚动的时候不是一个点滚动,而是一个快滚动,需要把块滚动的长度排除掉才是真正的滚动距离
            var scrollMax = scroll.bar.offsetHeight-scroll.btn.offsetHeight;

            // 少于0的时候设置为0,大于0的时候判断是否超过了最大滚动条区间(3是一些误差像素)
            //(新学习一种三元运算符的用法)
            t = t < 0 ? 0 : (t > scrollMax-3 ? scrollMax-3 : t);
            //设置滚动块的TOP(父组件相对布局,子组件绝对布局,top就是相对于父组件的top)
            //鼠标当前的真正在滚动条区间的位置就是滚动块的top
            scroll.btn.style.top = t + 'px';

            //因为要对应文本也要跟着滚动,并且是1:1的比例
            //滚动块的移动距离/滚动条的长度,获得比例
            var scale = scroll.btn.offsetTop/scrollMax;
            //需要注意文本块和文本展示框的关系跟滚动块和滚动条是相反的,文本展示框不移动,移动的是文本块
            //文本块的实际高度(在没有滚动条的情况下,元素内容的总高度)-文本块的父节点的本身的高度,获得滚动距离
            //滚动距离乘以比例获得文本块的top
            //负数是因为用top设置反方向
            text.style.top = -scale * (text.scrollHeight - text.parentNode.offsetHeight) + 'px';
            //阻止了默认事件行为,避免了浏览器默认长时间点击鼠标出现复制行为
            return false ;
        };
        document.onmouseup = function(){
            //清除掉文档上的mousemove事件
            document.onmousemove = null;
        };
    };
};