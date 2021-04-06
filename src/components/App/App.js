import './App.scss'
import Card from '../Card/Card'
import { ReactComponent as Logo } from '../../assets/imgs/razer-logo-svg-vector.svg'
import React from 'react'

const App = () => {
  return (
    <>
      <Logo className="logo" />
      <Card />
    </>
  )
}

export default App
