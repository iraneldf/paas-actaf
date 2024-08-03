import type {NextPage} from "next";
import FrameComponent2 from "./layouts/frame-component2";
import FrameComponent3 from "./layouts/frame-component3";
import FrameComponent4 from "./layouts/frame-component4";
import styles from "./styles/Root.module.css";

export type FrameComponent = {
    title?: string;
    text?: string;
};


const Root: NextPage<FrameComponent> = () => {
    return (
        <div className={styles.root}>

            <FrameComponent2/>

            <div className={styles.Encabezado}>
                <h1 className={styles.TextoEncabezado}>
                    El Programa incorporará los siguientes enfoques en su gestión de proyectos
                </h1>
            </div>

            <div className={styles.restoComponentes}>
                <FrameComponent3
                    rutaImagen="/images/Esquema.png"
                    title={'Enfoque de Cadenas de Valor Locales Sostenibles'}
                    text={'Con la participación de la totalidad de los actores de las diferentes cadenas, desde la finca hasta el municipio  Alcanzar la mayor soberanía alimentaria local posible desde un involucramiento consciente de todos, que optimice el empleo eficiente de las potencialidades locales, y acerque cada día más la oferta de alimentos a la demanda local en cantidad, diversidad, estabilidad, formatos y transformaciones.'}
                />
                <FrameComponent4
                    rutaImagen="/images/vaca.png"
                    title={'Gestión de riesgo'}
                    text={'PAAS aborda este enfoque con un alcance que va desde la resiliencia ante fenómenos climáticos extremos y los debidos al cambio climático, hasta la gestión de inocuidad, calidad y estrategia de comercialización, con el fin de satisfacer a los clientes y garantizar mayores ingresos a los productores.'}/>

                <FrameComponent3
                    rutaImagen="/images/Esquema2.png"
                    title={'Economía Circular Sostenible'}
                    text={'Concebida la ECS desde tres enfoques: Económico, social, ambiental y, como objetivos de las acciones: Reducir demanda de recursos externos, Optimizar el aprovechamiento de recursos disponibles, Minimizar pérdidas y deshechos y la consiguientemente contaminación ambiental.'}
                />
                <FrameComponent4
                    rutaImagen="/images/frutas.png"
                    title={'Equidad de Género y Generacional\n'}
                    text={'Sin considerar la equidad de género y generacional resulta imposible hablar de verdadera participación ni de sostenibilidad. Excluir o minimizar el papel de la mujer en la gestión de las CV implica mantener ajeno a alrededor de un 50% de la población, y no involucrar de manera comprometida a los jóvenes pone en total riesgo la sostenibilidad en el tiempo, de todo lo que se haga. Es por ello que es necesario promover la presencia de mujeres y jóvenes tanto en el diseño como en la implementación de las CV. No está de más recordar que también las personas de la tercera edad son importantes a la hora de decidir e implementar la sostenibilidad de cada componente de la cadena, pues son los portadores de experiencias vividas localmente y de la muy valiosa cultura agraria local.'}
                />
            </div>


        </div>
    );
};

export default Root;