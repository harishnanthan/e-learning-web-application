import React from "react";
import { Link } from "react-router-dom"
import "../../assets/styles/_navigation.scss"
// import CoursePage from "../main/CouresPage";
// import TeachMeOn from "../main/TeachMeOn";

function Navigation() {
    return (
        <nav>
            <Logo />
            <div className="search-bar">
                <input type="search" name="" id="" placeholder="What do you want to learn?" />
            </div>
            <div className="Nav-links">
                <ul>
                    <Link to="coursepage" style={{ textDecoration: 'none' }}>
                        <li className="link"> courses </li>
                    </Link>
                    <Link to="teachMeOn" style={{ textDecoration: 'none' }}>
                        <li className="link">Teach on here </li>
                    </Link>
                </ul>
            </div>
            <div className="action-buttons">
                <Link to="/joinforfree">
                    <JoinForFree />
                </Link>
                <Link to="login">
                    <button>Log In</button>
                </Link>
            </div>
        </nav>

    )
}

export default Navigation;

export const Logo = () => {
    return (
        <div className="logo">
            OnlineCourses
        </div>
    )
}

export const JoinForFree = () => {
    return (
        <div className="join-free">
            <button>Join for free</button>
        </div>
    )
}

// export const TeachMeOn = () => {
//     return (
//         <div className="teach-me-on">
//             <p>Teach me on</p>
//         </div>
//     )
// }

// export const CoursePage = () => {
//     return (
//         <div className="course-page">
//             <p>courses</p>
//         </div>
//     )
// }

