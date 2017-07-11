
var app = angular.module("myStudentList", []); 

app.controller("myCtrl", function($scope) {
    $scope.students = ["Jose Smith", "Amy Chen", "Lorenzo Tenuta"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}
        if ($scope.students.indexOf($scope.addMe) == -1) {
            $scope.students.push($scope.addMe);
        } else {
            $scope.errortext = "The student is already in your student list.";
        }
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.students.splice(x, 1);
    }
});

app.controller("courseManagerCtrl", function($scope) {
        $scope.records = [
       {
            "CourseName" : "Geography 101",
            "NumberStudents" : 10
        },{
            "CourseName" : "Math 202",
            "NumberStudents" : 15
        },{
            "CourseName" : "Philosophy",
            "NumberStudents" : 16
        },{
            "CourseName" : "Italian 302",
            "NumberStudents" : 21
        }
    ]
});

