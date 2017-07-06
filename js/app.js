
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

/*adding controller for myList of classes*/ 
app.controller("myList", function($scope) {
    $scope.classes = ["Poetry", "American Lit", "ESL 102", "Linguistics"];
   
});
/*adding controller for #of students //(currently not working)*/
app.controller("numberOf", function($scope) {
    $scope.size = ["12 students", "20 students", "15 students", 
    "17 students"];

});
