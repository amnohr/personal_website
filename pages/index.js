import Head from 'next/head'
import styles from '../styles/Home.module.css'


// First page visitors see
function StartPage(){
    return(
        <header className={styles.grid_container}>
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

// About me section
function About(){
    return (
        <section className={`${styles.grid_container} ${styles.about}`} id="about">
            <img src="/images/profile_picture.jpg" alt="tmp profile pic"/>
            <div>
                <p>Hi, I'm Alf Magnus!</p>
                <p>
                    A Norwegian developer, passionate about code.
                    I'm currently at my final year of a bachelor's degree in&nbsp;
                    <a href="https://www.ntnu.no/studier/bprog" target="_blank" rel="noreferrer">Programming</a> at NTNU Gjøvik.
                </p>
            </div>

        </section>
    )
}


// Main index.js
export default function Home(){
    return(
        <main>
            <Head>
                <title>Alf Magnus Nohr</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <StartPage />
            <About />

        </main>

    )
}
