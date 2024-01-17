// FormField.js
import './form.css';
import React, { useState } from 'react';

const FormField = ({ field, removeFormField, onChange }) => {
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState([]);

  const handleLabelChange = (e) => setLabel(e.target.value);

  let updatedOptions = [...options];
  const handleOptionsChange = (e, index) => {
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
    onChange(field.id, updatedOptions, label);
  };

  const handleInputChange = (e) => {
    const newLabel = e.target.value;
    setLabel(newLabel);
    onChange(field.id, options, newLabel); // Pass the updated label here
  };

  return (
    <div>
      <h3>{field.type}</h3>
      <label>
        Label Name:
        <input type="text" onChange={handleInputChange} />
      </label>
      {(field.type === 'dropdown' || field.type === 'radio' || field.type === 'checkbox') && (
        <div>
          <label>Add list Options :</label>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionsChange(e, index)}
              />
            </div>
          ))}
          <button type="button" onClick={() => setOptions([...options, ''])}>
            Add radio Option
          </button>
        </div>
      )}
      <button className='removeBtn' onClick={() => removeFormField(field.id)}>Remove</button>
    </div>
  );
};

export default FormField;
