import Link from "next/link";
import styles from "../styles/SideNavBar.module.css"
import {useState} from 'react'



export default function SideNavBar() {



    return (<>
        <div className={styles.card}>
            <Link href={"/"}>
                <a>All Projects</a>
            </Link>
            <Link href={"/"}>
                <a>React</a>
            </Link>
            <Link href={"/"}>
                <a>Unity</a>
            </Link>
        </div>

    </>)
}