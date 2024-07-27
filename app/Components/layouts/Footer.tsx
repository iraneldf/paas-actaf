'use client';
import type {NextPage} from "next";
import styles from "../styles/footer.module.css";
import Image from "next/image";

export type FootherType = {
    className?: string;
};

const Footer: NextPage<FootherType> = ({className = ""}) => {
    return (
        <div className={[styles.foother, className].join(" ")}>
            <div className={styles.rectangleParent}>
                <div className={styles.frameChild}/>
                <div className={styles.frameItem}/>
                <div className={styles.frameInner} />
                <div className={styles.frameInner} />
                <div className={styles.frameInner} />
                <div className={styles.rectangleDiv}/>
            </div>
            <div className={styles.footherInner}>
                <div className={styles.ellipseParent}>
                    <Image
                        width={100}
                        height={100}
                        className={styles.ellipseIcon}
                        loading="lazy"
                        alt=""

                        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
                    />
                    <Image
                        width={100}
                        height={100}
                        className={styles.frameChild1}
                        loading="lazy"
                        alt=""
                        src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
                    />
                </div>
            </div>
        </div>
    );
};
export default Footer;