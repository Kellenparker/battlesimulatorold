
var userArmies = 0;
var compArmies = 0;


$(document).ready(function(){
	addArmy(true);
	addArmy(false);
});

function addArmy(user){

	if(user){
		if(userArmies >= 9){
			return;	
		} 
		$('#addArmyUser').remove();
		userArmies++;

		$('#user').append('<div class="element friendly" id="userArmy' + userArmies + '"></div>');
		$('#userArmy' + userArmies).append('<h3 class="elehead">' + userArmies + genArmyNumber(userArmies) + ' Army</h3>');
		$('#userArmy' + userArmies).append('<p class="paragraph">Infantry: 00000 Cavalry: 00000 Artillery: 00000</p>');
		$('#userArmy' + userArmies).append('<button class="armyBut" id="userBut' + userArmies + '">Edit</button>');
		if(userArmies != 1)
			$('#userArmy' + userArmies).append('<button class="removeBut" id="remUser' + userArmies + '">Remove</button>');
		if(userArmies > 2)
			$('#remUser' + (userArmies - 1)).hide();	
		$('#user').append('<button class="addArmy" id="addArmyUser">Add Army</button>');
	}
	else {
		if(compArmies >= 9){
			return;	
		} 
		$('#addArmyComp').remove();
		compArmies++;
		$('#comp').append('<div class="element enemy" id="compArmy'+ compArmies + '"></div>');
		$('#compArmy' + compArmies).append('<h3 class="elehead">' + compArmies + genArmyNumber(compArmies) + ' Army</h3>');
		$('#compArmy' + compArmies).append('<p class="paragraph">Infantry: 00000 Cavalry: 00000 Artillery: 00000</p>');
		$('#compArmy' + compArmies).append('<button class="armyBut" id="compBut' + compArmies + '">Edit</button>');
		if(compArmies != 1)
			$('#compArmy' + compArmies).append('<button class="removeBut" id="remComp' + compArmies + '">Remove</button>');
		if(compArmies > 2)
			$('#remComp' + (compArmies - 1)).hide();
		$('#comp').append('<button class="addArmy" id="addArmyComp">Add Army</button>');
	}

	//Handle button presses
	$("button").unbind('click').click(function() {
	    
		//Handle add army buttons
	    if(this.id === 'addArmyUser') {
	    	addArmy(true);
	    	return;
	    }
	    if(this.id === 'addArmyComp') {
	    	addArmy(false);
	    	return;
	    }

	    //Handle remove buttons
		if(this.id.substring(0, this.id.length - 1) === 'remUser') {
			removeArmy(true, this.id.substring(this.id.length - 1, this.id.length));
		}

		if(this.id.substring(0, this.id.length - 1) === 'remComp') {
			removeArmy(false, this.id.substring(this.id.length - 1, this.id.length));
	    }

	});

}

function removeArmy(user, index){

	if(user){
		$('#userArmy' + index + '').remove();
		userArmies--;
		$('#remUser' + userArmies).show();
	}
	else{
		$('#compArmy' + index + '').remove();
		compArmies--;
		$('#remComp' + compArmies).show();
	}

}

//Will only need to check up to army limit (10)
function genArmyNumber(num){

	if(!(num === 1 || num === 3 || num === 2)) return 'th';
	else if (num === 2) return 'nd';
	else if (num === 3) return 'rd';
	else return 'st';

}