/**
 * Created by michaelshi on 1/17/15.
 */
'use strict';

app.controller('HackEventCtrl',
    ['$scope', '$window', function ($scope, $window) {
        var loadSpreadsheet = function(){
            localStorage.clear();
            var sample_url = "https://spreadsheets.google.com/pub?key=1umDCA-tdUZ83O6jNsWvduX9BrtxQtDiYMxPFQhi1ZaA&hl=en&output=html";
            var url_parameter = document.location.search.split(/\?url=/)[1];
            var url = url_parameter || sample_url;
            var googleSpreadsheet = new GoogleSpreadsheet();
            googleSpreadsheet.url(url);
            googleSpreadsheet.load(function(result) {
                $scope.$apply(function(){
                    if(result.data.length>1){
                        $scope.displayMessage = true;
                        //If diff in message, play notification sound
                        console.log($scope.result, $scope.result.data[result.data.length-1], result.data[result.data.length-1]);
                        if($scope.result && $scope.result.data[result.data.length-1] != result.data[result.data.length-1]){
                            var myPlayer = $window.document.getElementById('my-video');
                            myPlayer.playVideo();
                        }
                        $scope.result = result;
                    }else{
                        $scope.displayMessage = false;
                        $scope.result = result;
                    }
                });
            });
        };
        //Check Google Spreadsheet every 5 seconds
        setInterval(loadSpreadsheet, 5000);
    }]);
