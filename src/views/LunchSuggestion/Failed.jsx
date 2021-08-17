import React from 'react';
import Button from '../../components/Button';

const Failed = ({ goBack, error, debug = false }) => {

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="flex flex-col items-center justify-center">
            <div className="text-red-500 h-20 w-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-red-600 text-lg font-extrabold max-w-xs text-center">
              A problem occured
            </p>
            <p className="text-gray-600 max-w-xs text-center">
                Rest assured the issue has been reported to our technical team.
            </p>
            {debug ? <pre className="p-10 m-5 max-w-xl max-h-24 bg-gray-300 rounded overflow-auto">{JSON.stringify(error,null, 2)}</pre> : null}
          </div>
          <Button label="Try your submission again" onClick={goBack} />
       </div>
    )
}

export default Failed;


