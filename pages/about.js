import SideNavBar from '../Components/SideNavBar'
import IndexCards from '../Components/IndexProjectCards'
import Modal from '../Components/Modal'
import styles from '../styles/Cards.module.css'

export default function About() {
  return (
    <>
      <div className="container mx-auto leading-8">

        <div class="flex flex-col flex-wrap justify-center items-center">
          <h1>About</h1>
          <div className={styles.img} style={{
            border: 'solid 1px grey',
            padding: "5px",
            borderRadius: '4px',
            maxWidth: '600px',
            minWidth: '200px',
          }}>
            <img class="max-w-[330px]" src="https://firebasestorage.googleapis.com/v0/b/portfolio-14be7.appspot.com/o/images%2Fme%2FSelfPicFixed.jpg?alt=media&token=39816a74-01c0-4805-b7ff-e7eb0b98b2d4"></img>
          </div>

          <div class="min-w-[200px]" style={{ margin: '5px' }}>
            <div
              className={styles.cardAbout}

            >
              <p>
                Hello! My name is William, and I'm a software engineer. I've
                always been interested in technology since I was a kid. While
                growing up, everyone always asks, "What do you want to be when
                you grow up?" As every kid did, I didn't think about it until I
                went into college. As I explored my options, I came across
                Computer Science and programming. In 2021, I graduated from the
                University of North Carolina at Charlotte (UNCC). Some of the
                languages I learned are:
              </p>
              <div style={{ width: '100%' }}>
                <ul style={{ columnWidth: '150px', alignItems: 'center' }}>
                  <li>Java</li>
                  <li>HTML</li>
                  <li>JS</li>
                  <li>CSS</li>
                  <li>SQL</li>
                  <li>Python</li>
                </ul>
              </div>
              <p>
                I learned more than just languages and being a programmer; I
                learned how to be a software engineer, which includes: scrum,
                agile, logic and data structure, software architecture,
                development cycles, and programming. Out of work, I enjoy
                playing games, exercising, watching anime, and game development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
