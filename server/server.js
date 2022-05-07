const configurations = require("./../configurations.json");
const { instrument } = require("@socket.io/admin-ui");
const response = require("./../response");

const io = require("socket.io")(configurations["SERVER_PORT"], {
	cors: {
		origin: configurations["CLIENT_ADDRESSES"],
	},
});

io.on("connection", (socket) => {
	console.log("-------------------------------------------");
	console.log("New device connected");
	console.table({
		ID: socket.id,
		IP: socket.handshake.address,
		Address: socket.handshake.headers.origin,
		Rooms: socket.rooms,
		Time: socket.handshake.time,
		// Device: socket.handshake.headers["user-agent"],
	});

	socket.on("send-test", (data) => {
		socket.broadcast.emit("send-test", data);

		logData(data);
	});

	socket.on("response-test", (data) => {
		logData(data);

		socket.broadcast.emit("response-test", data);

		socket.emit("response-test", `This is a sample response for "${data}"`);
		console.log("> Response has been sent");
	});

	socket.on("response-json-test", (data) => {
		logData(data);

		socket.broadcast.emit("response-json-test", data);

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
