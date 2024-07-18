import type {NextPage} from "next";
import {useMemo, type CSSProperties} from "react";
import styles from "../styles/frame-component.module.css";

export type FrameComponentType = {
    className?: string;
    /** Style props */
    propPadding?: CSSProperties["padding"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
                                                          className = "",
                                                          propPadding,
                                                      }) => {
    const frameDivStyle: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    return (
        <div
            className={[styles.frameWrapper, className].join(" ")}
            style={frameDivStyle}
        >
            <div className={styles.loremIpsumDolorSitAmetNaParent}>
                <div className={styles.loremIpsumDolorContainer}>
                    <p className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet. Nam natus praesentium qui Quis voluptas
                        ut eligendi repellendus in fugit similique. Et alias similique a
                        placeat excepturi At ullam commodi sit corrupti esse sed aliquam
                        obcaecati 33 beatae incidunt.
                    </p>
                    <p className={styles.etRerumAtque}>
                        Et rerum atque rem cupiditate rerum vel dolor nulla et porro
                        reprehenderit sed harum velit et cupiditate sint. Aut earum Quis et
                        minima debitis sit accusamus sint qui culpa consequuntur et
                        praesentium voluptatem et sint velit sed enim quia.
                    </p>
                </div>
                <div className={styles.frameContainer}>
                    <button className={styles.rectangleParent}>
                        <div className={styles.frameChild}/>
                        <div className={styles.leerMs}>Leer más</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FrameComponent;