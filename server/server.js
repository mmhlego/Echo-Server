const configurations = require("./../configurations.json");
const { instrument } = require("@socket.io/admin-ui");
const response = require("./../response");

const io = require("socket.io")(configurations["SERVER_PORT"], {
	cors: {
		origin: [configurations["CLIENT_ADDRESSES"], "https://admin.socket.io"],
	},
});

io.on("connection", (socket) => {
	console.log("New device connected: ", socket.id);

	socket.on("send-test", (data) => {
		logData(data);
	});

	socket.on("response-test", (data) => {
		logData(data);

		socket.emit("response-test", `This is a sample response for "${data}"`);
		console.log("> Response has been sent");
	});

	socket.on("response-json-test", (data) => {
		logData(data);

		socket.emit("response-json-test", response);
		console.log("> Response has been sent");
	});

	//================================================ all other events

	socket.onAny((event, ...args) => {
		if (
			event !== "response-json-test" &&
			event !== "response-test" &&
			event !== "send-test"
		) {
			logData(`invalid event "${event}" with data: "${args}"`);
		}
	});
});

instrument(io, { auth: false });

function logData(data) {
	console.log("\n\n");
	console.log("---------------- new set of data received ---------------");
	console.log(data);
	console.log("---------------------- end of data ----------------------");
}
