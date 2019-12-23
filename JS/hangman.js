/* alphabet creates an array, and each letter is an even numbered index.  Starting with the letter 'a' being an index of 0. */

                /*------------------------------------------------------------*/
                /*----*/   //    Create Alphabet Buttons For Guessing   /*----*/
                /*------------------------------------------------------------*/
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Alphabet = document.getElementsByClassName('Alphabet')[0];
var alphaButton = document.createElement('button');
for (var i =0; i < alphabet.length; i++ ) {    
    var button = document.createElement('button');
    button.textContent = alphabet[i].toUpperCase();
    Alphabet.appendChild(button).classList.add('Letter');
    button.id = alphabet[i];    
}

                /*---------------------------------------------------------------*/
                /*-*/   //    End of Creating Alphabet Buttons For Guessing   /*-*/
                /*--------------------------------------------------------------*/

                /*-------------------------------------------------------------------*/
                /*----*/   //    Create Alphabet Buttons Elements to Access   /*----*/
                /*-----------------------------------------------------------------*/

var a = document.getElementById('a'),
        b = document.getElementById('b'),
        c = document.getElementById('c'),
        d = document.getElementById('d'),
        e = document.getElementById('e'),
        f = document.getElementById('f'),
        g = document.getElementById('g'),
        h = document.getElementById('h'),
        I = document.getElementById('i'),
        j = document.getElementById('j'),
        k = document.getElementById('k'),
        l = document.getElementById('l'),
        m = document.getElementById('m'),
        n = document.getElementById('n'),
        o = document.getElementById('o'),
        p = document.getElementById('p'),
        q = document.getElementById('q'),
        r = document.getElementById('r'),
        s = document.getElementById('s'),
        t = document.getElementById('t'),
        u = document.getElementById('u'),
        v = document.getElementById('v'),
        w = document.getElementById('w'),
        x = document.getElementById('x'),
        y = document.getElementById('y'),
        z = document.getElementById('z');

                /*----------------------------------------------------------------------------*/
                /*----*/   //    End of Creating Alphabet Buttons Elements to Access   /*----*/
                /*---------------------------------------------------------------------------*/

                /*----------------------------------------------------*/
                /*----*/   //    Create Variables To Start Game   /*----*/
                /*--------------------------------------------------*/
var startGame = document.getElementById('start');
var Warning = document.getElementById('warning');
var Warning2 = document.getElementById('Warning2');
var Warning3 = document.getElementById('Warning3');
var Message = document.getElementById('Message');
Warning.style.display = 'none';
Warning2.style.display = 'none';
Warning3.style.display = 'none';
Message.style.display = 'none';
var gameStarted = false;



                /*--------------------------------------------------------*/
                /*----*/   //    Create Variables For Hanging Man   /*----*/
                /*-------------------------------------------------------*/
var base = document.getElementById('Gallows'),
        support = document.getElementById('support'),
        crossbar = document.getElementById('crossBar'),
        rope = document.getElementById('rope'),
        head = document.getElementById('head'),
        spine = document.getElementById('spine'),
        leftArm = document.getElementById('lArm'),
        rightArm = document.getElementById('rArm'),
        leftLeg = document.getElementById('lLeg'),
        rightLeg = document.getElementById('rLeg');

                /*------------------------------------------------*/
                /*----*/   //    Create Variables For Word   /*----*/
                /*----------------------------------------------*/
var WORD,
        Word,
        word = "";

                /*------------------------------------------------------------------*/
                /*----*/   //    Hide Alphabet Until Word To Guess Created   /*----*/
                /*----------------------------------------------------------------*/

Alphabet.style.display = 'none';

                /*----------------------------------------------------------------------------------------*/
                /*----*/   //    Create & Hide Place To Enter Guessed Letters Until Game Started   /*----*/
                /*---------------------------------------------------------------------------------------*/

var Letter = document.getElementById('userLetter');
Letter.style.display = 'none';

                /*---------------------------------------------------------*/
                /*----*/   //   Assign Mystery Word For Later Use   /*----*/
                /*------------------------------------------------------*/

var WORD = document.getElementById('mysteryWord');

                /*---------------------------------------------------- ----*/
                /*----*/  //Reveal Body Parts on Wrong Guesses   /*----*/
                /*-------------------------------------------------------*/

function Lost(guesses){
    
    if (guesses ===10){
        
        help.style.display = 'none';
        Warning2.style.display = 'none';
        Letter.style.display = 'none';
        restart.style.display = 'grid';
        Message.textContent = 'You Lost!'
        Message.style.display = 'grid';
        
    }    
    
}

var guesses = 0;

var revealBody = function() {
        
        var man = [base, support, crossbar, rope, head, spine, leftArm, rightArm, leftLeg, rightLeg];
    
    man[guesses].style.display = 'grid';
    
}

//Add Variable restart and Hide it.
var restart = document.getElementById('restart');
restart.style.display = 'none';

function Restart(){
    
    guesses = 0;
    wordy. style.display = 'grid';
    wordy.value = "";
    WORD.textContent = "";
    wordy.focus();
    restart.style.display = 'none';
    startGame.style.display = 'grid';
    Message.style.display = 'none';
    
    // Redisplay Letters to Guess.
    a.style.display = 'grid';
    b.style.display = 'grid';
    c.style.display = 'grid';
    d.style.display = 'grid';
    e.style.display = 'grid';
    f.style.display = 'grid';
    g.style.display = 'grid';
    h.style.display = 'grid';
    I.style.display = 'grid';
    j.style.display = 'grid';
    k.style.display = 'grid';
    l.style.display = 'grid';
    m.style.display = 'grid';
    n.style.display = 'grid';
    o.style.display = 'grid';
    p.style.display = 'grid';
    q.style.display = 'grid';
    r.style.display = 'grid';
    s.style.display = 'grid';
    t.style.display = 'grid';
    u.style.display = 'grid';
    v.style.display = 'grid';
    w.style.display = 'grid';
    x.style.display = 'grid';
    y.style.display = 'grid';
    z.style.display = 'grid';
    gameStarted = false;
    
    
}

/*-----------------------------------------------*/
/*-----------*/    //   Start Game    /*-----------*/
/*---------------------------------------------*/  

document.addEventListener("keyup", function(event){
    
    event.preventDefault();
    
    if(event.keyCode === 13){        
        
        if(gameStarted === true){
            
            if(restart.style.display === 'none'){
            Warning.style.display = 'none';
            Warning3.textContent = "Game has already started.  Please choose a letter.";
            Warning3.style.display = 'grid';
            } else {
                
                restart.click();
                
            }
            
        } else {
            startGame.click();            
        }                
    }    
});



startGame.onclick = function(){
    
    gameStarted = true;
    
    var help = document.getElementById('gameHelp');
    help.style.display = 'grid';
    Word = document.getElementById('userWord').value;
    
    if(Word == ""){
        
        Warning.style.display = "grid";
        help.style.display = 'none';
        return false;
        
    }
    
    var test = new RegExp("[a-zA-Z\'\"]");
        if(!Word.match(test)){              
           Warning.style.display = "grid";
            help.style.display = 'none';
        return false;
        
        }
    
    Warning.style.display = 'none';
    word = Word.replace(/[a-z]/ig, "-");
    WORD.textContent = word;
    
    base.style.display = 'none';
    support.style.display = 'none';
    crossbar.style.display = 'none';
    rope.style.display = 'none';
    head.style.display = 'none';
    spine.style.display = 'none';
    leftArm.style.display = 'none';
    rightArm.style.display = 'none';
    leftLeg.style.display = 'none';
    rightLeg.style.display = 'none';
    
    startGame.style.display = 'none';
    document.getElementById('userWord').style.display = 'none';
    
    Alphabet.style.display = 'inline-grid';
    Letter.style.display = 'block';
    Letter.focus();
        
    return Word;
    
}

                /*---------------------------------------------------------------*/
                /*----*/   //    Function For Replacing Letters That Exist  /*----*/
                /*--------------------------------------------------------------*/

var replaceLetters = function(Word, alphaButton){

    var Letter = document.getElementById('userLetter');
    var LETTER = Letter.value;

    word = word.split("");

    for ( var i = 0 ;  i < Word.length;  i++ ){

        var Character = Word.charAt(i);

        if(Character.toLowerCase() === LETTER){

            word[i] = Character;

        }

    }

    word = word.join("");

    WORD.textContent = word;

}
/*----------------------------------------------------------------------*/
/*--------------------*/    //Guess Letter    /*---------------------------*/
/*----------------------------------------------------------------------*/
Letter.addEventListener("keyup", function(event){
    
    event.preventDefault();
    
    if (event.keyCode === 65) {
        Warning2.style.display = 'none';
        Warning3.style.display = 'none';
        a.click();
        Letter.value="";
        
}  else if (event.keyCode === 66){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    b.click(); 
    Letter.value="";
     
}  else if (event.keyCode === 67){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    c.click();
    Letter.value="";
     
}  else if (event.keyCode === 68){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    d.click();
    Letter.value="";
     
}  else if (event.keyCode === 69){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    e.click();
    Letter.value="";
     
}  else if (event.keyCode === 70){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    f.click();
    Letter.value="";
     
}  else if (event.keyCode === 71){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    g.click();
    Letter.value="";
     
}  else if (event.keyCode === 72){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    h.click();
    Letter.value="";
     
}  else if (event.keyCode === 73){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    I.click();
    Letter.value="";
     
}  else if (event.keyCode === 74){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    j.click();
    Letter.value="";
     
}  else if (event.keyCode === 75){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    k.click();
    Letter.value="";
     
}  else if (event.keyCode === 76){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    l.click();
    Letter.value="";
     
}  else if (event.keyCode === 77){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    m.click();   
    Letter.value="";
     
}    else if (event.keyCode === 78){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    n.click();    
    Letter.value="";
     
}  else if (event.keyCode === 79){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    o.click();  
    Letter.value="";
     
}  else if (event.keyCode === 80){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    p.click();   
    Letter.value="";
     
}  else if (event.keyCode === 81){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    q.click();    
    Letter.value="";
     
}  else if (event.keyCode === 82){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    r.click();    
    Letter.value="";
     
}  else if (event.keyCode === 83){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    s.click();
    Letter.value="";
     
}  else if (event.keyCode === 84){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    t.click();  
    Letter.value="";
     
}  else if (event.keyCode === 85){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    u.click();  
    Letter.value="";
     
}  else if (event.keyCode === 86){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    v.click();    
    Letter.value="";
     
}  else if (event.keyCode === 87){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    w.click();   
    Letter.value="";
     
}  else if (event.keyCode === 88){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    x.click();    
    Letter.value="";
     
}  else if (event.keyCode === 89){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    y.click();   
    Letter.value="";
     
}  else if (event.keyCode === 90){
    Warning2.style.display = 'none';
    Warning3.style.display = 'none';
    z.click(); 
    Letter.value="";
     
} else if (event.keyCode < 65 || event.keyCode > 90)
{       
        Warning2.style.display = 'none';
        Warning3.style.display = 'none';
        Warning.style.display = "grid";
        help.style.display = 'none';
        Letter.value="";
        return false;   
}

});

function removeWarning(){
    
    if(Warning.style.display = 'grid'){
        
        Warning.style.display = 'none'
        help.style.display = 'grid';
        
    }
    
}

//Assign Variable for userWord & Help Message for Reset
var wordy = document.getElementById('userWord');
var help = document.getElementById('gameHelp');

/*------------------------------------------------*/
/*-------*/    //User Guess Functions    /*-------*/
/*----------------------------------------------*/

a.onclick = function() { 
    
    //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());
    removeWarning();
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    
    if(a.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }    
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/    
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, a);        
    //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    
    }
    } else {        
        revealBody(guesses);
        guesses++; 
        Lost(guesses);
    }
    a.style.display = 'none';    
}

b.onclick = function() {
    
    //Get variable values
    var iSpy = Word.indexOf(Letter.value);
   var uSpy = Word.indexOf(Letter.value.toUpperCase());
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(b.style.display === 'none'){
        help.style.display = 'none';
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }    
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, b);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
   Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++; 
        Lost(guesses);
    }
    b.style.display = 'none';   
}

c.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());    
    removeWarning();
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(c.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, c);
    //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    c.style.display = 'none';   
}

d.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(d.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/    
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, d);
         //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    d.style.display = 'none';   
}

e.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());   
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(e.style.display === 'none'){
        help.style.display = 'none';        
       Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, e);
    //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    e.style.display = 'none';   
}

f.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(f.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, f);
    //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    restart.style.display = 'grid';
    Letter.style.display = 'none';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    f.style.display = 'none';   
}

g.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());
    removeWarning();
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(g.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
 /*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, g);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    g.style.display = 'none';   
}

h.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());   
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(h.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, h);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    h.style.display = 'none';   
}

I.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());    
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(I.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, I);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    I.style.display = 'none';   
}

j.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());    
    removeWarning();  
    Warning2.style.display = 'none';
 /*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(j.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, j);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    j.style.display = 'none';   
}

k.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());    
    removeWarning(); 
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(k.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, k);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    k.style.display = 'none';    
}

l.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());    
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(l.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, l);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    l.style.display = 'none';   
}

m.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());    
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(m.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, m);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    m.style.display = 'none';   
}

n.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(n.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, n);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++; 
        Lost(guesses);
    }
    n.style.display = 'none';   
}

o.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(o.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, o);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    o.style.display = 'none';   
}

p.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning();  
    Warning2.style.display = 'none';
 /*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(p.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, p);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    p.style.display = 'none';   
}

q.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(q.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, q);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++; 
        Lost(guesses);
    }
    q.style.display = 'none';   
}

r.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(r.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, r);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++; 
        Lost(guesses);
    }
    r.style.display = 'none';    
}

s.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(s.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, s);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    s.style.display = 'none';    
}

t.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(t.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, t);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    t.style.display = 'none';    
}

u.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());
    removeWarning();  
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(u.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost(guesses);
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, u);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost(guesses);
    }
    u.style.display = 'none';    
}

v.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase()); 
    removeWarning(); 
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(v.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++
        Lost();
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, v);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost();
    }
    v.style.display = 'none';    
}

w.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());  
    removeWarning(); 
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(w.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost();
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, w);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost();
    }
    w.style.display = 'none';    
}

x.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase()); 
    removeWarning();
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(x.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost();
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, x);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost();
    }
    x.style.display = 'none';    
}

y.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());
    removeWarning(); 
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(y.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost();
        return;        
    }
 /*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, y);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost();
    }
    y.style.display = 'none';    
}

z.onclick = function() {
    
     //Get variable values
    var iSpy = Word.indexOf(Letter.value);
    var uSpy = Word.indexOf(Letter.value.toUpperCase());   
    removeWarning(); 
    Warning2.style.display = 'none';
/*-----------------------------------------------*/
/*-*/    //Double check if guessed already    /*-*/
/*----------------------------------------------*/
    if(z.style.display === 'none'){
        help.style.display = 'none';        
        Warning2.style.display = 'grid';
        revealBody(guesses);
        guesses++;
        Lost();
        return;        
    }
/*-----------------------------------------------*/
/*---*/    //Check if letter is in the word    /*----*/
/*----------------------------------------------*/
    if(iSpy >= 0  ||  uSpy >= 0){
    replaceLetters(Word, z);
     //Check If User Has Won The Game
    if(WORD.textContent === Word){
    Message.textContent = 'You Win!'
    Message.style.display = 'grid';
    //Check if they want to play again.
    help.style.display = 'none';
    Letter.style.display = 'none';
    restart.style.display = 'grid';    
    }
    } else {        
        revealBody(guesses);
        guesses++;
        Lost();
    }
    z.style.display = 'none';    
}

restart.onclick = function(){
    
    Restart();
    
}