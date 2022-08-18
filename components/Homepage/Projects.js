// Projects showcase
import styles from "../../styles/Home.module.css";

export default function Projects(){
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