import { useState } from 'react';
import "../styles/components/TextInput.css";

export default function SubmitButton(props) {
  const [inputFocus, setInputFocus] = useState(false);

  return (
    <div className="TextInput">
      <span className={`TextInput-key ${!inputFocus ? "" : "TextInput-key-shrink"}`}>{props.name}</span>
      <input
        type={props.type} 
        className="TextInput-element" 
        onFocus={() => setInputFocus(true)} 
        onBlur={(event) => {
          if (event.target.value.trim() === "") { setInputFocus(false) }
        }}
      />
    </div>
  )
}