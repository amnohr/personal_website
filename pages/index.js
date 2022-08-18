import Head from 'next/head'
import styles from '../styles/Home.module.css'
import autoscroll from "../utils/autoscroll";

// enable autoscroll on this page
autoscroll("about");

// First page visitors see
function StartPage(){
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

// About me section
function About(){
    return (
        <section className={`${styles.grid_container} ${styles.about}`} id="about">
            <img src="/images/profile_picture.jpg" alt="tmp profile pic"/>
            <div>
                <p>Hi, I'm Alf Magnus!</p>
                <p>
                    A Norwegian citizen, who loves to code.
                    I'm currently in my final year of a bachelor's degree in&nbsp;
                    <a href="https://www.ntnu.no/studier/bprog" target="_blank" rel="noreferrer">Programming</a> at NTNU Gjøvik,
                    but I try to find some time for personal projects as well!
                </p>
            </div>

        </section>
    )
}

// Projects showcase
function Projects(){
    return(
        <section className={`${styles.grid_container} ${styles.projects}`}>
            <div className={styles.projects_header}>
                <h3>Projects</h3>
                <p>Some of my open source projects.</p>
            </div>

            <figure>
                <a href="https://github.com/amnohr/personal_website" target="_blank" rel="noreferrer">
                    <img src="/images/website_project.png" alt="link to github repo"/>
                </a>
                <p>This website. </p>
                <p>Even if it's not advanced. It have been set up with React and Next.js for future improvements and learning</p>

            </figure>

            <figure>
                <a href="https://github.com/amnohr" target="_blank" rel="noreferrer">
                    <img src="/images/profile_picture.jpg" alt="link to github repo"/>
                </a>
                <p>Coming soon!</p>

            </figure>

            <figure>
                <a href="https://github.com/amnohr" target="_blank" rel="noreferrer">
                    <img src="/images/profile_picture.jpg" alt="link to github repo"/>
                </a>
                <p>Coming soon!</p>

            </figure>


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
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            </Head>

            <StartPage />
            <About />
            <Projects />

        </main>

    )
}
