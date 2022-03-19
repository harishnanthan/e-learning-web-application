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

import AuthGuard from './components/guards/AuthGuard/AuthGuard';
import NoAuthGuard from './components/guards/NoAuthGuard/NoAuthGuard';

import ForgetPassword from "./components/main/ForgetPassword";
import ResetPassword from "./components/main/ResetPassword";
import Verification from "./components/main/Verification";

import toast, { Toaster } from 'react-hot-toast';
import SearchPage from "./components/search_page/SearchPage";

function App() {
    AuthInterceptor()

    const location = window.location.pathname;//useLocation();

    var url_string = window.location.href
    var url = new URL(url_string);
    var query = url.searchParams.get("query");
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Homepage />} />
                    <Route element={<NoAuthGuard fromRoute={location}/>}>
                        <Route path='/join-for-free' exact element={<JoinForFree />} />
                        <Route path='/login' exact element={<Login />} />
                        <Route path='/forget-password' exact element={<ForgetPassword />} />
                        <Route path='/reset-password/ur/:verificationKey' exact element={<ResetPassword />} />
                    </Route>
                    <Route element={<AuthGuard />}>
                    </Route>
                    <Route path='/is-legit/:verificationType/:verificationKey' exact element={<Verification />} />
                    <Route path='/teachMeOn' exact element={<TeachMeOn />} />
                    <Route path='/coursepage' exact element={<CoursePage />} />
                    <Route path='/search' element={<SearchPage props={{location: query}}/>} />
                    <Route path='*' exact element={<Page404 />} />
                    <Route path='/course/:courseId' exact element={<SingleCourse />}/>
                </Routes>
            </BrowserRouter>

            <Toaster 
                position="bottom-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    // Default options for specific types
                    success: {
                        duration: 5000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
    );
}
export default App;