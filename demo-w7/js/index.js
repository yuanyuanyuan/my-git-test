/**
 * Created by jinhuiyuan on 17/1/14.
 */

window.onload = function () {
    var msgScreen = document.getElementById("msgScreen");
    var msgContent = document.getElementById("msgContent");
    var memberChoose = document.getElementById("memberChoose");
    var input = document.getElementById("input");
    var sendChoose = document.getElementById("sendChoose");
    var sendChooseDiv = document.getElementById("sendChooseDiv");
    var kEnter = document.getElementById("kEnter");
    var kCtrlEnter = document.getElementById("kCtrlEnter");
    var sendBtn = document.getElementById("sendBtn");
    sendChooseDiv.status = 0; //判断发送模式
    input.addEventListener("keydown", keybordFunc); //初始化发送模式


    //选择不同角色
    memberChoose.addEventListener("click", function () {
        var p1 = "a";
        var p2 = "b";
        var value = memberChoose.innerText;
        if (value == p1) {
            memberChoose.innerText = p2;
        } else {
            memberChoose.innerText = p1;
        }
    });
    //选择发送模式按钮
    sendChoose.addEventListener("click", function () {
        sendChooseDiv.style.display = "block";
        kEnter.addEventListener("click", function (e) {
            sendChooseDiv.status = 0;
            input.addEventListener("keydown", keybordFunc);
            sendBtn.innerText = "Enter 发送";
            sendChooseDiv.style.display = "none";
            //阻止冒泡,避免触发上层处理
            e.stopPropagation();
        });
        kCtrlEnter.addEventListener("click", function (e) {
            sendChooseDiv.status = 1;
            input.addEventListener("keydown", keybordFunc);
            sendBtn.innerText = "Ctrl+Enter 发送";
            sendChooseDiv.style.display = "none";
            //阻止冒泡,避免触发上层处理
            e.stopPropagation();
        });
    });
    //发送msg逻辑
    function showMsgFunc(name, msgValue) {
        var msg = document.createElement("li");
        var msgName = document.createElement("div");
        var msgMsg = document.createElement("div");
        if (name == "a") {
            msgName.style.float = "left";
            msgMsg.style.float = "left";
        } else if (name == "b") {
            msgName.style.float = "right";
            msgMsg.style.float = "right";
        }
        msgName.className += "" + "avatar";
        msgMsg.className += "" + "msg";
        msgName.innerText = name;
        msgMsg.innerText = msgValue;
        msg.appendChild(msgName);
        msg.appendChild(msgMsg);
        msgContent.appendChild(msg);
    }
    //按键处理逻辑
    function keybordFunc(e) {
        if (this.value != '' && e.keyCode == 13) {
            if (!sendChooseDiv.status && e.ctrlKey) return;
            if (sendChooseDiv.status && !e.ctrlKey) return;
            var memberValue = memberChoose.innerText;
            var inputValue = input.value;
            showMsgFunc(memberValue, inputValue);
            msgScreen.scrollTop = msgScreen.scrollHeight - msgScreen.offsetHeight;
        }
    }
};