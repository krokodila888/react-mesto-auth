import React, { useEffect, useState } from "react";
import { CurrentUserContext, currentUser } from '../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import { sign } from '../utils/Sign.js';
import {withRouter } from '../utils/withRouter.jsx';

function Register(props) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {registerUser} = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(password);
    console.log(email);
    const data = {password, email};
    console.log(data);
    registerUser(data);
  }
//  const {handleLogin, loginUser} = props;
  
/*  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
      Sign.signUp(this.state.password, this.state.email).then((res) => {
        if(res){
          this.setState({
            message: ''
          }, () => {
            this.props.history.push('/login');
          })
        } else {
          this.setState({
            message: 'Что-то пошло не так!'
          })
        }
      });
    }*/

  
  return (
    <>
      <div className='sign__background'>
        <div className="sign__container">
          <p className="sign__title">
            Регистрация
          </p>
          <form onSubmit={handleSubmit} className="sign__form-container">
            <input className="sign__input" id="emailRegister" name="email" type="email"  placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <span className="input-emailRegister-error popup__input-error"> </span>
            <input className="sign__input" id="passwordRegister" name="password" type="password"  placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
            <span className="input-emailLRegister-error popup__input-error"> </span>
            <button type="submit" onSubmit={handleSubmit} className="sign__button">Зарегистрироваться</button>
          </form>
          <div className="sign__link-container">
            <p className="sign__text">Уже зарегистрированы? </p>
            <Link to="/sign-in" className="sign__link sign__text"> Войти</Link>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Register;
