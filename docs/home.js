var app = angular.module('myApp', ['ngRoute']);

app.controller('myController', function ($scope, myService) {
    $scope.recommended = myService.recommended;
    $scope.meal = myService.meal;
    $scope.news = myService.news;
    $scope.toDetail = myService.toDetail;

});

app.controller('detailController', function ($scope, myService, $window) {
    $scope.back = function () {
        $window.history.back();
    }
    $scope.recommended = myService.recommended;
    $scope.travel = myService.travel;
    $scope.news = myService.news;
});


app.service('myService', function ($location) {
    this.toDetail = function () {
        $location.path('/detail/');
    }

    this.news = [
        {
            time: "昨日",
            img: "./img/bass1_s.jpg",
            title: "ベース入門レッスン Part1 エクササイズ　特別編",
            subTitle: "音楽に欠かせないグルーブを生み出すエレクトリック・ベースを初歩から学んでいきましょう。最初は指を滑らかに動かすためのエクササイズです",
            mainImg: "./img/bass1.jpg",
            content: "最初は指を滑らかに動かすためのエクササイズです。タイム感が向上し、怪我を防ぐことにもつながります。テンポを徐々に上げて、自分の限界を出し切ってみましょう。",
            contentsAction: function () {
                alert("練習");
            }
        }
    ]
    this.recommended = [
        {
            time: "1か月前",
            img: "./img/met_s.jpg",
            title: "メトロノームを使ってリズム感を鍛える",
            subTitle: "音楽を支える安定したリズムを習得しよう"
        },
        {
            time: "3か月前",
            img: "./img/score_s.jpg",
            title: "音楽理論の初歩",
            subTitle: "クールなベースラインを編み出す音楽理論の初歩を学ぼう"
        }
    ]

    this.meal = [
        {
            time: "2016/06/10",
            img: "./img/jazz_s.jpg",
            title: "オススメのベースが渋いジャズ",
            subTitle: "ジャズが大好きな人も、馴染みがない人も、ベースの渋いジャズを聞いてみよう"
        },
        {
            time: "2015/03/10",
            img: "./img/motown_s.jpg",
            title: "モータウン風ベースラインを弾いてみよう",
            subTitle: "思わず踊りだしたくなるようなモータウンのベースラインを弾いてみよう"
        }
    ]
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'myController'
        })
        .when('/detail', {
            templateUrl: 'detail.html',
            controller: 'detailController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);