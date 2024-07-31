import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
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
                        Enfoque de Cadenas de Valor Locales Sostenibles
                    </p>
                    <p className={styles.etRerumAtque}>
                        Con la participación de la totalidad de los actores
                        de las diferentes cadenas, desde la finca hasta el municipio
                        Alcanzar la mayor soberanía alimentaria local posible desde un involucramiento consciente de todos,
                        que optimice el empleo eficiente de las potencialidades locales, y acerque cada día más la oferta de
                        alimentos a la demanda local en cantidad, diversidad, estabilidad, formatos y transformaciones.
                    </p>
                </div>
                <div className={styles.frameContainer}>
                    <button className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.leerMs}>Leer más</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FrameComponent;