import { Link, useNavigate } from 'react-router-dom';

import Layout from '../components/Layout';
import TextInput from '../components/TextInput'
import SubmitButton from "../components/SubmitButton";
import Spacer from "../components/Spacer";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  }

  return (
    <Layout>
      <span className="title">Logga in</span>

      <Spacer height="32" />

      <TextInput type="text" key="phone" name="Telefonnummer" />
      <TextInput type="password" key="password" name="Lösenord" />

      <SubmitButton text="Logga in" onSubmit={handleSubmit} />

      <footer>
        <span>eller </span>
        <Link to="/signup">Skapa konto</Link>
      </footer>
    </Layout>
  )
}