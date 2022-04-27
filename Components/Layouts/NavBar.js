import styles from '../../styles/Layout.module.css'
import Link from 'next/link'

function Header() {
  const link = () => {
    return (
      <div className={styles.links}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
      </div>
    )
  }

  return <div className={styles.header}>{link()}</div>
}

export default Header
