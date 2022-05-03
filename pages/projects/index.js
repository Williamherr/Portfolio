import { useState, useEffect } from 'react'
import Modal from '../../Components/Modal'

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://williamherr.vercel.app/api/projectDB', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const posts = await res.json()

  console.log("GetStatic")

  return {
    props: {
      posts,
    },
  }
}



function Projects(props) {
  const [projects, setProjects] = useState(props.posts)




  const loading = () => {

    // const animation = (
    //   <div style={{ textAlign: 'center', marginTop: 'auto' }}>
    //     <img
    //       style={{ maxWidth: '500px', transition: 'background-color 300ms' }}
    //       alt="Loading animation created by https://dribbble.com/liliantedone"
    //       src="https://cdn.dribbble.com/users/744913/screenshots/4094897/media/771a495231b798c0ccf7a59a19f31946.gif"
    //     ></img>
    //   </div>)
    


    if (projects != null && projects.length > 0) {
        const body = (
          <>
            {/* <SideNavBar /> */}
            <h1 style={{ textAlign: 'center' }}>All Projects</h1>
            <div className="gridLayout">
              {projects.map((projects) => {
                return (
                  <div
                    key={projects.id}
                    style={{ padding: '10px' }}
                  >
                    <Modal props={{
                      id: projects.id,
                      title: projects.title,
                      date: projects.date,
                      details: projects.details,
                      skills: projects.skills,
                      img: projects.img,
                      gallery: projects.gallery,
                      link: projects.link,
                      category: projects.category,
                    }} />

                  </div>
                )
              })}
            </div>
          </>
        )
        return body;
            }
  
    return <h1 style={{ textAlign: 'center' }}>No Projects Found</h1>
    // return animation

  }

  return <>{loading()}</>
}


export default Projects
