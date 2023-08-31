import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
    return (
        <>
            <div className="row p-2">
                <div className="col-2">
                    <Link to="/" className="nav-link"><Logo /></Link>
                </div>
                <div className="col">
                <nav class="navbar navbar-expand-lg bg-light p-3 fs-3">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contact" className="nav-link">Contact</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/faculties" className="nav-link">Faculties</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/api" className="nav-link">API DATA</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/calc" className="nav-link">Simple Calculator</Link>
                                </li>

                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            </div>
            

        </>
    );
}
export default Header;