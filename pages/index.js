import Head from 'next/head'
import autoscroll from "../utils/autoscroll";
import StartPage from "../components/Homepage/StartPage";
import About from "../components/Homepage/About";
import Projects from "../components/Homepage/Projects";

// enable autoscroll on this page
autoscroll("about");

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
