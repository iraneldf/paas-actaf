import type {NextPage} from "next";
import FrameComponent1 from "./frame-component1";
import styles from "../styles/frame-component5.module.css";

export type FrameComponent5Type = {
    className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({className = ""}) => {
    return (
        <div className={[styles.root, className].join(" ")}>
            <FrameComponent1 ellipse2=" /images/uvas.png"/>
            <FrameComponent1 ellipse2="/images/manzanas.png"/>
            <FrameComponent1 ellipse2="/images/rara.png"/>
        </div>
    )
        ;
};

export default FrameComponent5;