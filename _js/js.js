$(document).ready(function() {
	var path = window.location.pathname;
	var smpath = path.split('/');
	var index = smpath[smpath.length-1];
	var button = document.getElementsByTagName('button');
	if (index == 'index.html'){
		button[0].classList.add('active');
	} else if (index == 'education.html') {
		button[1].classList.add('active');
	} else if (index == 'about_me.html') {
		button[2].classList.add('active');
	} else if (index == 'contacts.html') {
		button[3].classList.add('active');
	};

function load(){
	setTimeout(function(){
		document.getElementsByClassName("col-md-2")[0].classList.toggle('show');
	},700)
}

document.getElementById("checkbox").onclick = function(){
	load();	
}
	$("#mail").hide();
	$("#tel").hide();
	$("#svg_mail, #svg_tel").mouseover(function(){
		$("#mail").css({"opacity":"1"}).show(500);
		$("#tel").css({"opacity":"1"}).show(500);
	});
	$(".contacts").mouseleave(function(){
		$("#mail").stop().hide(500);
		$("#tel").stop().hide(500);
	});//end hover
	
}); //end ready