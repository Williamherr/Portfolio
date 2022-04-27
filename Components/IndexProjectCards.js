import styles from "../styles/IndexCards.module.css"
import UrlLinks from "./UrlLinks";

export default function IndexProjectCard({props}) {

    const SkillList = (list) => {
        var results = [];
        var i = 0;
        if (list == null) {
            return;
        }

  
        list.forEach(e => { 
            results.push(
                <div key={i} className={styles.item}>
                    <p>{e}</p>
                </div>
            )
            i++;
        });

        return results;
    }

   

    return (
        <>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <h1>{props.title}</h1>
                        <div className={styles.content}>
                            <img src={props.img} className={styles.img}></img>
                        </div>
                        <h3>{props.category}</h3>
                    </div>
                    <div className={styles.flipCardBack}>
                        <h1>Skills Required</h1>
                        <div className={styles.skillContainer}>
                            {SkillList(props.skills)}
                        </div>
                        <div className={styles.url}>
                            <UrlLinks props={props.link}/>
                        </div>
                       
                    </div>
                </div>
            </div>








        </>
    )
}