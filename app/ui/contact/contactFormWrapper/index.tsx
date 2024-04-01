import React, {useState, useEffect, useRef} from 'react';

export default function ContactFormWrapper() {

  const renderInputField = (placeholderText: string, id: string, height?: string) => {
    return (
      <div className="flex w-full justify-center items-center mb-2 mt-2 ">
        <div className="flex flex-col w-1/2 ">
          <input
            type="text"
            placeholder={placeholderText}
            id={id}
            className={`flex w-full p-2 rounded-lg border border-transparent focus:border-t-red-500 focus:border-b-red-500 outline-none ${height ? `h-${height}` : ''}`} 
          />
        </div>
      </div>
    );
  }
  
  
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      
      <div className="flex flex-col w-1/2 justify-center items-center rounded-lg shadow-lg bg-gray-600">
        {/* Your Form Content */}
        <div className="flex flex-col items-center h-20 justify-center">
          <h1 className="flex text-white ">contact form</h1>
        </div>

        {/* Drop us a message */}
        <div className="flex w-1/2 justify-center  text-center">
          <div className="flex justify-center">
            <h1 className="text-white">
              Drop us a message, or checkout out our footer<br />
              for more contact information
            </h1>
          </div>
        </div>

        {/* Add input fields */}
        {renderInputField('Your name', 'nameInput')}
        {renderInputField('Your email address', 'emailInput')}
        {renderInputField('Contact number', 'contactNumberInput')}
        {renderInputField('Your message', 'messageInput', '20')}
      </div>
    </div>
  );
}
