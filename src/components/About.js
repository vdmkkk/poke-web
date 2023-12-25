import React from "react";

const About = () => {
    return (
        <div className="container about">
            <p>PokeSearch - русская версия вебсайта для покупки и продажи карточек Покемонов.</p>
            <p>Мы осуществляем доставку коллекционных карточек по всему миру!</p>
            <p>The <b>Denver</b> office is located at </p>
            <img className="waving" src='https://www.pngmart.com/files/22/Mew-Pokemon-PNG-Transparent-Picture.png' />
            <div className="address">
                <p>Pewter City Museum, Office No. 487</p>
                <p>3937 West Colfax Ave</p>
                <p>Denver, CO</p>
                <p>80204</p>
            </div>
            <p>Звонок или сообщение в Whatsapp: (970) 250-1105</p>
            <p>The <b>Alexandria</b> office is located at </p>

            <div className="address">
                <p>Kanto Office Suite, Second Floor</p>
                <p>1635 Creswell Lane</p>
                <p>Opelousas, LA</p>
                <p>70570</p>
            </div>
            <p>Звонок или сообщение в Whatsapp: (318) 276-3133</p>
            <p>Собери их всех!</p>
        </div>
    )
}

export default About;