import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {AuthProvider} from './contexts/auth-context'

const Root = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
