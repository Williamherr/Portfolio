import {
  collection,
  addDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import GetFirebaseAPI from "./firebaseAPI";
import ProjectModel from "../../Models/ProjectModel";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default async function handler(req, res) {
  const firebaseAPI = GetFirebaseAPI();
  const db = firebaseAPI.db;

 
  if (req.method == "POST") {
    const data = {
      title: req.body.title,
      date: req.body.date,
      details: req.body.details,
      skills: req.body.skills,
      img: req.body.img,
      gallery: req.body.gallery,
      category: req.body.category,
      link: req.body.link,
    };
    const docRef = await addDoc(collection(db, "Projects"), data).catch(() => {
      res.status(409).json({ message: "ERROR: 409 => Conflict with data" });
    });
    res.status(201).json(data);
  } else {
    var array = [];

    const reference = collection(db, "Projects");
    const q = query(reference, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
 
    if (querySnapshot.empty) {
      res.status(404).json({ message: "ERROR: 404 => No data found" });
    } else {
      console.log("HAndler")
      let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000);
      
        querySnapshot.forEach(async (doc) => {
         
          const data = new ProjectModel();
         
          MapToModel(data, doc);
          await GetImages(data);
          console.log(data)
          array.push(data);

        });
      });

      await promise;
      console.log("HAndler")
      res.status(201).json(array);
    }
  }
}

const GetImages = (data) => {
  const storage = getStorage();

  for (var i = 0; i < data.gallery.length; i++) {
    
    let imageRef = GetImageReference(storage, data.gallery[i]);
   
    getDownloadURL(imageRef).then((url) => {
      data.gallery = [...data.gallery,url];
      data.gallery.splice(0, 1);
    });
    

  }

  if (data.img != null) {
    let imageRef = GetImageReference(storage, data.img);
    getDownloadURL(imageRef).then((url) => {
      data.img = url;
    });
  }

  var icon = data.link.icon;
  if (icon != null) {
    let imageRef = GetImageReference(storage, icon);
    getDownloadURL(imageRef).then((url) => {
      data.link.icon = url;
    });
  }
};

const MapToModel = (data, doc) => {
  data.id = doc.id;
  Object.assign(data, doc.data());
};

const GetImageReference = (storage, img) => {
  const path = "gs://portfolio-14be7.appspot.com/" + img;
  return ref(storage, path);
};
