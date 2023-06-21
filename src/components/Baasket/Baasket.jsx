import React from "react";
import styles from './Baasket.module.scss';
import shoe1 from '../../assets/images/shoe1.jpg';
import minus from '../../assets/images/Минус.svg';
import plus from '../../assets/images/Плюс.svg';
import krest from '../../assets/images/Крест.svg';

function Baasket() {
  return (
    <div className={styles.baasket}>
      <h1 className={styles.baasket__name}>КОРЗИНА</h1>
			<p className={styles.baasket__desc}>2 товара</p>
			<div className={styles.baasket__main}>
				<div className={styles.baasket__photos}>
					<div className={styles.baasket__photos_card}>
						<img className={styles.baasket__photos_first} src={shoe1} alt="Кроссовки"></img>
						<div className={styles.baasket__photos_descr}>
							<h3 className={styles.baasket__photos_name}>Nike Air Max 90</h3>
							<p className={styles.baasket__photos_desc}>Цвет: чёрный</p>
							<p className={styles.baasket__photos_desc}>Размер: 42</p>
							<p className={styles.baasket__photos_desc}>Артикул:4QEU84DJ324</p>
							<div className={styles.baasket__photos_counter}>
								<button className={styles.baasket__photos_btn}><img src={minus}></img></button>
								<p className={styles.baasket__photos_count}>1</p>
								<button className={styles.baasket__photos_btn}><img src={plus}></img></button>
							</div>
						</div>
						<div className={styles.baasket__photos_prices}>
							<button className={styles.baasket__photos_btn}><img src={krest}></img></button>
							<p className={styles.baasket__photos_price}>11 500 ₽</p>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Baasket;