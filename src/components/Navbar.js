import './Nav.css'

const Navbar = ({Home, About, Programing, Program, Contact, HomeLocation}) => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* Container wrapper */}
                <div className="container-fluid container">
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <a className="navbar-brand mt-3 mt-lg-0 text-capitalize fw-bolder" href="/">
                            d. sherif abdelbaeth
                        </a>
                        {/* Left links */}
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-capitalize fw-bold" href={HomeLocation}>{Home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize fw-bold" href="#about">{About}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize fw-bold" href="#programing">{Programing}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize fw-bold" href="#plan">{Program}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-capitalize fw-bold" href="#contact">{Contact}</a>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">
                        {/* Icon */}
                        <a className="text-reset me-3" href="http://wa.me/+201012123720" target="_blank">
                            <i className="fa-brands fa-whatsapp" />
                        </a>
                        <a className="text-reset me-3" href="https://www.facebook.com/sherif.abdelbaeth.9" target="_blank">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a className="text-reset me-3" href="https://www.instagram.com/sherif_abdelbaeth/" target="_blank">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </>
    );
}

export default Navbar;
