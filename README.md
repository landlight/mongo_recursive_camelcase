# mongo_recursive_camelcase
Library for Recursively Creating Camel Case Keys for MongoDB Data

This library intends to return MongoDB JSON Object as a response.
Strong point - this will work even for recursive keys
# How to use
const mrc = require('mongo_recursive_camelcase');

let returnObject = {
    "_id": "123",
    "first_name": "user1"
    "new_user": {
        "_id": "345",
        "first_name": "user2"
    }
}

mrc.mongoCamel(returnObject);

# Result 
{
    "id": "123",
    "firstName": "user1"
    "newUser": {
        "id": "345",
        "firstName": "user2"
    }
}