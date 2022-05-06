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

## Custom Configurations

Configurations can be made by changing the values inside `/configurations.json`.
Here are the list of configurations that you chan change:

-   You can change the `SERVER_PORT` to host the server on another port of you localhost

-   You can change or add addresses to the `CLIENT_ADDRESSES` to change which ports can connect to your server and communicate with it

_NOTE: In order to connect and communicate to the server,ypu local device must be added to this list._
