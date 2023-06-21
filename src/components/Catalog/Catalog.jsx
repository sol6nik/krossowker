import React from "react";
import styles from './Catalog.module.scss'
import CategoriesList from "../CategoriesItem/CategoriesList";
import WearItem from "../WearItem/WearItem";

function Catalog() {


    return (
        <div className={styles.catalog}>
            <h1 style={{
                color: '#fff'
            }}>Каталог</h1>

            <div className={styles.catalog_container}>
                <CategoriesList/>
                <WearItem/>
            </div>
        </div>
    )
}

export default Catalog;