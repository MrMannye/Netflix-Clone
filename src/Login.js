import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'
import './Login.css'
import FacebookIcon from '@material-ui/icons/Facebook';


function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to hoempage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to hoempage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__netflix' 
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                    alt="" 
                    />
            </Link>
            <div className="login__logo">
                <div className="login__container">
                    <h1>Sign in</h1>
                    <form>
                        <input placeholder='Email o numero telefonico' className='input__email' value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                        <input placeholder='Password' className='input__password' value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                        <button onClick={login} className='login__signInButton' type='submit'>Sign In</button>
                    </form>
                    <div className='login__remember'>
                        <div className='remember'>
                            <input type='checkbox' id='Recuerdame'></input>
                            <span>Recuerdame</span>
                        </div>
                        <div className='remember'>
                            <span>¿Necesitas ayuda?</span>
                        </div>
                    </div>
                    <div className='login__facebook'>
                        <FacebookIcon className='logo__facebook'></FacebookIcon>
                        <span>Iniciar sesión con Facebook</span>
                    </div>
                    <div className='login__firsttime'>
                        <span>¿Primera vez en netflix?</span>
                        <a href='#'>Suscribete ya</a>
                    </div>
                    <span id='protection'>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. Más info.</span>
                    <button onClick={register} className='login__registerButton'>Create your Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login;