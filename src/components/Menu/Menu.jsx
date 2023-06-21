import React from "react";
import styles from './Menu.module.scss'
import Catalog from "../Catalog/Catalog";
import {Link} from "react-router-dom";

import Man from '../../assets/images/mans.png'
import Wooman from '../../assets/images/wooman.png'
import ArrowIcon from '../../assets/icons/arrow.svg'


function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__card_container}>
                <div className={styles.menu__card}>
                    <img src={Man} alt="man-img" className={styles.menu__card_img}/>

                    <div className={styles.menu__card_next}>
                        <p className={styles.menu__card_desc}>
                            МУЖСКАЯ ОДЕЖДА И ОБУВЬ
                        </p>
                        <Link to='/catalog-items'>
                            <button className={styles.menu__card_btn}>
                                <img src={ArrowIcon} alt="ArrowIcon"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className={styles.menu__card}>
                    <img src={Wooman} alt="man-img" className={styles.menu__card_img}/>

                    <div className={styles.menu__card_next}>
                        <p className={styles.menu__card_desc}>
                            ЖЕНСКАЯ ОДЕЖДА И ОБУВЬ
                        </p>
                        <Link to='/catalog-items'>
                            <button className={styles.menu__card_btn}>
                                <img src={ArrowIcon} alt="ArrowIcon"/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.menu__unique}>
                <h1 className={styles.menu__unique_header}>УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ</h1>
                <Link to='/catalog-items'>
                    <button className={styles.menu__unique_btn}>
                        <img src={ArrowIcon} alt="Arrow-icon"/>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Menu;