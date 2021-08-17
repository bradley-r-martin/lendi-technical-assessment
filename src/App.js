
import React, { useState } from 'react';

import Header from './components/Header';
import Form from './views/LunchSuggestion/SuggestionForm';
import Success from './views/LunchSuggestion/Success';
import Failed from './views/LunchSuggestion/Failed';

function App() {

  const  [ state, setState ] = useState({ status: 'unsubmitted' })

  return (
    <div className="container mx-auto pt-0 md:pt-10 p-5">
      <Header />
      <div className="h-3/5 md:h-3/6 p-10 max-w-xl mx-auto flex items-center justify-center">
        {state?.status === 'unsubmitted' ?  <Form onSuccess={()=>setState({status: 'success' })} onFailure={(error)=>setState({status: 'failed', error })} /> : null}
        {state?.status === 'success' ?  <Success goBack={()=>setState({status: 'unsubmitted' })} /> : null}
        {state?.status === 'failed' ?  <Failed error={state?.error} goBack={()=>setState({status: 'unsubmitted' })} /> : null}
      </div>
    </div>
  );
}

export default App;
