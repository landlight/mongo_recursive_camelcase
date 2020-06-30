const _ = require("lodash")
const ObjectId = require('mongodb').ObjectID;

function camelCaseObject(o) {
    let newO, origKey, value;
    if (o instanceof Array) {
        newO = []
        for (origKey in o) {
            value = o[origKey];
            if (typeof value === 'object') {
                value = camelCaseObject(value);
            }
            newO.push(value);
        }
    } else {
        newO = {}
        for (origKey in o) {
            if (o.hasOwnProperty(origKey)) {
                newO[_.camelCase(origKey)] = o[origKey]
                if (typeof o[origKey] === 'object'){
                    camelCaseObject(o[origKey])
                } 
            } 
        }
    }
    return newO
}

const toCamel = (s) => {
    s = s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
    return s[0].toLowerCase() + s.substring(1);
};

const isArray = function (a) {
    return Array.isArray(a);
};

const isObject = function (o) {
    return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const mongoCamel = function (o) {
    if (isObject(o)) {
      if (!ObjectId.isValid(o) && !(o instanceof Date)){
        const n = {};
        Object.keys(o)
            .forEach((k) => {
            n[toCamel(k)] = mongoCamel
    (o[k]);
            });
        return n;
      }
    } else if (isArray(o)) {
      return o.map((i) => {
        return mongoCamel
(i);
      });
    }  
    return o;
};

module.exports = {
    mongoCamel
}