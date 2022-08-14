import Head from 'next/head'
import styles from '../styles/Home.module.css'


// First page visitors see
function StartPage(){
    return(
        <header className={styles.grid_container}>
            <section>
                <h1>Alf Magnus Nohr</h1>
                <h4>&lt;Developer&gt;</h4>
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


// Main index.js
export default function Home(){
    return(
        <>
            <Head>
                <title>Alf Magnus Nohr</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StartPage />

        </>

    )
}
