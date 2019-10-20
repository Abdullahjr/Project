function startGame(){

    for(i=1;i<=9;i++){
      startOver(i);
    }

   function startOver(num){
     document.getElementById("b" + num).textContent="";
   }  
   
    document.player = "X";
    document.winner = null;
    
    msg(document.player + " Let's start");
    
  }
    
  function msg(m){
    document.querySelector(".statement").textContent=m;
  }

  
  function nextMove(box){
    
    if (document.winner !== null){
      msg(document.player + " WON");
    } else if (box.textContent === ''){
   
   box.textContent = document.player;
   switchTurn();      
   
   } else {
     msg("already used");  
     }
    
  }

  
  function switchTurn(){
    if (checkForWinner(document.player)){
        msg(document.player +" WON");
        document.winner= document.player;
      } else if (document.player == "X"){
      document.player = "O";
      msg("It's " + "O" + " 's turn");
      } else {
      document.player = "X";
      msg("It's " + "X" + " 's turn");
        }
      
  }
  

  function checkForWinner(next){
    let result=false;
    
    if (check(1,2,3, next)||
        check(4,5,6, next)||
        check(7,8,9, next)||
        check(1,4,7, next)||
        check(2,5,8, next)||
        check(3,6,9, next)||
        check(1,5,9, next)||
        check(3,5,7, next)){
         
         result=true;
        }       
      return result;
    
    
  }
  
  
  function check(a, b, c, next){
    let result = false;
    if (theBox(a) == next && theBox(b) == next && theBox(c) == next){
         result = true;
        }
    
    return result;
  }
  
   
  function theBox(num){
    
    return document.getElementById("b"+num).textContent;
 
  }
  
  function CheckforTie()
  {
      for(let i=1;i<10;i++)
      {

        if(theBox(i)=="")
         return false;
      }
      return true;
  }