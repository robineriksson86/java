var stompClient = null;
$("#username").hide();

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    $("#send").prop("disabled", !connected);

    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/chat', function (chat) {
            sendToCorrectPlace(chat);
        });
    });
}

function sendToCorrectPlace(chat) {
    switch (JSON.parse(chat.body).type) {
        case 0: // USER_MESSAGE
            showGreeting(JSON.parse(chat.body).content);
            break;
        case 1: // USER_LIST
            showUsersConnectedList(JSON.parse(chat.body).content);
            break;
        case 2: // USER_LOGGED_IN
            showUserLoggedIn(JSON.parse(chat.body).content);
            break;
    }
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    disconnecting();
    console.log("Disconnected");
}

function sendMessage() {
    stompClient.send("/app/chatting", {}, JSON.stringify({
        'username': $("#username").text(),
        'message': $("#message").val()
    }));
}

function disconnecting() {
    stompClient.send("/app/disconnect", {}, JSON.stringify({
        'username': $("#username").text()
    }));
}
function connecting() {
    stompClient.send("/app/connecting", {}, JSON.stringify({
        'username': $("#username").text()
    }));
}

function login() {
    console.log("ERROR? check here login()");
    stompClient.send("/app/login");
    //stompClient.send("/app/login", {}, JSON.stringify({}));
    connecting();
}

function showUsersConnectedList(usersConnected) {
    $("#connectedusers").empty();
    $("#connectedusers").append(usersConnected);
}

function showGreeting(message) {
    if (message == "denied") {
        disconnect();
        alert("ERROR: Wrong username and/or password.");
    } else {
        //$("#chatheader").val("test").append("<tr><td>" + message + "</td></tr>");
        $("#greetings").append("<tr><td class='emojify-emoji'>" + message + "</td></tr>").scrollTop($("#greetings")[0].scrollHeight);
        document.getElementsByClassName('emojify-emoji').emojify(); //emojifiera inputen som skrivs ut i chatten
    }
}

function showUserLoggedIn(usrn) {
    if (usrn == "denied") {
        disconnect();
        alert("ERROR: Wrong username and/or password.");
    } else {
        //$("#chatheader").val("test").append("<tr><td>" + message + "</td></tr>");
        $("#greetings").append("<tr><td class='emojify-emoji'>" + usrn + " just logged in." + "</td></tr>");
        document.getElementsByClassName('emojify-emoji').emojify(); //emojifiera inputen som skrivs ut i chatten
    }
}

function tryToConnect() {
    /*
    var usernameValue = $("#username").val();
    var passwordValue = $("#password").val();
    var errorMsg = "Error:";

    if (usernameValue === "" || usernameValue === undefined) {
        errorMsg += " username";
    }

    if (passwordValue === "" || passwordValue === undefined) {
        errorMsg += (errorMsg == "Error:") ? " password" : " and password";
    }

    if (errorMsg != "Error:") {
        alert(errorMsg + " is required!");
    } else {
        $("#username").prop("disabled", true);
        $("#password").prop("disabled", true);
        */
        connect();
        setTimeout(login, 1000);
        login();
    //}
    //$("#chatheader").val("test").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $("#connect").click(function () {
        tryToConnect();

    });

    $("#disconnect").click(function () {
        disconnect();
    });
    $("#send").click(function () {
        sendMessage();
        $("#message").val("");
    });

});

$(document).keypress(function (e) {
    /*if(e.keyCode == 8){
     document.getElementById('message').emojify();
     console.log("blank space")
     }*/
    if (e.keyCode == 13) {
        $("#send").trigger("click");
        $("#message").val("")
    }
});

(function () {
    var emojify = function (prefix, suffix) {
        prefix = (prefix === undefined) ? ':' : prefix;
        suffix = (suffix === undefined) ? ':' : suffix;
        if (this === HTMLElement || this === NodeList || this === HTMLCollection) {
            return new emojify(prefix, suffix)
        }
        this.parent = this;
        this.emojis = {
            //':)': '1F60A', //samma fast snabbkomando
            'smilegrin': '1F601',
            //':D': '1F601', //samma fast snabbkomando
            'smiletearsofjoy':'1F602',
            'smileopenmouth':'1F603',
            'smileopenmouthsmilingeyes':'1F604',
            'smilingeyescoldsweat':'1F605',
            'smiletightlyclosedeyes':'1F606',
            'smilewink':'1F609',
            //';)':'1F609', //samma fast snabbkommando
            'smile': '1F60A',
            'smilingfacewithsmileyeyes':'1F60A',
            'smileyummy':'1F60B',
            'smilerelieved':'1F60C',
            'smileyheartshapedeyes':'1F60D'
        };
        this.replaceEmojis = function (elem) { //byter ut start och slut prefix
            var html = elem.innerHTML;
            for (var emoji in this.emojis) {
                html = html.replace(new RegExp(prefix + emoji + suffix, 'g'), '&#x' + this.emojis[emoji] + ';')
            }
            return html
        };
        this.replace = function () { //byter ut så att man bara kan skriva i en viss klass
            if (this.parent instanceof NodeList || this.parent instanceof HTMLCollection) {
                for (var i = 0; i < this.parent.length; i++) {
                    this.parent[i].innerHTML = this.replaceEmojis(this.parent[i])
                }
            } else {
                this.parent.innerHTML = this.replaceEmojis(this.parent)
            }
            return
        };
        this.replace();
        return this
    };
    if (!HTMLElement.prototype.emojify) {
        HTMLElement.prototype.emojify = emojify
    }
    if (!NodeList.prototype.emojify) {
        NodeList.prototype.emojify = emojify
    }
    if (!HTMLCollection.prototype.emojify) {
        HTMLCollection.prototype.emojify = emojify
    }
}());
window.addEventListener('load', function () {
    // Default prefix and suffix

    //document.getElementsByClassName('emojify-emoji').emojify();

    //kan byta emoji setupp med!
});







