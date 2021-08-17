import React from 'react';
import Button from '../../components/Button';

const Success = ({ goBack }) => {

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
          <div className="flex flex-col items-center justify-center">
            <div className="text-green-500 h-20 w-20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-green-600 text-lg font-extrabold max-w-xs text-center">
                Thank you for your suggestion.
            </p>
            <p className="text-gray-600 max-w-xs text-center">
              Your suggestion has been recorded.
            </p>
          </div>
          <Button label="Submit another suggestion" onClick={goBack} />
       </div>
    )
}

export default Success;


