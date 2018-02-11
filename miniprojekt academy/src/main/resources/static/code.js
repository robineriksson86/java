
var app = angular.module("gameApp", []);
var i =0;

app.controller("javaCtrl", function($scope){
    $scope.points =0;
    $scope.quizzesCompleted=0;
    $scope.page = javaquiz[i];
    $scope.flagan=false;


    $scope.select = function(o){
        $scope.answer=o;
    };
    $scope.doQuiz = function(){
        $scope.quizflag=true;
        $scope.flagan=true;
    };
    $scope.NextQuestion = function(){
        if($scope.answer===$scope.page.correct){
            $scope.points++;
        }
        i++;
        $scope.page = javaquiz[i];
        if($scope.page===undefined){
            $scope.hej="Grattis du fick " + $scope.points + " av " + javaquiz.length +" poäng!";
            $scope.flag=true;
            if($scope.points>1) {
                $scope.quizzesCompleted=$scope.quizzesCompleted+1;
                console.log($scope.quizzesCompleted);
            }
            console.log($scope.quizzesCompleted);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost:8080/addPoints/" + $scope.quizzesCompleted, false);
            xmlHttp.send(null);
        }
    };
});
var a = 0;
app.controller("databaseCtrl", function($scope){
    $scope.points =0;
    $scope.quizzesCompleted=0;
    $scope.page = databasequiz[a];
    $scope.flagan=false;


    $scope.select = function(o){
        $scope.answer=o;
    };
    $scope.doQuiz = function(){
        $scope.quizflag=true;
        $scope.flagan=true;
    };
    $scope.NextQuestion = function(){
        if($scope.answer===$scope.page.correct){
            $scope.points++;
        }
        a++;
        $scope.page = databasequiz[a];
        if($scope.page===undefined){
            $scope.hej="Grattis du fick " + $scope.points + " av " + databasequiz.length +" poäng!";
            $scope.flag=true;
            if($scope.points>1) {
                $scope.quizzesCompleted=$scope.quizzesCompleted+1;
                console.log($scope.quizzesCompleted);
            }
            console.log($scope.quizzesCompleted);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost:8080/addPoints/" + $scope.quizzesCompleted, false);
            xmlHttp.send(null);
        }
    };
});

var b = 0;
app.controller("javascriptCtrl", function($scope){
    $scope.points =0;
    $scope.quizzesCompleted=0;
    $scope.page = javascriptquiz[b];
    $scope.flagan=false;


    $scope.select = function(o){
        $scope.answer=o;
    };
    $scope.doQuiz = function(){
        $scope.quizflag=true;
        $scope.flagan=true;
    };
    $scope.NextQuestion = function(){
        if($scope.answer===$scope.page.correct){
            $scope.points++;
        }
        b++;
        $scope.page = javascriptquiz[b];
        if($scope.page===undefined){
            $scope.hej="Grattis du fick " + $scope.points + " av " + javascriptquiz.length +" poäng!";
            $scope.flag=true;
            if($scope.points>1) {
                $scope.quizzesCompleted=$scope.quizzesCompleted+1;
                console.log($scope.quizzesCompleted);
            }
            console.log($scope.quizzesCompleted);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost:8080/addPoints/" + $scope.quizzesCompleted, false);
            xmlHttp.send(null);
        }
    };
});

var c = 0;
app.controller("githubCtrl", function($scope){
    $scope.points =0;
    $scope.quizzesCompleted=0;
    $scope.page = githubquiz[c];
    $scope.flagan=false;


    $scope.select = function(o){
        $scope.answer=o;
    };
    $scope.doQuiz = function(){
        $scope.quizflag=true;
        $scope.flagan=true;
    };
    $scope.NextQuestion = function(){
        if($scope.answer===$scope.page.correct){
            $scope.points++;
        }
        c++;
        $scope.page = githubquiz[c];
        if($scope.page===undefined){
            $scope.hej="Grattis du fick " + $scope.points + " av " + githubquiz.length +" poäng!";
            $scope.flag=true;
            if($scope.points>1) {
                $scope.quizzesCompleted=$scope.quizzesCompleted+1;
                console.log($scope.quizzesCompleted);
            }
            console.log($scope.quizzesCompleted);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost:8080/addPoints/" + $scope.quizzesCompleted, false);
            xmlHttp.send(null);
        }
    };
});


var d = 0;
app.controller("htmlcssCtrl", function($scope){
    $scope.points =0;
    $scope.quizzesCompleted=0;
    $scope.page = htmlcssquiz[d];
    $scope.flagan=false;


    $scope.select = function(o){
        $scope.answer=o;
    };
    $scope.doQuiz = function(){
        $scope.quizflag=true;
        $scope.flagan=true;
    };
    $scope.NextQuestion = function(){
        if($scope.answer===$scope.page.correct){
            $scope.points++;
        }
        d++;
        $scope.page = htmlcssquiz[d];
        if($scope.page===undefined){
            $scope.hej="Grattis du fick " + $scope.points + " av " + htmlcssquiz.length +" poäng!";
            $scope.flag=true;
            if($scope.points>1) {
                $scope.quizzesCompleted=$scope.quizzesCompleted+1;
                console.log($scope.quizzesCompleted);
            }
            console.log($scope.quizzesCompleted);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost:8080/addPoints/" + $scope.quizzesCompleted, false);
            xmlHttp.send(null);
        }
    };
});

var e = 0;
app.controller("angularjsCtrl", function($scope){
    $scope.points =0;
    $scope.quizzesCompleted=0;
    $scope.page = angulajsquiz[e];
    $scope.flagan=false;


    $scope.select = function(o){
        $scope.answer=o;
    };
    $scope.doQuiz = function(){
        $scope.quizflag=true;
        $scope.flagan=true;
    };
    $scope.NextQuestion = function(){
        if($scope.answer===$scope.page.correct){
            $scope.points++;
        }
        e++;
        $scope.page = angulajsquiz[e];
        if($scope.page===undefined){
            $scope.hej="Grattis du fick " + $scope.points + " av " + angulajsquiz.length +" poäng!";
            $scope.flag=true;
            if($scope.points>1) {
                $scope.quizzesCompleted=$scope.quizzesCompleted+1;
                console.log($scope.quizzesCompleted);
            }
            console.log($scope.quizzesCompleted);
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://localhost:8080/addPoints/" + $scope.quizzesCompleted, false);
            xmlHttp.send(null);
        }
    };
});