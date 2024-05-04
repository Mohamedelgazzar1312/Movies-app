import React,{Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'
const Movies= React.lazy(()=> import("../pages/Movies"));
const MoviesDetails= React.lazy(()=> import("../pages/MoviesDetails"));
const ContactUs= React.lazy(()=> import("../pages/ContactUs"));
const WatchList= React.lazy(()=> import("../pages/Favorites"));
const LoginForm = React.lazy(()=> import("../pages/login"));
const SignForm = React.lazy(()=> import("../pages/signIn"));
const NotFound= React.lazy(()=> import("../pages/NotFound"));


export default function RoutesConfig() {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
            <Route path="" element={<Movies />} />
            <Route path="movie-details/:id" element={<MoviesDetails />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="watchList" element={<WatchList />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signIn" element={<SignForm />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
    )
}
