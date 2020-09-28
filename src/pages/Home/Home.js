import React from "react";
import {Card} from "../../components/Card/Card";
import yantar from "../../assets/img/yant.jpg"
import ort from "../../assets/img/ort.PNG"
import mark from "../../assets/img/market-ad.jpg"



export const Home = (props) => {

    return (
        <div className="container">
            <Card
                img={yantar}
                title="yantar-id.ru | Корпоративный сайт - портфолио"
                description="Разработка и администрирвоание"
                develop="HTML/CSS/JQuery/Bootstrap/Yii2"
                link="https://yantar-id.ru/"
            />
            <Card
                img={ort}
                title="realtorevent.ru | Лендинг с инфомрацией о форуме с приемом онлайн-платежей и онлайн регистрацией"
                description="Разработка прототипа, дизайн-макета, верстка, установка шаблона"
                develop="HTML/CSS/JQuery/Bootstrap/CMS WordPress"
                link="https://realtorevent.ru/"
            />
            <Card
                img={mark}
                title="marketing-adviser.ru | Личная страница маркетолога с формой заказа обратного звонка и обратнйо связи"
                description="Разработка прототипа, дизайн-макета, верстка, настройка PHP-mailer"
                develop="HTML/CSS/JQuery/Bootstrap/PHP-mailer"
                link="https://marketing-adviser.ru/"
            />
        </div>


    )
}