import type { NextPage } from "next";
import styles from "../styles/miembro.module.css";
import Image from "next/image";

export type FrameComponentType = {
    className?: string;
    fotoperfil?: string;
    logowhatsap?: string;
    logofacebook?: string;
};

const MiembroEquipo: NextPage<FrameComponentType> = ({
    className = "",
    fotoperfil,
    logowhatsap,
    logofacebook,
}) => {
    return (

        <div className={[styles.tarjeta, className].join(" ")}>

            <div className={styles.logoContenedor}>

                <Image
                    width={100}
                    height={100}
                    className={styles.logoImagen}
                    loading="lazy"
                    alt=""
                    src={fotoperfil as string}
                />

            </div>

            <div className={styles.textoNombre}>David Gonzalez</div>

            <div className={styles.cargoContenedor}>
                <div className={styles.textoCargo}>Consultor</div>
            </div>

            <div className={styles.infoContenedor}>
                <Image
                    width={100}
                    height={100}
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src={logowhatsap as string}
                />
                <Image
                    width={100}
                    height={100}
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src={logofacebook as string}
                />
            </div>
        </div>
    );
};

export default MiembroEquipo;