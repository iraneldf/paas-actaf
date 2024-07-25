import type {NextPage} from "next";
import styles from "../styles/frame-component1.module.css";
import Image from "next/image";

export type FrameComponent1Type = {
    className?: string;
    ellipse2?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({className = "", ellipse2,}) => {
    return (
        <div className={[styles.layout, className].join(" ")}>
            <div className={styles.layoutChild}/>
            <div className={styles.layoutInner}>

                <Image
                    width={100}
                    height={100}
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}${ellipse2}`}
                />
            </div>
            <div className={styles.ttulo}>Título</div>
            <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet. Est galisum rerum aut dicta dolorem ut
                officiis fugit ab magni ducimus aut tenet distinctio inventore.
            </div>
        </div>
    );
};

export default FrameComponent1;
