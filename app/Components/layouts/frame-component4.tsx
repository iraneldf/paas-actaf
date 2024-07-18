import type {NextPage} from "next";
import FrameComponent from "./frame-component";
import styles from "../styles/frame-component4.module.css";

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
                <img className={styles.frameChild} loading="lazy" alt="frutas.png" src="/images/vaca.png"></img>
            </div>
        </section>
    );
};

export default FrameComponent4;