// About me section
import styles from "../../styles/Home.module.css";

export default function About(){
    return (
        <section className={`${styles.grid_container} ${styles.about}`} id="about">
            <img src="/images/me.jpg" alt="picture of me"/>
            <div>
                <p>Hi, I'm Alf Magnus!</p>
                <p>
                    A Norwegian citizen, who loves to code.
                    I'm currently in my final year of a bachelor's degree in&nbsp;
                    <a href="https://www.ntnu.no/studier/bprog" target="_blank" rel="noreferrer">Programming</a> at NTNU Gjøvik,
                    but I try to find some time for personal projects as well!
                </p>
                <p>
                    Here are some of the technologies I've touched:<br/> C, C++, Java, Kotlin, Go, Python, Haskell,
                    Javascript, React, MySQL, Android development, ...
                </p>
            </div>

        </section>
    )
}