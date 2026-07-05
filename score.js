let studentForm = document.querySelector('#studentScore');


studentScore.addEventListener('submit', function(event){
    event.preventDefault();


    let name = 
    document.getElementById("name").value.trim();
    let matric = 
    document.getElementById("matric").value.trim();
    let course= 
    document.getElementById("course").value.trim();
    let score = 
    document.getElementById("score").value;

    let message = document.getElementById ('message');
    if (name === ""){
         message.innerHTML = "Please enter your name.";
         return;    
    }

    if (matric === ""){
        message.innerHTML = "Please enter your matric number."; 
        return;
    }
     else if (!isNaN(matric)){
            message.innerHTML = "Only input a number"
     
         return; 
         }  

    if (course === ""){
        message.innerHTML = "Please enter your course code.";  
         return;   
    }

    if (score === ""){
        message.innerHTML = "Please enter a valid score"; 
        return;
    }
    else if (isNaN(score)){
            message.innerHTML = "Only input a Number"  
         return;  
        }

    score = Number (score);
    if (score < 0 || score > 100 ) {
        message.innerHTML = "Score must be between 0 and 100.";
         return;  
        
    }

    message.innerHTML = "";

    let grade;
    if (score >= 70){
        grade = "A"
    } else if (score >= 60){
        grade = "B"
    } else if (score >= 50){
        grade = "C"
    } else if (score >= 45){
        grade = "D"
    } else {
        grade = "F"
    }


    let result = document.getElementById ('result');

  result.innerHTML = `
   <h2>Student Result</h2>
   <p>Name: ${name} </p>
   <p>Matric Number: ${matric} </p>
   <p>Course Code: ${course} </p>
   <p>Score: ${score} </p>
   <p>Grade: ${grade} </p> 
   `;


    });
