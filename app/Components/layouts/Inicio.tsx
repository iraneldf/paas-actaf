import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/index.module.css";

const FotoInicio: NextPage = () => {
    return (
        <div className={styles.fotoInicio}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.stevenWeeksDupfowqi6oiUnsplIcon}
                    alt="Agricultura Sostenible"
                    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/steven-weeks-DUPFowqI6oI-unsplash 1.png`}
                    layout="fill"
                    objectFit="cover"

                />
            </div>
            <section className={styles.haciaUnaAgricultura}>
                Por un mayor acceso a una alimentación sana, diversa y estable de la población de Cuba
            </section>
        </div>
    );
};

export default FotoInicio;
