import { useState } from 'react'
import { loginUser } from '../api'
import { useNavigate } from 'react-router-dom'
const Login = ({setToken}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [returnFromLogin, setReturnFromLogin] = useState({})
    const navigate = useNavigate()
    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        const newUser = await loginUser(email, password)
        setPassword('');
        setEmail('');
        if(newUser.error){
            setReturnFromLogin(newUser)
            return
        }
        setToken(newUser.token)
        localStorage.setItem('pokemon-shopper-token', newUser.token)
        if (newUser.isAdmin) {
            navigate('/admin');
        } else {
            navigate('/')
        }
    }
    return (
        <div className="login">
            <form className='user-forms' onSubmit={handleLoginSubmit}>
                {returnFromLogin.error ? <p>{returnFromLogin.message}</p> : null}
                <label className='label'>Электронная почта:</label>
                <input className='text-input' type='text' value={email} onChange={event => setEmail(event.target.value)}></input>
                <label className='label'>Пароль:</label>
                <input className='text-input' type='password' value={password} onChange={event => setPassword(event.target.value)}></input>
                <button id='login-button' className="ui button" type='submit'>Войти</button>
            </form>
        </div>
    )
}
export default Login;