# mongo_recursive_camelcase
Library for Recursively Creating Camel Case Keys for MongoDB Data

This library intends to return MongoDB JSON Object as a response.
Strong point - this will work even for recursive keys
# How to use
const mrc = require('mongo_recursive_camelcase');

```
let returnObject = {
    "_id": "123",
    "first_name": "user1"
    "new_user": {
        "_id": "345",
        "first_name": "user2"
    }
}
```

## For an object
mrc.mongoCamel(returnObject);

### Result
``` 
{
    "id": "123",
    "firstName": "user1"
    "newUser": {
        "id": "345",
        "firstName": "user2"
    }
}
```

## For a single string
let stringItem = "_id_hello"
mrc.mongoCamelString(stringItem);   

### Result
```
stringItem = idHello;
```

# Buy me a coffee
<a href="https://www.buymeacoffee.com/rJeZAvL" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>
 