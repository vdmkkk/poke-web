import {useState} from 'react'
import { registerUser } from '../api'
import { useNavigate } from 'react-router-dom'
const Register = ({setToken}) => {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [returnFromRegister, setReturnFromRegister] = useState({})
    const navigate = useNavigate()
    const handleRegisterSubmit = async (event) => {
        event.preventDefault()
        const newUser = await registerUser(username, firstName, lastName, registerPassword, registerEmail, phoneNumber)
        if(newUser.error){
            setReturnFromRegister(newUser)
            if(newUser.error === "EmailTaken"){
                setRegisterEmail('')
            } else if(newUser.error === "UsernameTaken"){
                setUsername('')
            }
            return
        }
        setUsername('');
        setFirstName('');
        setLastName('');
        setRegisterPassword('');
        setRegisterEmail('');
        setPhoneNumber('');
        setToken(newUser.token)
        localStorage.setItem('pokemon-shopper-token', newUser.token)
        navigate('/')
    }
    return (
        <div className="register">                     
            <form className='user-forms' onSubmit={handleRegisterSubmit}>
                {returnFromRegister.message ? <p>{returnFromRegister.message}</p> : null}
                <label className='label'>Юзернейм:</label>
                <input className='text-input' type='text' value={username} onChange={event => setUsername(event.target.value)}></input>
                <label className='label'>Имя:</label>
                <input className='text-input' type='text' value={firstName} onChange={event => setFirstName(event.target.value)}></input>
                <label className='label'>Фамилия:</label>
                <input className='text-input' type='text' value={lastName} onChange={event => setLastName(event.target.value)}></input>
                <label className='label'>Пароль:</label>
                <input className='text-input' type='password' required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Должен содержать как минимум одну цифру, одну заглавную букву, одну строчнуюи не менее 8 символов" 
                value={registerPassword} onChange={event => setRegisterPassword(event.target.value)}></input>
                <label className='label'>Электронная почта:</label>
                <input className='text-input' type='text' value={registerEmail} onChange={event => setRegisterEmail(event.target.value)}></input>
                <label className='label'>Номер телефона:</label>
                <input className='text-input' type='text' value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)}></input>
                <button id='register-button' className='ui button' type='submit'>Регистрация</button>
            </form>
        </div>
    )
}
export default Register;