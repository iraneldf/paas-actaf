import type { NextPage } from "next";
import ContactHeader from "./components/header";
import styles from "./styles/index.module.css";
import Image from "next/image";
import MapComponent from "./components/MapComponent";

const Root: NextPage = () => {
    return (
        <div className={styles.root}>
            <ContactHeader className={styles.header} />
            <div className={styles.container}>
                <div className={styles.formMapContainer}>
                    <div className={styles.form}>
                        <h2 className={styles.datosDeContacto}>datos de contacto</h2>
                        <div className={styles.formInputs}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="email" className={styles.label}>Correo:</label>
                                <input type="email" id="email" className={styles.input} />
                            </div>
                            <div className={styles.inputContainer}>
                                <label htmlFor="name" className={styles.label}>Nombre:</label>
                                <input type="text" id="name" className={styles.input} />
                            </div>
                        </div>
                        <div className={styles.messageForm}>
                            <label htmlFor="message" className={styles.label}>Mensaje:</label>
                            <textarea id="message" className={styles.textarea} rows={10} cols={30} />
                        </div>
                        <div className={styles.submitButton}>
                            <button className={styles.submitContainer}>
                                <div>enviar</div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.mapContainer}>
                        <Image
                            width={1000}
                            height={1000}
                            className={styles.buttonShapeIcon}
                            alt=""
                            src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/contactos/mapa.png`}
                        />
                      {/*   <MapComponent /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;