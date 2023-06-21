import React from "react";
import {useState, useEffect, useRef} from "react";
import cn from "classnames"
import debounce from "lodash.debounce";
import styles from './Scroller.module.scss'

function Scroller() {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const containerRef = useRef(null);

    const checkForScrollPosition = () => {
        const {current} = containerRef;
        if (current) {
            const {scrollLeft, scrollWidth, clientWidth} = current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
        }
    };

    const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 200);

    const scrollContainerBy = (distance) =>
        containerRef.current?.scrollBy({left: distance, behavior: "smooth"});

    useEffect(() => {
        const {current} = containerRef;
        checkForScrollPosition();
        current?.addEventListener("scroll", debounceCheckForScrollPosition);

        return () => {
            current?.removeEventListener("scroll", debounceCheckForScrollPosition);
            debounceCheckForScrollPosition.cancel();
        };
    }, []);
    return (
        <div className={styles.scroller}>
            <div className={styles.scrollerContent}>
                <ul className={styles.list} ref={containerRef}>
                    <li className={cn(styles.item, styles.scroller1)}>
                        <div className={styles.item__text}>
                            Свежий завоз кроссовок<span className={styles.text_orange}>NIKE</span>
                        </div>
                    </li>
                    <li className={styles.item}>2</li>
                    <li className={styles.item}>3</li>
                    <li className={styles.item}>4</li>
                    <li className={styles.item}>5</li>
                    <li className={styles.item}>6</li>
                    <li className={styles.item}>7</li>
                </ul>
                <button
                    type="button"
                    disabled={!canScrollLeft}
                    onClick={() => scrollContainerBy(-1551)}
                    className={cn(styles.button, styles.buttonLeft)}
                >
                    ←
                </button>
                <button
                    type="button"
                    disabled={!canScrollRight}
                    onClick={() => scrollContainerBy(1551)}
                    className={cn(styles.button, styles.buttonRight)}
                >
                    →
                </button>
            </div>
        </div>
    )
}

export default Scroller;