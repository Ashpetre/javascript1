// Simple chatbot with predefined answers 

function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")){
        output = "Hello nice to meet you!";
    }else if(input.includes("whats up") || input.includes("how are you?")){
        output = "Nothing"
    }
    return output; 
}

function displayUserMessage(message){
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div")
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message){
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div")
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage(){
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function(){
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}

document.getElementById("button").addEventListener("click", sendMessage);

document.getElementById("input").addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        sendMessage();
    }
}
)