

function startGame(){
 
    for(i=1;i<=9;i++){
      clearBox(i);
    }
   
   
    document.turn = "X";
    document.winner = null;
    
    setMessage(document.turn + " get's to start");
    
  }
  
  
  
  function setMessage(msg){
    document.querySelector(".wining").innerText=msg;
    }
  

  
  function nextMove(box){
    
    if (document.winner !== null){
      setMessage(document.turn + " WON");
    } else if (box.innerText === ''){
   
   box.innerText = document.turn;
   switchTurn();      
   
   } else {
     setMessage("Pic another box");  
     }
    
  }
  
  
  
  
  function switchTurn(){
    if (checkForWinner(document.turn)){
        setMessage(document.turn +" WON");
        document.winner= document.turn;
      } else if (document.turn == "X"){
      document.turn = "O";
      setMessage("It's " + document.turn + " 's turn");
      } else {
      document.turn = "X";
      setMessage("It's " + document.turn + " 's turn");
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
  
  
  
  function theBox(number){
    
    return document.getElementById("b"+ number).innerText;
 
  }
  
  function clearBox(num){
    document.getElementById("b"+ num).innerText="";
  }  
