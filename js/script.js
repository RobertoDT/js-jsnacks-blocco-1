var primo = parseInt(prompt("Inserisci il primo numero"));
var secondo = parseInt(prompt("Inserisci il secondo numero"));

if(primo > secondo){
  console.log(primo);
} else if(secondo > primo){
  console.log(secondo);
} else{
  alert("I numeri sono uguali");
}
