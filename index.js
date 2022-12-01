function scuberGreetingForFeet(distance){
	// Write your code here!
	if(distance <= 400) {
		return 'This one is on me!';
	}
	else if(distance > 2000) {
		if(distance > 2500) {
			return 'No can do.';
		}
		return 'I will gladly take your thirty bucks.';
	}
}

function ternaryCheckCity(city){
	// Write your code here!
	const newYorkCity = city == "NYC" ? "Ok, sounds good." : "No go.";
	return newYorkCity;
}

function switchOnCharmFromTip(tip){
	// Write your code here!
	let tipster;
	switch(tip) {
		case 'generous':
		tipster = 'Thank you so much.';
		break;
		case 'not as generous':
		tipster = 'Thank you.';
		break;
		case 'thanks for everything':
		tipster = 'Bye.';
		break;
	}
	return tipster;
}