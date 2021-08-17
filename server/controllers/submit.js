
let Validator = require('validatorjs');

const send = require('../services/mailgun')

const submit = async (request, response)=>{

    const rules = {
        suggestion: 'required|min:5|max:255'
    };

    let validation = new Validator(request.body, rules);
    if(validation.fails()){
        // Oportunity to log error to sentry or other error monitor.
        // Frontend validation obviously failed.
        response.status(400).json({ errors: validation?.errors?.errors });
    }else{
        const { LUNCH_EMAIL } = process.env;
        const email = {
            to: LUNCH_EMAIL,
            subject: "Team Lunch Suggestion",
            text: `Suggestion is: ${request.body.suggestion}`
        };
        send(email).then(()=>{
            response.sendStatus(200);
        }).catch((errors)=>{
            // Oportunity to log error to sentry or other error monitor.
            response.status(500).json({ errors });
        });
    }
}

module.exports = submit