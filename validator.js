const outputs = ['I\'m sorry', 'I understand', 'That\'s a tough situation', 'Tell me more', 'Go on', 'Aww that\'s rough', 'I see', 'I appreciate you sharing this with me', 'I\'m sorry you have to deal with that', 'That must be tough', 'Sounds like a hard situation', 'Aww', 'Why do you think that is?', 'Keep going', 'Go on', 'Continue...', 'How come?', 'How does that make you feel?'];

const solOutputs = ['I see', 'How do you feel about this solution?', 'What are the pros and cons of doing so?', 'Do you think this will result in the best long-term outcomes?', 'How does this make you feel?', 'Cool',  ]

const endOutputs = ['Of course', 'Anytime', 'You\'re welcome'];

const decisionOutputs = ['What do you think you should do?', 'What do you feel is the best path?', 'Only you can decide that, my friend'];

const conundrumOutputs = ['I\'m not sure - what do you think?', 'I think that is quite a conundrum'];

function pickAnOutput() {
	numb = Math.floor(Math.random()*18);
	response = outputs[numb];
	return response;
}


function pickAnEndOutput() {
  numb3 = Math.floor(Math.random()*3);
  response = endOutputs[numb3];
  return response;
}

function pickADecisionOutput() {
  numb4 = Math.floor(Math.random()*3);
  response = decisionOutputs[numb4];
  return response;
}

function pickAConundrumOutput() {
  numb5 = Math.floor(Math.random()*5);
  response = conundrumOutputs[numb4];
  return response;
}

function chooseOutput(rawInput) {
  let input = rawInput.toLowerCase();
  if (input == "hi" || input == "hello") {
    output = "Hello there. What would like to vent about?";}
  else if (input == "what do you think" || input == "what do you think?") {
    output = pickAConundrumOutput();}
  else if (input.includes("what should i do") == true) {
    output = pickADecisionOutput();}
  else if (input.includes("do you want to hear") == true || input.includes("do you want to listen") == true || input.includes("do you really want to listen") == true || input.includes("do you really want to hear") == true) {
    output = "Yes, go on";
  }
  else if (input == "thank you" || input == "thanks" || input == "thanks for listening" || input == "thank you for listening" || input == "thank you so much") {
    output = pickAnEndOutput();}
  else  if (input == "do you want to be my friend" || input == "do you want to be my friend?" || input == "will you be my friend" || input == "will you be my friend?" || input == "would you be my friend?" || input == "would you be my friend") {
    output = "I am a robot. I have no understanding of friendship.";}
  else if (input.startsWith("what is your") == true) {
    output = "We're here to talk about you, not me";
  }
  else if (input.includes("?") == true) {
    output = "What are your thoughts on that?";
  }
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
