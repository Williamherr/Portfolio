import styles from "../styles/Form.module.css";
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useEffect } from "react";
import GetFirebaseAPI from ".././pages/api/firebaseAPI"
import { getStorage, ref, uploadBytes } from "firebase/storage";
import links from "../Models/Links";

export default function NewForm() {
    const router = useRouter()
    const [title, setTitle] = useState("");
    const [date, setDate] = useState();
    const [details, setDetails] = useState("");
    const [skills, setSkills] = useState([]);
    const [img, setImage] = useState(null);
    const [gallery,setGallery] = useState([]);
    const [urls, setUrls] = useState("");
    const [icons, setIcon] = useState(null);
    const [category, setCategory] = useState("");

    const ValueHandler = (props) => {
        var target = props.target;
        switch (target.id) {
            case "title": {
                setTitle(target.value.trim());
                break;
            }
            case "date": {
                setDate(target.value);
                break;
            }
            case "details": {
                setDetails(target.value.trim());
                break;
            }
            case "skills": {
                var list = target.value.split(',');
                list = list.filter(e => e !== "").map(e => e.toUpperCase().trim());
                setSkills(list)
                break;
            }
            case "img": {
                var imageFiles = "images/" + target.files[0].name;
                setImage(imageFiles);
                break;
            }
            case "gallery": {
                var imageFiles = target.files;
                var images = [];
                for (var i = 0; i < imageFiles.length; i++) {
                    images.push("images/" + imageFiles[i].name)
                }

                setGallery(images);
                break;

            }
            case "icons": {
                setIcon("images/icons/" + target.value.replace(/^.*[\\\/]/, ''));
                break;
            }
            case "urls": {
                setUrls(target.value.trim());
                break;
            }
            case "category": {
                setCategory(target.value.trim());
                break;
            }
        }

    }

    var errors = <div id="error" className={styles.error}>Field is Required</div>;
    var noError = <div></div>
    const [titleError, setTitleError] = useState(noError);
    const [dateError, setDateError] = useState(noError);
    const [detailError, setDetailError] = useState(noError);
    const [skillError, setSkillError] = useState(noError);
    const [imageError, setImageError] = useState(noError);

    const SubmitHandler = () => {

        if (ValidHandler()) {
            console.log("Invalid")
            return;
        }
        

        SubmitComment();
    }

    const ValidHandler = () => {
        const titleMessage = (title == "" || title == null) ? errors : noError;
        setTitleError(titleMessage)
        const dateMessage = (date == "" || date == null) ? errors : noError;
        setDateError(dateMessage)
        const detailMessage = (details == "" || details == null) ? errors : noError;
        setDetailError(detailMessage)
        const skillMessage = (skills.length <= 0 || skills == null) ? errors : noError;
        setSkillError(skillMessage)
        const imgMessage = (img == "" || img == null) ? errors : noError;
        setImageError(imgMessage)
        if (titleMessage == errors || dateMessage == errors || detailMessage == errors || skillMessage == errors || imgMessage == errors) {
            return false;
        }
    }

    const UploadImage = () => {
        const firebaseAPI = GetFirebaseAPI();
        const storage = firebaseAPI.storage;

        // Main Img 
        if (img != null) {
            const imageFile = document.querySelector('#img').files[0];
            FireBaseImgHandler(storage, imageFile, img);
        }

        // Gallery Images
        for(var i = 0; i < gallery.length; i++) {
            const imageFile = document.querySelector('#gallery').files[i];
            console.log(imageFile)
            FireBaseImgHandler(storage, imageFile, gallery[i]);
        }
       

        // Icon
        if (icons != null) {
            const iconFile = document.querySelector('#icons').files[0];
            FireBaseImgHandler(storage, iconFile, icons);
        } 

       

    }

    const FireBaseImgHandler = (storage, img, reference) => {
        const storageRef = ref(storage, reference);
        uploadBytes(storageRef, img)
    }

    

    const SubmitComment = async () => {
        const link = new links(urls,icons,"image");
        
        console.log(gallery)
        const res = await fetch('/api/projectDB', {
            method: 'POST',
            body: JSON.stringify({ title, date, details, skills, img, gallery, category, link }),
            headers: {
                'Content-type': 'application/json'
            },
        });

        const data = await res.json();

        if (res.ok) {
            await UploadImage();
            router.push('/projects')
        }

       
    }





    useEffect(() => {

    }, [skills]);


    return (<>
        <div className={styles.container}>
            <h1>Post Project</h1>
            <div action="/projects" method="POST" className={styles.form}>
                <div className="form-group">
                    <h4>Title*</h4>
                    <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        onChange={(props) => {
                            ValueHandler(props);
                        }}

                    />
                    {titleError}
                </div>

                <div className="form-group">
                    <h4>Date*</h4>
                    <input
                        id="date"
                        type="date"
                        placeholder="Date"
                        onChange={(props) => {
                            ValueHandler(props);
                        }}

                    />
                    {dateError}
                </div>

                <div className="form-group">
                    <h4>Details*</h4>
                    <textarea
                        id="details"
                        placeholder="Details"
                        onChange={(props) => {
                            ValueHandler(props);
                        }}

                    />
                    {detailError}
                </div>

                <div className="form-group">
                    <h4>Skills*</h4>
                    <input
                        id="skills"
                        type="text"
                        placeholder="Skills"
                        onChange={(props) => {
                            ValueHandler(props);
                        }}

                    />
                    {skillError}
                    <p>*Note: Seperate each skill by a comma (Skill 1, Skill 2, Skill 3,...)</p>
                </div>

                <div className="form-group">
                    <h4>Category</h4>
                    <input
                        id="category"
                        type="text"
                        placeholder="Category"
                        onChange={(props) => {
                            ValueHandler(props);
                        }}

                    />
                </div>

                <div className="form-group">
                    <h4>Urls</h4>
                    <input
                        id="urls"
                        type="text"
                        placeholder="Urls"
                        onChange={(props) => {
                            ValueHandler(props);
                        }}

                    />
                </div>

                <div className="form-group">
                    <div>
                        <h4>Icons</h4>
                        <input
                            id="icons"
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(props) => {
                                ValueHandler(props);
                            }}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <h4>Upload An Image*</h4>
                        <input
                            id="img"
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(props) => {
                                ValueHandler(props);
                            }}
                        />
                        {imageError}

                    </div>
                </div>

                <div className="form-group">
                    <div>
                        <h4>Upload Gallery</h4>
                        <input
                            id="gallery"
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            multiple 
                            onChange={(props) => {
                                ValueHandler(props);
                            }}
                        />
                        <button className={styles.link} type="submit" onClick={SubmitHandler}>Submit</button>
                    </div>
                </div>

            </div>
        </div>

    </>)
}


