let count = 1;

while (count <= 100) {
    
  if (count % 3 === 0 && count % 5 === 0) {    
    console.log("fizz buzz");    
  } else if (count % 3 === 0) {    
    console.log("fizz");    
  } else if (count % 5 === 0){
    console.log("buzz");
  } else { console.log(count)};  
  count++;
};