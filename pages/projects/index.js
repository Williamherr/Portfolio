import { useState, useEffect } from 'react'
import Modal from '../../Components/Modal'

function Projects() {
  const [projects, setProjects] = useState([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)




  const GetData = async () => {
    const res = await fetch('http://localhost:3000/api/projectDB', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    setProjects(data)
  }



  useEffect(() => {
    return async () => {
      console.log("Use Effect")
      if (!isDataLoaded) {
        GetData()
        setIsDataLoaded(true)
      }
    }
  }, [])


  const loading = () => {
    console.log("Loading")
    console.log(isDataLoaded)
    
    const animation = (
      <div style={{ textAlign: 'center', marginTop: 'auto' }}>
        <img
          style={{ maxWidth: '500px', transition: 'background-color 300ms' }}
          alt="Loading animation created by https://dribbble.com/liliantedone"
          src="https://cdn.dribbble.com/users/744913/screenshots/4094897/media/771a495231b798c0ccf7a59a19f31946.gif"
        ></img>
      </div>
    )
   

    if (isDataLoaded) {
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

      return !isDataLoaded ? animation : body
    }

    return <h1 style={{ textAlign: 'center' }}>No Projects Found</h1>

  }

  return <>{loading()}</>
}

export default Projects
