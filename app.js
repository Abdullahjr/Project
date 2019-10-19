

function startGame(){
 
    for(i=1;i<=9;i++){
      startOver(i);
    }

   function startOver(num){
     document.getElementById("b"+ num).textContent="";
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
      msg("It's " + document.player + " 's turn");
      } else {
      document.player = "X";
      msg("It's " + document.player + " 's turn");
        }
      
  }
  

  function checkForWinner(move){
    let result=false;
    
    if (check(1,2,3, move)||
        check(4,5,6, move)||
        check(7,8,9, move)||
        check(1,4,7, move)||
        check(2,5,8, move)||
        check(3,6,9, move)||
        check(1,5,9, move)||
        check(3,5,7, move)){
         
         result=true;
        }       
      return result;
    
    
  }
  
  
  function check(a, b, c, move){
    let result = false;
    if (theBox(a) == move && theBox(b) == move && theBox(c) == move){
         result = true;
        }
    
    return result;
  }
  
   
  function theBox(num){
    
    return document.getElementById("b"+ num).textContent;
 
  }
  
  function CheckforTie()
  {
      for(var i=1;i<10;i++)
      {

        if(theBox(i)=="")
         return false;
      }
      return true;
  }