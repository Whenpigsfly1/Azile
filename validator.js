const outputs = ['I\'m sorry', 'I understand', 'That\'s a tough situation', 'Tell me more', 'Go on', 'Why?'];

const endOutputs = ['Of course', 'Anytime', 'You\'re welcome'];

function pickAnOutput() {
	numb = Math.floor(Math.random()*6);
	response = outputs[numb];
	return response;
}

function pickAnEndOutput() {
	numb2 = Math.floor(Math.random()*3);
	response = endOutputs[numb2];
	return response;
}

function chooseOutput(input) {
	if (input == "hi" || input == "hello") {
    output = "Hello there. What would like to vent about?";}
	else if (input == "Thank you" || input == "thank you" || input == "thanks") {
    output = pickAnEndOutput();}
    else {output = pickAnOutput();}
    return output;
  
}
function addInputAndOutput(form) {
  var inputValue = form.inputbox.value;
  const newPara = document.createElement("p");
  newPara.innerHTML = "* " + inputValue;
  document.getElementById('text').appendChild(newPara);
  chooseOutput(inputValue);
  setTimeout(addOutput,1000,output);

}

function addOutput(outputValue) {
  const newPara2 = document.createElement("p");
  newPara2.innerHTML = "> " + outputValue;
  document.getElementById('text').appendChild(newPara2);
  outputs.push(outputValue);
  console.log(outputs);
}
