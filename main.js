

var userArmies = 1;
var compArmies = 1;


function displayElements(user, comp){

	for(i = 0; i < user; i++){
		addElement(true,i);
	}
	for(i = 0; i < comp; i++){
		addElement(false,i);
	}

	console.log("hello");

}

function addElement(user, index){

	if (user){
		console.log("test1");
		$('#user').append('<div class="element friendly" id="userarmy'+ index + '"></div>');
		$('#userarmy' + index).append('<h3 class="elehead">1st Army</h3>');
		$('#userarmy' + index).append('<p class="paragraph">Infantry: 00000 Cavalry: 00000 Artillery: 00000</p>');
		$('#userarmy' + index).append('<button class="button">Edit</button>');
	}else{
		$('#comp').append('<div class="element enemy" id="comparmy'+ index + '"></div>');
		$('#comparmy' + index).append('<h3 class="elehead">1st Army</h3>');
		$('#comparmy' + index).append('<p class="paragraph">Infantry: 00000 Cavalry: 00000 Artillery: 00000</p>');
		$('#comparmy' + index).append('<button class="button">Edit</button>');
	}

}

$(document).ready(function(){
	displayElements(userArmies, compArmies);
});