import type { NextPage } from "next";
import styles from "../styles/miembro.module.css";
import Image from "next/image";

export type FrameComponentType = {
    className?: string;
    davidImageContainer?: string;
    rectangle33?: string;
    rectangle34?: string;
};

const MiembroEquipo: NextPage<FrameComponentType> = ({
    className = "",
    davidImageContainer,
    rectangle33,
    rectangle34,
}) => {
    return (
        <div className={[styles.rectangleParent, className].join(" ")}>
            <div className={styles.frameChild} />
            <div className={styles.davidInfoContainer}>
                <Image
                    width={100}
                    height={100}
                    className={styles.davidImageContainer}
                    loading="lazy"
                    alt=""
                    src={davidImageContainer as string}
                />
            </div>
            <div className={styles.davidGonzalez}>David Gonzalez</div>
            <div className={styles.consultorContainerDuplicate}>
                <div className={styles.consultor}>Consultor</div>
            </div>
            <div className={styles.loremContainerDuplicate}>
                <div className={styles.loremIpsumDolorSitAmetEuParent}>
                    <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet. Eum voluptatem illo aut illum alias sit
                        doloremque omnis. Ut cupiditate error qui doloribus magni et
                        corrupti reiciendis vel magnam Quis qui soluta.
                    </div>
                    <div className={styles.frameWrapper}>
                        <div className={styles.rectangleGroup}>
                            <Image
                                width={100}
                                height={100}
                                className={styles.frameItem}
                                loading="lazy"
                                alt=""
                                src={rectangle33 as string}
                            />
                            <Image
                                width={100}
                                height={100}
                                className={styles.frameInner}
                                loading="lazy"
                                alt=""
                                src={rectangle34 as string}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiembroEquipo;