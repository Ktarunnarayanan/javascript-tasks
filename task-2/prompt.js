let runAgain = true;

while(runAgain == true){
 let name= prompt('Enter Your Name');
 let maths = Number(prompt("Enter Your Mathematics Marks"));
 let physics=Number(prompt('Enter Your Physics Marks'));
let english =  Number(prompt("Enter Your English Marks")) ;

let avg= (maths+physics + english)/3;
  if(avg>= 90){
alert('Grade A');
} else if (avg >= 75) {
   alert("Grade B") ;
  }else if( avg >=50)
  {
 alert('Grade C');
}else{
    alert("Grade F");
}

   runAgain = confirm("Would you like to run again?");
}