import React from "react";

const Fail = () => {
    return(
        <div style={{'textAlign': "center"}}>
            <h1 style={{'marginTop': 100, "fontSize": 32}}>Произошла ошибка при попытке оплаты.</h1>
            <h2 style={{'marginTop': 20, "fontSize": 20, 'fontWeight': '300'}}>Попробуйте еще раз или <a href="/about">свяжитесь с нами</a>.</h2>
        </div>
    )
}

export default Fail;