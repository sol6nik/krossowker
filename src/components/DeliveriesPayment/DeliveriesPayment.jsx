import React from "react";
import styles from './DeliveriesPayment.module.scss'

function DeliveriesPayment() {
    return (
        <div className={styles.deliveriesPayment}>
            <h2 className={styles.deliveriesHeader}>ДОСТАВКА И ОПЛАТА</h2>
            <div className={styles.deliveriesCost}>
                <h3 className={styles.deliveriesCost__header}>
                    Стоимость доставки:
                    <ul className={styles.deliveriesCost__list}>
                        <li className={styles.deliveriesCost__item}><span className={styles.deliveriesCost__item_white}>В пределах МКАД (КАД) — 500₽</span>
                        </li>
                        <li className={styles.deliveriesCost__item}><span className={styles.deliveriesCost__item_white}>За МКАД — 1000₽</span>
                        </li>
                    </ul>
                </h3>
            </div>
            <div className={styles.paymentMethods}>
                <h3 className={styles.paymentMethods__header}>
                    Способы оплаты:
                </h3>
                <ul className={styles.paymentMethods__list}>
                    <li className={styles.paymentMethods__item}>
                        <h4 className={styles.item__header}>Оплата на сайте</h4>
                        <p className={styles.item__text}>Оплата на сайте и в мобильном приложении производится через
                            сервис ЮKassa.
                            Международный стандарт безопасности для платежей с карт PCI DSS.</p>
                    </li>
                    <li className={styles.paymentMethods__item}>
                        <h4 className={styles.item__header}>Оплата при получении</h4>
                        <p className={styles.item__text}>Оплатить заказ можно:</p>
                        <ul className={styles.item__list}>
                            <li className={styles.item__item}><span className={styles.item__item_white}>Наличными на кассе магазина или при получении у курьера</span>
                            </li>
                            <li className={styles.item__item}><span className={styles.item__item_white}>Банковской картой в магазине и в большинстве регионов при доставке курьером</span>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.paymentMethods__item}>
                        <h4 className={styles.item__header}>Подарочными сертификатами</h4>
                        <p className={styles.item__text}>Сертификатом и Электронным Подарочным Сертификатом можно
                            оплатить до 100% покупки:</p>
                        <ul className={styles.item__list}>
                            <li className={styles.item__item}><span className={styles.item__item_white}>В розничном магазине</span>
                            </li>
                            <li className={styles.item__item}><span className={styles.item__item_white}>При онлайн-оплате на сайте</span>
                            </li>
                        </ul>
                        <p className={styles.item__text}>Если номинал сертификата больше покупки, то сумма подарочного
                            сертификата будет списана полностью.</p>
                    </li>
                    <li className={styles.paymentMethods__item}>
                        <h4 className={styles.item__header}>Бонусными баллами</h4>
                        <p className={styles.item__text}>Бонусной картой Кроссовкера можно оплатить до 30% покупки</p>
                        <ul className={styles.item__list}>
                            <li className={styles.item__item}><span className={styles.item__item_white}>В розничном магазине
                                при онлайн-оплате на сайте
                                При оплате на сайте привяжи карту в личном кабинете и выбери онлайн-оплату</span></li>
                            <li className={styles.item__item}><span className={styles.item__item_white}>Бонусные баллы нельзя списать на товары со скидкой, на некоторые релизные модели и Jordan Retro.</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DeliveriesPayment;