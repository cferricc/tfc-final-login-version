import { useState } from "react";
import './styles.css';
import axios from "axios";

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('http://ELB-TFC-1697556660.us-east-1.elb.amazonaws.com/session', {
      email: email,
      password: password
    }).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }

  return (
    <div className="login">
      <div className='login_info'>
      <h1>Sign In</h1>
      <form className='login_form'>
        <label htmlFor='email'>Email Address</label>
         <input className="email_button" 
         value={email} 
         onChange={handleEmail} 
        type="text" /> <br 
      />
      <label htmlFor='password'>Password</label>
       <input className="password_button" 
        value={password}
        onChange={handlePassword}
        type="password" /> <br 
      />
      </form>

      <button className='login_button' onClick={handleApi}>Log In</button>

      <div className='login_divider'>
        <hr /> <span>OR</span> <hr />
      </div>

      <button className= 'signup_button' onClick={' '}>Sign Up</button>
      </div>
    </div>
  );
}

export default App