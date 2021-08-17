let Validator = require('validatorjs');

export const validate = (data, rules, callback = ()=>{})=>{
    let validation = new Validator(data, rules);
    if(validation.fails()){
        callback(validation.errors.errors);
        return false;
    }
    callback({});
    return true;
}

