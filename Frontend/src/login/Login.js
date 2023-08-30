import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'


export default function Login() {

  const navigate = useNavigate()

  function enter() {
    var inputValue = document.querySelector("#password").value
    
    if (inputValue != "123") {
      alert("Senha incorreta!")
    } else {
      localStorage.setItem("login_token", "123")
      navigate("/dashboard")
    }
  }

  function showPassword() {
    const inputPassword = document.getElementById("password")
    
    if (inputPassword.type == "password") {
      inputPassword.type = "text"
    } else {
      inputPassword.type = "password"
    }
  }

  useEffect(() => {
    if (localStorage.getItem("login_token"))
      localStorage.removeItem("login_token")

    var isFocus = false
    document.querySelector("#password").addEventListener("focus", () => {
      isFocus = true
    })
    document.querySelector("#password").addEventListener("blur", () => {
      isFocus = false
    })
    document.addEventListener("keydown", (event) => {
      if (isFocus && event.key == "Enter") 
        enter()
    })
  }, [])
  

  return (

    <div id="login-container">
      <div className="action">

        <h1>Seja bem vindo(a)!</h1>

        <img src="https://i.ibb.co/XDK9R9H/ilustracao-do-conceito-de-login-no-tablet-114360-7863-removebg-preview-2.png" alt="Área de Login"></img>
        <form className='form'>
          <label for="email">E-mail: </label>
          <input type="email" id="email" placeholder="Digite o seu e-mail de acesso" />

          <br></br>
          <label for="password">Senha: </label>
          <input type="password" id="password" placeholder="Digite sua senha de acesso" />

          <br></br><br></br>
          <button className='button' type="submit" onClick={() => enter()}>Entrar</button>
        </form>
      </div>
    </div>
  )
}