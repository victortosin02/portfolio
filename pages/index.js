import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Victor Oladejo | Data Engineer</title>
        <meta name="description" content="I’m a professional responsible for designing, constructing, and maintaining big data 
          and infrastructure necessary for processing, storing, and analyzing large volumes of data." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
