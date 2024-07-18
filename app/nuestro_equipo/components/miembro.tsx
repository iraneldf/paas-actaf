import type { NextPage } from "next";
import styles from "../styles/miembro.module.css";

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
                <img
                    className={styles.davidImageContainer}
                    loading="lazy"
                    alt=""
                    src={davidImageContainer}
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
                            <img
                                className={styles.frameItem}
                                loading="lazy"
                                alt=""
                                src={rectangle33}
                            />
                            <img
                                className={styles.frameInner}
                                loading="lazy"
                                alt=""
                                src={rectangle34}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiembroEquipo;