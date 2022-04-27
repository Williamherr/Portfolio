import styles from '../styles/Cards.module.css'
import UrlLinks from "./UrlLinks";

export default function ProjectCards({ props }) {

  const maxFrameWidth = props.category == "Mobile Development" ? "200px" : "600px";


  const SkillListHandler = (skills) => {
    var list = []
    var i = 0
    if (skills == null) {
      return
    }
    skills.forEach((e) => {
      list.push(<li key={i}>{e}</li>)
      i++
    })
    return list
  }

  const GalleryHander = (imgs) => {
    console.log(props.id)
    var id = props.id.toString();
    var gallery = [];
    
    for (var i = 0; i < imgs.length; i++) {
      let slide = id + i;
      let next = "#" + id + (i + 1);
      let prev = "#" + id + (i - 1);

      if (i == 0) {
        prev = "#"+ id + (imgs.length - 1);
      }

      if (i == imgs.length - 1) {;
        next = "#" + id + "0";
      }

      let gall = SetGallery(slide, prev, next, imgs[i]);
      
      gallery.push(gall);
    }

    return (<>
      <div style={{ maxWidth: maxFrameWidth}}>
        <div className="carousel">
        {gallery}
      </div>
    </div>
      </>
    )
}


const SetGallery = (current, prev, next, img) => {
  return (

        <div key={current} id={current} className="carousel-item relative w-full">
          <img src={img} className="w-full" style={{ width: "100%" }}></img>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 top-1/2">
            <a href={prev} className="btn btn-circle" style={{ backgroundColor: "grey"}}>❮</a>
            <a href={next} className="btn btn-circle" style={{ backgroundColor: "grey" }}>❯</a>
          </div>
        </div>

        )
  }



        return (
        <>

          <div className={styles.card}>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.date}>{props.date}</p>
            <div className={styles.img}>
              {GalleryHander(props.gallery)}
            </div>
            <div className={styles.content}>
              <div className={styles.details}>
                <p>{props.details}</p>
                <p>Skills Required</p>
                <ul className={styles.skills}>
                  {SkillListHandler(props.skills)}
                </ul>

              </div>
            </div>
            <div className={styles.content}>{<UrlLinks props={props.link} />}</div>
          </div>


        </>
        )
}
