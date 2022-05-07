# Version 1.2

-   Better log on connection
-   Now the data from each client, get broadcasted to all clients and enables the "Forward Server" functionality.

# Instructions

**If you want to use the server:**

-   Open command line in `/server/` directory
-   Run `npm i` command inside the folder
-   Run `npm start` command to start the server
-   Note that the server will start on `localhost:9000`

**If you want to use the client:**

-   Open command line in `/client/` directory
-   Run `npm i` command inside the folder
-   Run `npm start` command to start the client server
-   Note that the client will be accessible on `localhost:9001`

<hr/>

## Events:

-   `send-test`: you can send sample data and check if its
    received

-   `response-test`: you can send sample data and receive a simple response in the form of a string

-   `response-json-test`: you can send sample data and receive a simple response in the form of a json object

## Response json

This response can be found inside the `/response.json` file and you can edit it to receive custom response

<hr/>

## Socket.io Admin Panel

To be able to monitor you server using `admin.socket.io` do the following:

-   Goto [admin.socket.io/](https://admin.socket.io/)
-   In the connection popup write `http://localhost:9000/admin` in the `Server URL` field
-   Don't enter `Username` or `Password`
-   Click `connect`

Now you can monitor and manage all of your rooms and socket connections.
_NOTE: One of the socket connections is the `admin.socket.io`'s connection and needs to be connected in order to be able to monitor the server._

<hr/>

## Custom Configurations

Configurations can be made by changing the values inside `/configurations.json`.
Here are the list of configurations that you chan change:

-   You can change the `SERVER_PORT` to host the server on another port of you localhost

-   You can change the `CLIENT_ADDRESSES` to change which ports can connect to your server and communicate with it.

    For example:
    `"CLIENT_ADDRESSES": ["http://localhost:9002", "https://admin.socket.io"]` will only allow localhost:9001 and admin.socket.io to connect to you server

    _NOTE: In order to connect and communicate to the server, you need to list and add local device must be added to this list._

_NOTE: Restart the server after changing configurations to apply the changes._
