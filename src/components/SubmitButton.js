import { useState } from 'react';
import "../styles/components/SubmitButton.css";

export default function SubmitButton(props) {
  const [loading, setLoading] = useState(false);

  return (
    <button 
      className="SubmitButton SubmitButton--incomplete" 
      onClick={() => {
        setLoading(true)
        props.onSubmit()
      }}
    >
      {!loading ? 
        <span className="SubmitButton-Text">{props.text}</span>
      :
        <div className="theme-spinner"></div>
      }
    </button>
  )
}