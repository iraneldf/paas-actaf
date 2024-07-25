import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "../styles/frame-component3.module.css";
import Image from "next/image";

export type FrameComponent3Type = {
    className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
    return (
        <section className={`${styles.rectangleParent} ${className}`}>
            <div className={styles.imageContainer}>
                <Image
                   width={100}
                   height={100}
                    className={styles.frameChild} 
                    loading="lazy" 
                    alt="" 
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/frutas.png`} />
            </div>
            <div className={styles.textContainer}>
                <FrameComponent />
            </div>
        </section>
    );
};

export default FrameComponent3;