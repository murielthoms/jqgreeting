// var obj = {};
// $("button").click(function(){

// obj.prenom = $("#first_name").val();
// obj.nom = $("#last_name").val();
// obj.city = $("#city").val();

// $("#username").text(obj.prenom + " " + obj.nom);
// console.log(obj);
// });

// console.log(obj);

var obj = {}

$("button").click(function(){

	obj.prenom = $("#first_name").val();
	obj.nom = $("#last_name").val();
	obj.city = $("#city").val();

	$("#username").text(obj.prenom + " " + obj.nom);

});



