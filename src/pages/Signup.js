import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Layout from '../components/Layout';
import TextInput from '../components/TextInput'
import SubmitButton from "../components/SubmitButton";

export default function Signup() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  
  const handleSubmit = () => {
    navigate('/', { replace: true });
  }

  if (step === 0) {
    return (
      <Layout title="Skapa konto">

        <TextInput type="text" key="name" name="Namn" />
        <TextInput type="text" key="phone" name="Telefonnummer" />

        <SubmitButton text="Nästa" onSubmit={() => {setStep(step + 1)}} />
        
        <footer>
          <span>eller </span>
          <Link to="/login">Logga in</Link>
        </footer>
      </Layout>
    )
  }
  
  if (step === 1) {
    return (
      <Layout title="Berätta om hur du jobbar">
        <TextInput type="text" key="income" name="Hur mycket tjänar du i timmen?" />

        <SubmitButton text="Nästa" onSubmit={() => {setStep(step + 1)}} />
      </Layout>
    )
  }

  if (step === 2) {
    return (
      <Layout title="Skapa ett säkert lösenord">
        <TextInput type="password" key="password" name="Lösenord" />
        <TextInput type="password" key="re-password" name="Skriv in ditt lösenord igen" />

        <SubmitButton text="Skapa konto" onSubmit={handleSubmit} />
      </Layout>
    )
  }
}