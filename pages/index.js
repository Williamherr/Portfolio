import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  console.log("Home")
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.img} >
          <img style={{maxHeight:"500px"}} src="https://firebasestorage.googleapis.com/v0/b/portfolio-14be7.appspot.com/o/images%2Fme%2FSelPicFiltered.gif?alt=media&token=37d745d2-0c36-45f2-a9e5-2cf977d4514f"></img>
        </div>
        <div className={styles.content}>
          <h1>Hi, I'm William</h1>
          <h1>A Software Engineer</h1>
          <p>Full Stack | Front End | Back End </p>
        </div>
      </div>
      <div className={styles.content} >
        <div className={styles.AddMarginTop}>
        <Link href={'/about'} >
          <a>
            <p>More Info About Myself</p>
          </a>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Home
