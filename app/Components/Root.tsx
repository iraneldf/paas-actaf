import type { NextPage } from "next";
import FrameComponent2 from "./layouts/frame-component2";
import FrameComponent3 from "./layouts/frame-component3";
import FrameComponent4 from "./layouts/frame-component4";
import FrameComponent5 from "./layouts/frame-component5";
import styles from "./styles/Root.module.css";

const Root: NextPage = () => {
    return (
        <div className={styles.root}>
            <FrameComponent2 />

            <FrameComponent3 rutaImagen="/images/Esquema.png"/>
            <FrameComponent4 rutaImagen="/images/vaca.png" />   
            <FrameComponent3 rutaImagen="/images/Esquema2.png" />
            <FrameComponent4 rutaImagen="/images/frutas.png" />

        </div>
    );
};

export default Root;