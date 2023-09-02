import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { useNavigate } from "react-router-dom";

export default function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
