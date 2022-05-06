import { io } from "socket.io-client";

//========

const socket = io("http://localhost:9000");

socket.on("connect", () => {
	console.log(`Connected`);
});

socket.on("receive-message", (message) => {
	showMessage(`${message.sender} : ${message.text}`);
});

//================================================================================================= send-test

document.getElementById("send-test-btn").addEventListener("click", sendTest);
function sendTest() {
	socket.emit("send-test", document.getElementById("send-test-txt").value);
}

//================================================================================================= response-test

document
	.getElementById("response-test-btn")
	.addEventListener("click", responseTest);
function responseTest() {
	socket.emit(
		"response-test",
		document.getElementById("response-test-txt").value
	);
}

socket.on("response-test", (data) => {
	document.getElementById("response-test-rslt").value = data;
});

//================================================================================================= response-test-json

document
	.getElementById("response-test-json-btn")
	.addEventListener("click", responseTestJson);
function responseTestJson() {
	document.getElementById("response-test-json-rslt").value = "";
	socket.emit(
		"response-json-test",
		document.getElementById("response-test-json-txt").value
	);
}

socket.on("response-json-test", (data) => {
	let correctData = "";
	for (let row of JSON.stringify(data).split(",")) {
		correctData += row + "\n";
	}

	document.getElementById("response-test-json-rslt").value = correctData;
});
