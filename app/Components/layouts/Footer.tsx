'use client';
import type {NextPage} from "next";
import styles from "../styles/footer.module.css";

export type FootherType = {
    className?: string;
};

const Footer: NextPage<FootherType> = ({className = ""}) => {
    return (
        <div className={[styles.foother, className].join(" ")}>
            <div className={styles.rectangleParent}>
                <div className={styles.frameChild}/>
                <div className={styles.frameItem}/>
                <div className={styles.frameInner}/>
                <div className={styles.rectangleDiv}/>
            </div>
            <div className={styles.footherInner}>
                <div className={styles.ellipseParent}>
                    <img
                        className={styles.ellipseIcon}
                        loading="lazy"
                        alt=""

                        src="/images/facebook.png"
                    />
                    <img
                        className={styles.frameChild1}
                        loading="lazy"
                        alt=""
                        src="/images/whatsapp.png"
                    />
                </div>
            </div>
        </div>
    );
};
export default Footer;