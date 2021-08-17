import React, { useState } from 'react';


import Form from '../../components/Form'
import Button from '../../components/Button'
import Input from '../../components/Input';

import { validate } from '../../services/data-validation'
import InlineError from '../../components/InlineError';

const axios = require('axios');

const submit = (data, onSuccess, onFailure)=>{
  axios({ url: '/', method: 'post', data }).then(onSuccess).catch(onFailure);     
}

const SuggestionForm = ({ onSuccess, onFailure }) => {

    const rules = {
        suggestion: 'required|min:5|max:255'
    };
    
    const [ errors, setErrors ] = useState({});
    const [ submitting, setSubmitting ] = useState(false);
    return (
        <Form beforeSubmit={(data)=>validate(data, rules, setErrors)} onSubmit={(data)=> { setSubmitting(true); submit(data, onSuccess, onFailure);} }>
        <div className="space-y-6 flex flex-col">
          <p className="text-gray-600 text-base md:text-lg font-extrabold max-w-xs text-center">What would you like to suggest for the next team lunch:</p>
          <div className="flex flex-col space-y-2">
            <Input name="suggestion" />
            <InlineError message={errors?.suggestion?.[0]} />
          </div>  
          <Button label="Submit suggestion" type="submit" loading={submitting} />
        </div>
      </Form>
    )
}

export default SuggestionForm;


