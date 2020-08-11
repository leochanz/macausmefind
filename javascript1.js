var person = {
  name : ['Bob', 'Smith'],
  age : 32,
  gender : 'male',
  interests : ['music', 'skiing'],
  bio : function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};


person.name[0]
person.age
person.interests[1]


var myDiv = document.createElement('div');
var myVideo = document.querySelector('video');

var myNotification = new Notification('Hello!');



function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
};








$(document).ready(function(){
    alert('hello world');
});

jQuery("h1");
$("h1");
$("article h1");
$("article").find("p");

$(document).ready(function(){
    var newElem = $("<div>I am new element!</div>");
    $("body").append(newElem);

});

var newElem = $("<div>I am new element!</div>");
$("body").append(newElem);
$("input").val("new Value");