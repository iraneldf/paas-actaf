import type {NextPage} from "next";
import FrameComponent from "./frame-component";
import styles from "../styles/frame-component4.module.css";
import Image from "next/image";

export type FrameComponent4Type = {
    className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({className = ""}) => {
    return (
        <section className={[styles.rectangleParent, className].join(" ")}>
            <div className={styles.textContainer}>
                <FrameComponent/>
            </div>
            <div className={styles.imageContainer}>
                <Image 
                    width={100}
                    height={100}
                    className={styles.frameChild} 
                    loading="lazy"
                    alt="frutas.png"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/vaca.png`}/>
            </div>
        </section>
    );
};

export default FrameComponent4;