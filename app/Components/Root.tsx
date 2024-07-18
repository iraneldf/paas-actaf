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
            <FrameComponent3 />
            <FrameComponent4 />
            <FrameComponent5 />
            <section className={styles.loremIpsumParent}>
                <h1 className={styles.loremIpsum}>Lorem ipsum</h1>
                <div className={styles.obcaecati}>
                    <div className={styles.loremIpsumDolorContainer}>
                        <p className={styles.loremIpsumDolor}>
                            Lorem ipsum dolor sit amet. Sed omnis obcaecati ut impedit dolores
                            qui alias dignissimos. Ut consequuntur nesciunt aut recusandae
                            optio aut ipsum deleniti aut consequuntur amet ab laboriosam
                            minima 33 sunt atque hic voluptatem quibusdam. Sit esse suscipit
                            id inventore voluptatum id eligendi laboriosam. Est impedit
                            repellat aut excepturi quaerat ut alias deserunt.
                        </p>
                        <p
                            className={styles.estVoluptasPossimus}
                        >{`Est voluptas possimus 33 earum dolores quo repellat  autem qui adipisci itaque. Et animi delectus ut praesentium ratione est  rerum explicabo hic ullam nihil cum sint libero ut amet nihil id  excepturi porro. Ea voluptatibus accusantium est veritatis dicta hic  quidem alias qui debitis itaque cum omnis galisum ut soluta omnis. `}</p>
                        <p className={styles.estDoloreLaborum}>
                            Est dolore laborum eos facere unde eos commodi commodi non atque
                            quaerat? Hic impedit libero est incidunt autem aut nulla quis et
                            alias illo et atque quia est laboriosam deleniti. Et molestiae
                            sint eos nulla quia qui nobis sint et iusto possimus! A numquam
                            maxime ut tempore enim quo exercitationem dolorem!
                        </p>
                        <p className={styles.estDoloreLaborum1}>
                            Est dolore laborum eos facere unde eos commodi commodi non atque
                            quaerat? Hic impedit libero est incidunt autem aut nulla quis et
                            alias illo et atque quia est laboriosam deleniti. Et molestiae
                            sint eos nulla quia qui nobis sint et iusto possimus! A numquam
                            maxime ut tempore enim quo exercitationem dolorem!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Root;