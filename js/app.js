var app = angular.module("myStudentList", []);
app.controller("myCtrl", function($scope) {
  $scope.students = ["Jose Smith", "Amy Chen", "Lorenzo Tenuta"];
  $scope.addItem = function() {
    $scope.errortext = "";
    if (!$scope.addMe) {
      return;
    }
    if ($scope.students.indexOf($scope.addMe) == -1) {
      $scope.students.push($scope.addMe);
    } else {
      $scope.errortext = "The student is already in your student list.";
    }
  }
  $scope.removeItem = function(x) {
    $scope.errortext = "";
    $scope.students.splice(x, 1);
  }

  $scope.shuffleList = function() {
    $scope.errortext = "";

    // Initialize variables
    var currentIndex = $scope.students.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element
      temporaryValue = $scope.students[currentIndex];
      $scope.students[currentIndex] = $scope.students[randomIndex];
      $scope.students[randomIndex] = temporaryValue;
    }

    return $scope.students;
  }

  $scope.group = function() {
    $scope.errortext = "";
    var numStudents = $scope.students.length;
    var groups = ["red", "green", "blue", "orange", "yellow", "purple", "pink"]
    var groupDivisor;
    i = 0;
    while (true) {
      if (numStudents < 5) {
        groupDivisor = 2;
        break;
      } else if ((numStudents - 3 * i) % 4 === 0) {
        var numGroups = i + ((numStudents - 3 * i) / 4);
        groupDivisor = 4;
        break;
      } else if ((numStudents - 4 * i) % 3 === 0) {
        var numGroups = i + ((numStudents - 4 * i) / 3);
        groupDivisor = 3;
        break;
      }
      i++
    }

    j = 0;
    for (var i = 0; i < numStudents; i++) {
      $("ul:last li:eq(" + i + ")").css("background", groups[j])
      if ((i + 1) % groupDivisor === 0) {
        j++;
      }
    }


  }
});
