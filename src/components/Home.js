import React from "react";

const Home = () => {
  return (
    <>
      <div className='ui block segment' id='homeSegment'>
        <h1 className='ui center aligned header'>Собери их всех!</h1>
      </div>
      <div className='ui inverted block segment'>
        <h3 className='ui inverted center aligned header' id='homeInfo'>
          Нажми на кнопку "Карточки", чтобы увидеть наш ассортимент.
          Не забудьте ознакомиться с содержанием каждой карточки!
        </h3>        
      </div>
    </>
  );
};

export default Home;
