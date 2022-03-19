import Homepage from "./components/main/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JoinForFree from "./components/main/JoinForFree";
import CoursePage from "./components/main/CouresPage";
import TeachMeOn from "./components/main/TeachMeOn";
import Login from "./components/main/Login";
import './assets/styles/_global.scss';
import Page404 from "./components/main/Page404";
import SingleCourse from "./components/SingleCourse";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Homepage />} />
                <Route path='/joinforfree' exact element={<JoinForFree />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/teachMeOn' exact element={<TeachMeOn />} />
                <Route path='/coursepage' exact element={<CoursePage />} />
                <Route path='*' exact element={<Page404 />} />
                <Route path='/coursepage/singleCourse' exact element={<SingleCourse />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;