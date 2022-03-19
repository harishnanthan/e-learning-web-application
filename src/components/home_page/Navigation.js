import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/_navigation.scss"
import SearchPage from "../search_page/SearchPage";
// import CoursePage from "../main/CouresPage";
// import TeachMeOn from "../main/TeachMeOn";

function Navigation(props) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState({search: ''});

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setSearchQuery(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchQuery)
        if('sendData' in props)
            props.sendData(`${searchQuery.search}`)
        navigate(`/search?query=${searchQuery.search}`);
    }

    return (
        <nav>
            <Logo />
            <form className="search-bar" onSubmit={handleSubmit}>
                <input 
                    type="search" 
                    name="search" 
                    placeholder="What do you want to learn?"
                    onChange={changeHandler}
                    value={searchQuery.value}
                 />
            </form>
            <div className="Nav-links">
                <ul>
                    <Link to="/coursepage" style={{ textDecoration: 'none' }}>
                        <li className="link"> courses </li>
                    </Link>
                    <Link to="/teachMeOn" style={{ textDecoration: 'none' }}>
                        <li className="link">Teach on here </li>
                    </Link>
                </ul>
            </div>
            <div className="action-buttons">
                <Link to="/join-for-free">
                    <JoinForFree />
                </Link>
                <Link to="/login">
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

