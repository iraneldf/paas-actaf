import type { NextPage } from "next";
import styles from "./styles/index.module.css";
import MiembroEquipo from "@/app/nuestro_equipo/components/miembro";
import Image from "next/image";

const Main: NextPage = () => {
    return (
        <div className={styles.main}>
            <Image width={100} height={100} className={styles.teamInfoIcon} alt="" src="/team-info@2x.png" />
            <section className={styles.nuestroEquipo}>nuestro equipo</section>
            <section className={styles.loremIpsumDolorContainer}>
        <span className={styles.loremIpsumDolorContainer1}>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet. Eum voluptatem illo aut illum alias sit
            doloremque omnis. Ut cupiditate error qui doloribus magni et
            corrupti reiciendis vel magnam Quis qui soluta nobis.
          </p>
          <p className={styles.aSintQuasi}>
            A sint quasi eum numquam laudantium ut voluptatem quibusdam ex
            voluptatem repellat ut velit eligendi nam recusandae quia eos quos
            deleniti. Eum molestiae commodi qui cupiditate mollitia aut sapiente
            vitae.
          </p>
          <p className={styles.etSequiProvident}>
            Et sequi provident ut pariatur quia et dolorem voluptas aut
            voluptatem repudiandae aut molestiae laudantium est libero commodi.
          </p>
        </span>
            </section>
            <section className={styles.frameParent}>
                <MiembroEquipo
                    davidImageContainer="/ellipse-6@2x.png"
                    rectangle33="/rectangle-33@2x.png"
                    rectangle34="/rectangle-34@2x.png"
                />
              {/*   <FrameComponent1
                    davidImage="/ellipse-7@2x.png"
                    rectangle36="/rectangle-36@2x.png"
                    rectangle37="/rectangle-37@2x.png"
                />
                <FrameComponent1
                    davidImage="/ellipse-8@2x.png"
                    rectangle36="/rectangle-39@2x.png"
                    rectangle37="/rectangle-40@2x.png"
                />
                <FrameComponent
                    davidImageContainer="/ellipse-9@2x.png"
                    rectangle33="/rectangle-42@2x.png"
                    rectangle34="/rectangle-43@2x.png"
                /> */}
            </section>

        </div>
    );
};

export default Main;