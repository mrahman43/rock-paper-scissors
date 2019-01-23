
var userScrore,compScore,userScrore_span,compScore_span,result_p,smallUser,smallComp,userChoice_div;
userScrore= 0;
compScore = 0;

userScrore_span=document.getElementById("user-score");
compScore_span=document.getElementById("computer-score");
rock_div=document.getElementById("rock");
paper_div=document.getElementById("paper");
scissors_div=document.getElementById("scissors");
result_p=document.querySelector(".result>p");

smallUser = "User".fontsize(3).sub();
smallComp= 'Comp'.fontsize(3).sub();

function getComputerChoice () {
	var choices =['r','p','s'];
	var randomNumber = Math.floor(Math.random()*3)
	return choices[randomNumber];
}

function convertToWord (letter) {
	if(letter ==='r') return 'Rock';
	if(letter ==='p') return 'Paper';
	return 'Scissors';
}

function win (userchoice,computerChoice) {
	userScrore=userScrore+1;
	userScrore_span.innerHTML=userScrore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML= convertToWord(userchoice)+smallUser+' beats '+convertToWord(computerChoice)+smallComp+'.You Win!🤑';
	if(userchoice === 'r')
		userChoice_div=rock_div;
	else if (userchoice === 'p')
		userChoice_div=paper_div;
	else
		userChoice_div=scissors_div;

	userChoice_div.classList.add("greenglow");
	setTimeout(function(){
		userChoice_div.classList.remove("greenglow")
	},1500);
}

function lost (userchoice,computerChoice) {
	compScore=compScore+1;
	userScrore_span.innerHTML=userScrore;
	compScore_span.innerHTML=compScore;
	result_p.innerHTML='Oops!'+convertToWord(userchoice)+smallUser+' loses to '+convertToWord(computerChoice)+smallComp+'.You loose!🤦‍';

	if(userchoice === 'r')
		userChoice_div=rock_div;
	else if (userchoice === 'p')
		userChoice_div=paper_div;
	else
		userChoice_div=scissors_div;

	userChoice_div.classList.add("redglow");
	setTimeout(function(){
		userChoice_div.classList.remove("redglow")
	},1500)
}

function draw(userchoice,computerChoice){
	result_p.innerHTML= 'It\'s a draw!';
	if(userchoice === 'r')
		userChoice_div=rock_div;
	else if (userchoice === 'p')
		userChoice_div=paper_div;
	else
		userChoice_div=scissors_div;

	userChoice_div.classList.add("grayglow");
	setTimeout(function(){
		userChoice_div.classList.remove("grayglow")
	},1500)

}


function game(userchoice) {
	var computerChoice = getComputerChoice ();
	console.log(computerChoice);

	switch (userchoice+computerChoice) {
		case 'pr':
		case 'sp':
		case 'rs':
		win(userchoice,computerChoice);
		break;

		case 'rp':
		case 'ps':
		case 'sr':
		lost(userchoice,computerChoice);
		break;

		case 'rr':
		case 'pp':
		case 'ss':
		draw(userchoice,computerChoice);
		break;

	}
}

function main() {
	rock_div.addEventListener('click',function(){
		game('r');
	})
	paper_div.addEventListener('click',function () {
		game('p');
	})
	scissors_div.addEventListener('click',function () {
		game('s');
	})
	console.log('Mousumi <3');
}
main();
