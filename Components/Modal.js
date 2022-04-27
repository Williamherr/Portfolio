import { useState } from 'react'
import ProjectCards from './ProjectCards'
import IndexCard from './IndexProjectCards'
import ProjectModel from '../Models/ProjectModel'


export default function Modal({ props }) {
    
  const data = new ProjectModel(
    props.id,
    props.title,
    props.date,
    props.details,
    props.skills,
    props.img,
    props.gallery,
    props.category,
    props.link,
  )


  return (
    <div>
      <label htmlFor={props.id}>
        <IndexCard
          props={{
            id: data.id,
            title: data.title,
            date: data.date,
            details: data.details,
            skills: data.skills,
            img: data.img,
            link: data.link,
            category: data.category,
          }}
        />
      </label>

      <input type="checkbox" id={props.id} className="modal-toggle" />
      <label htmlFor={props.id} className="modal cursor-pointer modalBackground">
        <div className="modal-box w-11/12 max-w-5xl removeOverflow">
          <ProjectCards
            props={{
              id: data.id,
              title: data.title,
              img: data.img,
              skills: data.skills,
              link: data.link,
              details: data.details,
              date: data.date,
              gallery: data.gallery,
              category: data.category,
            }}
          />
        </div>
      </label>
    </div>
  )
}
