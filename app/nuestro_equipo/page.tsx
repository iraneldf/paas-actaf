import type { NextPage } from "next";
import styles from "./styles/index.module.css";
import MiembroEquipo from "@/app/nuestro_equipo/components/miembro";
import Image from "next/image";

const Main: NextPage = () => {
  return (
    <div className={styles.main}>

      <Image width={100} height={100} className={styles.fondo} alt="" src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/Fondo Nuestro equipo.png`} />

      <section className={styles.Titulo}>nuestro equipo</section>

      <section className={styles.contenedorTarjetas}>

        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`} 
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        <MiembroEquipo
          fotoperfil={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/nuestro equipo/perfil.png`}
          logowhatsap={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/whatsapp.png`}
          logofacebook={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ''}/images/facebook.png`}
        />
        

      </section>

    </div>
  );
};

export default Main;