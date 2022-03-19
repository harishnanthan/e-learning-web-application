import Homepage from "./components/main/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JoinForFree from "./components/main/JoinForFree";
import CoursePage from "./components/main/CouresPage";
import TeachMeOn from "./components/main/TeachMeOn";
import Login from "./components/main/Login";
import './assets/styles/_global.scss';
import Page404 from "./components/main/Page404";
import SingleCourse from "./components/SingleCourse";
import { AuthInterceptor } from './helpers/jwt.interceptor';
import ForgetPassword from "./components/main/ForgetPassword";
import ResetPassword from "./components/main/ResetPassword";
import Verification from "./components/main/Verification";

function App() {
    AuthInterceptor()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Homepage />} />
                <Route path='/join-for-free' exact element={<JoinForFree />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/forget-password' exact element={<ForgetPassword />} />
                <Route path='/reset-password/ur/:verificationKey' exact element={<ResetPassword />} />
                <Route path='/is-legit/:verificationType/:verificationKey' exact element={<Verification />} />
                <Route path='/teachMeOn' exact element={<TeachMeOn />} />
                <Route path='/coursepage' exact element={<CoursePage />} />
                <Route path='*' exact element={<Page404 />} />
                <Route path='/coursepage/singleCourse' exact element={<SingleCourse />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;