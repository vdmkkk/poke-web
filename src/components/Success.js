import React from "react";

const Success = () => {
    return(
        <div style={{'textAlign': "center"}}>
            <h1 style={{'marginTop': 100, "fontSize": 32}}>Оплата прошла успешно!</h1>
            <h2 style={{'marginTop': 20, "fontSize": 20, 'fontWeight': '300'}}>Все детали заказа были отправлены вам на почту.</h2>
        </div>
    )
}

export default Success