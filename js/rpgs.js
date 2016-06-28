$('#darksouls_VM').click(function(event){
	event.preventDefault();
	sessionStorage.setItem('game', 'darksouls3');
	location.href = "viewgame.html";
});


$('#dragonage_VM').click(function(event){
	event.preventDefault();
	sessionStorage.setItem('game', 'dragonage');
	location.href = "viewgame.html";
});


$('#elderscrolls_VM').click(function(event){
	event.preventDefault();
	sessionStorage.setItem('game', 'elderscrolls');
	location.href = "viewgame.html";
});