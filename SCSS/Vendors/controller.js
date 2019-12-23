$(document).ready(function () {
	
	var questionBank=new Array;
	var wordArray=new Array;
	var keyArray=new Array;
	var previousGuesses=new Array;
 	var currentWord;
	var currentClue;
	var wrongAnswerCount;
	
 
 
 		$.getJSON('quizbank.json', function(data) { 

		for(i=0;i<data.wordlist.length;i++){ 
			questionBank[i]=new Array;
			questionBank[i][0]=data.wordlist[i].word;
			questionBank[i][1]=data.wordlist[i].clue;
		}
		  
		
		 
		titleScreen();
		})//gtjson
 

 
	
		function titleScreen(){
			
			$('#gameContent').append('<div id="gameTitle">HANGMAN</div><div id="startButton" class="button">BEGIN</div>');
			
			$('#startButton').on("click",function (){gameScreen()});
			
		}//display game
	
	
	
		function gameScreen(){
			$('#gameContent').empty();
			$('#gameContent').append('<div id="pixHolder"><img id="hangman" src="man.png"></div>');
			$('#gameContent').append('<div id="wordHolder"></div>');
			$('#gameContent').append('<div id="clueHolder"></div>');
			$('#gameContent').append('<div id="guesses"></div>');
			$('#gameContent').append('<div id="feedback"></div>');
			 
			insertKeys();
			
			getWord();
			var numberOfTiles=currentWord.length;
			wrongAnswerCount=0;
			previousGuesses=[];
			 
			for(i=0;i<numberOfTiles;i++){
				$('#wordHolder').append('<div class="tile" id=t'+i+'></div>');
			}
			
			$('#clueHolder').append("HINT: "+currentClue);
 
			 
			
			}//gamescreen
			
			function insertKeys(){
				keyArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
				
				for(i=0;i<26;i++){
					$('#guesses').append('<div id="k'+i+'"  class="keys">'+keyArray[i]+'</div>');	
					$('#k'+i).on("click",function (){handleKeyPress((this));});
					
					}
				
				
			}//insertkeys
			
			function handleKeyPress( a) {
				//alert(a);alert(a.value);
			 
			 	
			 $('#'+a.id).addClass('usedkeys');
			 $('#'+a.id).removeClass('keys');
			 
			 	var input=a.id.slice(1,a.id.length);
				input=keyArray[input];
				 
				var found=false;
				var previouslyEntered=false;
				//var input=String.fromCharCode(event.keyCode).toLowerCase();
				
				for(i=0;i<previousGuesses.length;i++){if(input==previousGuesses[i]){previouslyEntered=true;}}
				
				if(!previouslyEntered){
				previousGuesses.push(input);
				
				for(i=0;i<wordArray.length;i++){
				
				if(input==wordArray[i]){found=true;$('#t'+i).append(input);}	
				
				}//for
				
				if(found){checkAnswer();}
				else{wrongAnswer(input);}
				}//if
				
				 
				
			 
			}//handlekeyup
	
		
		function checkAnswer(){
			
				var currentAnswer="";
			
				for(i=0;i<currentWord.length;i++){
					
					currentAnswer+=($('#t'+i).text());
					}		
					
					if(currentAnswer==currentWord){victoryPage();};
			}//checkanswer
		
		function victoryPage(){
			 
			$('#guesses').empty();
			 $('#feedback').append("CORRECT!<br><br><div id='replay' class='button'>CONTINUE</div>");
			 $('#replay').on("click",function (){if(questionBank.length>0){gameScreen()}else{finalMessage()}});
		}//victorypage
		
		function wrongAnswer(a){
			wrongAnswerCount++;
			var pos=(wrongAnswerCount*-75) +"px"
			//$('#guesses').append("  "+a);
			$('#hangman').css("left",pos);
			if(wrongAnswerCount==6){defeatPage();}
			}//wronganswer
		
		
		function defeatPage(){ 
			$('#guesses').empty();
			 $('#feedback').append("You're Dead!<br>(answer= "+ currentWord +")<div id='replay' class='button'>CONTINUE</div>");
			 $('#replay').on("click",function (){if(questionBank.length>0){gameScreen()}else{finalMessage()}});
		}//defeatpage
		
		
		function getWord(){
			var rnd=Math.floor(Math.random()*questionBank.length);
			currentWord=questionBank[rnd][0];
			currentClue=questionBank[rnd][1];
			questionBank.splice(rnd,1); 
			wordArray=currentWord.split("");			
		}//getword
	
	
		function finalMessage(){
			$('#gameContent').empty();
			$('#gameContent').append('<div id="finalMessage">You have finished all the words in the game!</div>');
		}//finalmessage
	
	});//doc ready