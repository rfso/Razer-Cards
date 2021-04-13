import './App.scss'
import Card from '../Card/Card'
import { ReactComponent as Logo } from '../../assets/imgs/razer-logo-svg-vector.svg'

const App = () => {
  return (
    <div className="wrapper">
      <Card />
      <Logo className="logo" />
      <Card />
    </div>
  )
}

export default App
