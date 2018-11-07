import * as React from 'react';

export default function LoginForm (props) {
  return (
    <div>
      <form onSubmit={props.handlesubmit}>
        <h1>Login form</h1>
        <ul>
          <li>Login:</li>
          <input type='text' name='login' key='text' onChange={props.inputchange}></input>
          <li>Password:</li>
          <input type='password' name='password' key='number' onChange={props.inputchange}></input>
          <button type='submit'>Submit</button>
        </ul>
      </form>
    </div>
    
  )
}