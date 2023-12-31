import {PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { checkout } from '../api'
const CheckoutForm = ({token, cart}) => {
    // const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA"
    //     , "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI"
    //     , "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
    const [totalCost, setTotalCost] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('RU')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/cart')
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/cards',
            },
            redirect: 'if_required'
        })
        if(result.error){
            alert(result.error.message)
        }else{
            alert('Your payment was successful!')
            cart.totalCost = totalCost;
            await checkout({cart, address, state, city, zip, token})
            setAddress('')
            setCity('')
            setState('')
            setZip('')
            navigate('/orders')
        }
    }

    const handleOrder = () => {
        const shopId = 1
        const nonce = Date.now()
        
    }
      useEffect(() => {
        setTotalCost((cart.totalCost + 499.0))
      },[cart])
    return (
        <div id='checkout-page'>
        <div className='checkout-form'>
            <form id='shipping-form'>
                <h4>Контактная информация</h4>
                <label className=''>ФИО</label>
                <input className='text-input' type='text' placeholder='Иванов Иван Иванович'></input>
                <label>Адрес</label>
                <input className='text-input' type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Москва, Кремль'></input>
                <div id='shipping-city'>
                <div className='shipping-block'><label>Город</label>
                <input className='text-input' type='text' value={city} onChange={(e) => setCity(e.target.value)}></input></div>
                {/* <div className='shipping-block'><label>Округ</label>
                <select className='select-quality' value={state} onChange={(e) => setState(e.target.value)}>{states.map((state, index) => {
                    return <option key={index} value={state}>{state}</option>
                })}</select></div> */}
                <div className='shipping-block'><label>Почтовый индекс</label>
                <input className='text-input' type='text' value={zip} onChange={(e) => setZip(Number(e.target.value))}></input></div>
                </div>
            </form>
            <h4>Сводка по заказу</h4>
            <p>Товары: {cart.totalCost}₽</p>
            <p>Доставка: 499₽</p>
            {/* <p>Estimated Tax: ${(cart.totalCost * 0.08).toFixed(2)}</p> */}
            <p>Итого: {totalCost}₽</p>
        </div>
        <div className='checkout-form'>
        <form onSubmit={handleSubmit}>
            {/* <PaymentElement /> */}
            <button className='checkout-button' onClick={handleBack}>Назад</button><br></br>
            <button className='checkout-button' onClick={handleOrder}>Подтвердить</button> 
        </form>
        </div></div>
    )
}
export default CheckoutForm
