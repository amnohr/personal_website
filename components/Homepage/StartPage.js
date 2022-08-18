// First page visitors see
import styles from "../../styles/Home.module.css";

// the first page/screen the visitor see
export default function StartPage(){
    return(
        <header>
            <section>
                <h1>Alf Magnus Nohr</h1>
                <h2>&lt;Developer&gt;</h2>
                <div>
                    <a href="https://github.com/amnohr" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/github.png" alt="github icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/alf-magnus-nohr-b34795151/" target="_blank" rel="noreferrer">
                        <img className={styles.icon} src="/images/icons/linkedin.png" alt="linked in icon"/>
                    </a>

                </div>
            </section>
        </header>
    )
}