import Link from "./Links";

export default function ProjectModel(id,title,date,details,skills,img,gallery,category,link) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.details = details;
    this.skills = skills;
    this.img = img;
    this.gallery = gallery;
    this.category = category;
    this.link = link
    return (this);
}



