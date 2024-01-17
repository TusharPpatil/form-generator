// FormGenerator.js
import React, { useState } from 'react';
import FormField from './FormField';
import './form.css';

const FormGenerator = () => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const addFormField = (fieldType) => {
    setFormFields([...formFields, { id: Date.now(), type: fieldType }]);
  };

  const removeFormField = (fieldId) => {
    setFormFields(formFields.filter((field) => field.id !== fieldId));
    const updatedData = { ...formData };
    delete updatedData[fieldId];
    setFormData(updatedData);
  };

  const handleFormChange = (fieldId, value, label) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldId]: value,
      [`${fieldId}label`]: label,
    }));
  };

  const handleSubmit = () => {
    // You can handle the form data submission here
    console.log('Form Data:', formData);

    // Perform additional actions (if needed)
    setFormSubmitted(true);
  };

  return (
    <div>
      {formSubmitted ? (
        <div id="genfrom">
          <h4>Generated Form:</h4>
          {console.log(formFields)}
            {formFields.map((field) => (
              <div key={field.id}>
                <label>{formData[`${field.id}label`]}</label>
                {
                  field.type == "text" ? (
                    <input type="text"/>
                  ) : (
                    ""
                  )
                }
                {
                  field.type == "textarea" ? (
                    <textarea id="" name="" rows="4" cols="50">
                    </textarea>
                  ) : (
                    ""
                  )
                }
                {
                  field.type == "dropdown" ? (
                    <select>
                      <option value="">Select Option</option>
                      {formData[field.id].map((item) => (
                        <option key={item} value="{item}">{item}</option>
                      ))}
                    </select>
                  ) : (
                    ""
                  )
                }
                {
                  field.type == "radio" ? (
                    formData[field.id].map((item) => (
                      <div key={item}>
                        <input
                          type="radio"
                          name={`radio_${field.id}`}
                          value={item}
                        />
                        <span>{item}</span>
                      </div>
                    ))
                  ) : (
                    ""
                  )
                }
                {
                  field.type == "checkbox" ? (
                    formData[field.id].map((item) => (
                      <div key={item}>
                        <input
                          type="checkbox"
                          value={item}
                        />
                        <span>{item}</span>
                      </div>
                    ))
                  ) : (
                    ""
                  )
                }
              </div>
            ))}
                {/* <button>Submit</button> */}
        </div>
      ) : (
        <form>
          <button type="button" onClick={() => addFormField('text')}>
            Add Text Input
          </button>
          <button type="button" onClick={() => addFormField('textarea')}>
            Add Textarea
          </button>
          <button type="button" onClick={() => addFormField('dropdown')}>
            Add Dropdown
          </button>
          <button type="button" onClick={() => addFormField('radio')}>
            Add Radio
          </button>
          <button type="button" onClick={() => addFormField('checkbox')}>
            Add Checkbox
          </button>
          <br />
          {formFields.map((field) => (
            <FormField
              key={field.id}
              field={field}
              removeFormField={() => removeFormField(field.id)}
              onChange={handleFormChange}
            />
          ))}
          <button  className="genbtn" type="button" onClick={handleSubmit}>
            Generate Form
          </button>
        </form>
      )}
    </div>
  );
};

export default FormGenerator;