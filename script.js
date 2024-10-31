// for loop

let day = "monday";
console.log(day)
console.log(day)
console.log(day)
console.log(day)
console.log(day)
console.log(day)

// for loop
for(i=1;i<=10;i++){
    console.log("i+  today is on wednesday")
}
//  for loop for counting numbers
 function countsNumbers(){
    output= document.getElementById("countOutput");
    results="";
    for (i=1;i<10;i++){
        results += i ;
    }
    output.textContent= `counting: ${results}`;
 }
//  while loop
let j= 1;
while(j<10){
    console.log(j+"happy coding")
    j++;
}
 
// do while loop
let h =1;
do{
    console.log(h+ "today i went to church")
    h++;
}while(h<10)
     

    // for of loop
    let names =["antony","peter","john","mary"]
    for(let name of names){
        console.log(name+ "", "is my friend")
    }
    

    // for in loop
    let person = {name:"antony",age:22,nationality:"kenyan"};
    for(let prop in person){
        console.log(prop+":", "" +person[prop])
    }