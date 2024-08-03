import type {NextPage} from "next";
import {useMemo, type CSSProperties} from "react";
import styles from "../styles/frame-component.module.css";

export type FrameComponentType = {
    className?: string;
    title?: string;
    text?: string;
    /** Style props */
    propPadding?: CSSProperties["padding"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
                                                          className = "",
                                                          title,
                                                          text,
                                                          propPadding,
                                                      }) => {
    const frameDivStyle: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    return (

        <div
            className={[styles.contenedor, className].join(" ")}
            style={frameDivStyle}
        >
            <h4 className={styles.titulo}>
                {title}
            </h4>
            <p className={styles.texto}>
                {text}
            </p>

        </div>
    );
};

export default FrameComponent;