var tempFahr = prompt("What is the temperature?");
var eventType = prompt ("What is the event type?");
var result;


if (tempFahr < 54){
  var tempclothes = "a coat";
}
else if (tempFahr >= 54 && tempFahr <=70) {
  var tempclothes = "a jacket";
}
else if (tempFahr > 70){
  var tempclothes = "no jacket";
}

if (eventType === "casual"){
  var eventclothes = "something comfy";
}
else if (eventType === "semi-formal"){
  var eventclothes = "formal";
}
else if (eventType === "formal"){
  var eventclothes = "a suit";
}

result = "Since it is " +tempFahr+" degrees and you are going to a " +eventType+ " event, you should wear " +tempclothes+ " and " +eventclothes;
console.log(result);