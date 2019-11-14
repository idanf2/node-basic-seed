# Guesty Batch Service by Idan Felz

## Installation
Run `npm install` to install required modules

## Run
Run `npm start` to start the program.

## Guide
endpoint `POST /batch`

Request body should be in the following format:

``` json
{
    "endpointUrl": "https://guesty-user-service.herokuapp.com/user/{userId}", // endpoint url with optional path params ({userId})
    "method": "GET" | "POST" | "PUT" | "DELETE" // method to perform on the endpoint
    "payload": {
        "params": [
            {"userId": 1} // Array contains params to be filled in the url path
        ],
        "data": [
            { } // Array of objects contains the data to send
        ]
    }
}
```
