import React, { useState, useEffect } from "react";
import { getOrderHistory } from "../api";

const OrderHistory = ({ token }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const orderHistory = await getOrderHistory(token);
      setOrders(orderHistory);
    };
    fetchOrders();
  }, [token]);
  return (
    <div className='ui center aligned fluid container'>
      <h2 className='ui inverted horizontal divider header'>История заказов</h2>
      <div className='ui centered raised cards'>
        {orders.map((order) => {
          return (
            <div key={order.id} className='card'>
              <h3 className='ui inverted yellow top attached header'>
                Заказ #{order.id}
              </h3>
              <div className='content'>
                <div className='description'>
                  <div className='extra content'>
                    <div className='description'>
                      <h4 className='ui horizontal divider header'>
                        Заказано товаров
                      </h4>
                      <span className='ui list'>
                        {order.products.map((product) => {
                          return (
                            <li
                              className='ui large list'
                              key={product.product_id}>
                              <div className='ui teal label'>
                                {product.name}
                                <div className='detail'>{product.quantity}</div>
                              </div>
                            </li>
                          );
                        })}
                      </span>
                      <h4 className='ui horizontal divider header'>
                        Сумма заказа
                      </h4>
                    </div>
                  </div>
                  <div className='ui inverted green segment'>
                    <div className='ui fluid green label'>
                      {order.orderTotal}₽
                    </div>
                  </div>
                </div>
                <div className='description'>
                  <div className='ui padded vertical segment'>
                    <h4 className='ui horizontal divider header'>Доставлено:</h4>
                    <table className='ui definition table'>
                      <tbody>
                        <tr>
                          <td className='two wide column'>Адрес</td>
                          <td>{order.shippingAddress}</td>
                        </tr>
                        <tr>
                          <td className='two wide column'>Город</td>
                          <td>{order.city}</td>
                        </tr>
                        <tr>
                          <td className='two wide column'>Округ</td>
                          <td>{order.state}</td>
                        </tr>
                        <tr>
                          <td className='two wide column'>Почтовый индекс</td>
                          <td>{order.zip}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='ui bottom meta attached'>
                <span className='content'>Дата заказа: {new Date(order.date).toLocaleDateString('ru-RU', { year: "numeric", month: "long", weekday: "long", day: "numeric"})}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
