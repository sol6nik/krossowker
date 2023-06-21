import React from "react";
import styles from './MainPage.module.scss'
import Scroller from "../Scroller/Scroller";

function MainPage() {
    return (
        <div className={styles.mainPage}>
            <Scroller/>
        </div>
    )
}

export default MainPage;