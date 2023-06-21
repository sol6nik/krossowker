import React from "react";
import styles from './WearItem.module.scss'
import { Link } from 'react-router-dom';
import { useGetWearQuery } from '../../redux/wearApi';


function WearItem() {
    const { data = {}, isLoading } = useGetWearQuery();

    if (isLoading) return <p style={{
        color: '#fff'
    }}>Loading...</p>

    return (
        <div className={styles.wearItem}>
            {data.map(item => (
                <div className={styles.wearItem_card} key={item.id}>
                    <div className={styles.wearItem_card__cont}>
                        <img src={item.img} alt={item.img} className={styles.wearItem_card_img} />
                    </div>
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <p className={styles.wearItem_title}>{item.name}</p>
                    </Link>
                    <p className={styles.wearItem_categ}>{item.category}</p>
                    <p className={styles.wearItem_price}>{item.price} ₽</p>
                </div>
            ))}
        </div>
    )
}

export default WearItem;