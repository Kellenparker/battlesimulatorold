

var userArmies = 1;
var compArmies = 1;


function displayElements(user, comp){

	for(i = 0; i < user; i++){
		addElement(true,i);
	}
	for(i = 0; i < comp; i++){
		addElement(false,i);
	}

	$('#user').append('<button class="addArmy" id="addArmyUser">Add Army</button>');
	$('#comp').append('<button class="addArmy" id="addArmyComp">Add Army</button>');

	console.log("hello");

}

function addElement(user, index){

	if (user){
		$('#user').append('<div class="element friendly" id="userarmy' + index + '"></div>');
		$('#userarmy' + index).append('<h3 class="elehead">1st Army</h3>');
		$('#userarmy' + index).append('<p class="paragraph">Infantry: 00000 Cavalry: 00000 Artillery: 00000</p>');
		$('#userarmy' + index).append('<button class="armybut" id="userbut' + index + '">Edit</button>');
	}else{
		$('#comp').append('<div class="element enemy" id="comparmy'+ index + '"></div>');
		$('#comparmy' + index).append('<h3 class="elehead">1st Army</h3>');
		$('#comparmy' + index).append('<p class="paragraph">Infantry: 00000 Cavalry: 00000 Artillery: 00000</p>');
		$('#comparmy' + index).append('<button class="armybut" id="compbut' + index + '">Edit</button>');
	}

}

$(document).ready(function(){
	displayElements(userArmies, compArmies);
});