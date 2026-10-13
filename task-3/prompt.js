function askAgain(){
return confirm('Do you want to run the program again?');
  }
function printSquare(num) {
let square="";
  for(let i=1;i<=num;i++){
     let line = "";
  for ( let j=1 ; j<=num; j++ ) {
   line+="* ";
}
square += line+"\n";
  }
alert(square) ;
}
function printTriangle(rows){
   let triangle = '';
for(let i=1; i<=rows; i++)
{
let line="";
  for(let j = 1; j<=i;j++){
   line += "* ";
  }
   triangle+= line + '\n';
}
  alert (triangle);
}
function printMultiplicationTable(num) {
let table = "";
 for(let i=1;i<=10;i++) {
 table+=num+"X"+i+" = "+(num*i)+"\n";
}
   alert(table);
}
function sumUpTo(num){
let sum=0;
for (let i = 1; i <= num; i++){
sum += i;
}
 return sum;
}
function runProgram() {
  let num= Number(prompt("Enter A Number"));
if(num%2 == 0){
alert("Even");
 printSquare(num);
}else{
  alert('Odd');
printTriangle(num);
}
   printMultiplicationTable(num);
 alert("Sum From 1 to "+num+" = "+sumUpTo(num));
 let runAgain=askAgain();
while(runAgain) {
num = Number(prompt('Enter A Number'));
 if(num % 2==0) {
  alert("Even");
   printSquare(num);
  } else {
 alert("Odd");
  printTriangle(num);
  }
printMultiplicationTable(num);
 alert("Sum From 1 to "+num+" = "+sumUpTo(num));
runAgain = askAgain();
}
}
runProgram();