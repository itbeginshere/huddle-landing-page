import Head from 'next/head'
import FacebookSVG from '../components/svgs/FacebookSVG'
import InstagramSVG from '../components/svgs/InstgramSVG'
import LogoSVG from '../components/svgs/LogoSVg'
import ScreensSVG from '../components/svgs/ScreensSVG'
import TwitterSVG from '../components/svgs/TwitterSVG'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huddle</title>
        <meta name="description" content="Huddle website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <LogoSVG />
        </div>
        <div className={styles.content}>
          <div className={styles.illustrationContainer}>
            <ScreensSVG />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.textHeader}>Build The Community Your Fans Will Love</h1>
            <p className={styles.textBody}>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <button className={styles.registerButton}>
              Register
            </button>
          </div>
        </div>
        <div className={styles.socialContainer}>
          <FacebookSVG />
          <TwitterSVG />
          <InstagramSVG />
        </div>
      </main>
    </div>
  )
}
