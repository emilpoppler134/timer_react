import Spacer from './Spacer'
import '../styles/App.css';

export default function Layout(props) {
  return (
    <div className="wrapper">
      <span className="title">{props.title}</span>
      <Spacer height="32" />
      { props.children }
    </div>
  )
}