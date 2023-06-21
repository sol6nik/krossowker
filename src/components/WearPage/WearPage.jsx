import React, { useEffect, useState } from "react";
import styles from './WearPage.module.scss'
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { productData } from '../../fetchData'

function WearPage() {

    const { id } = useParams();
    const [wear, setWear] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/wear/${id}`)
            .then(res => {
                setWear(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [id])

    if (!wear) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={styles.wearPage}>
            <div className={styles.wearPage__containerImg}>
                <img src={wear.img} alt="" className={styles.wearPage__containerImg_imgwear} />
            </div>
            <div className={styles.wearPage__description_container}>
                <p className={styles.wearPage_header}>{wear.brand}</p>
                <p className={styles.wearPage_category}>{wear.category}</p>
                <p className={styles.wearPage_price}>{wear.price}</p>
                <p className={styles.wearPage_wear_color}>Цвет: {wear.color}</p>

                <p className={styles.wearPage_characteristic}>
                    <span className={styles.wearPage_characteristic_orange}>O Товаре:</span>
                    <br />
                    {wear.descr}</p>

                <div className={styles.wearPage__btn_container}>
                    <button className={styles.wearPage_btnAdd}>Добавить в корзину</button>
                    <button className={styles.wearPage_btnBuy}>Купить в 1 клик</button>
                </div>
            </div>
        </div>
    )
}

export default WearPage;