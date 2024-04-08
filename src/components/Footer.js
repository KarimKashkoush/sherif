

const Footer = ({Pricing, HomeFooter}) => {
    return (
        <>
            {/* Footer */}
            <div className="footer bg-light">
                <div className="container">
                    <footer className="footer text-center text-lg-start text-muted">
                        {/* Section: Social media */}
                        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                            {/* Left */}
                            <div className="me-5 d-none d-lg-block">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            {/* Left */}
                            {/* Right */}
                            <div>
                                <a href="https://www.facebook.com/sherif.abdelbaeth.9" target="_blank" className="me-4 text-reset">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="https://www.instagram.com/sherif_abdelbaeth/" target="_blank" className="me-4 text-reset">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="http://wa.me/+201012123720" target="_blank" className=" text-reset">
                                    <i className="fab fa-whatsapp" />
                                </a>
                            </div>
                            {/* Right */}
                        </section>
                        {/* Section: Social media */}
                        {/* Section: Links  */}
                        <section className>
                            <div className="container text-center text-md-start mt-5">
                                {/* Grid row */}
                                <div className="row mt-3">
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* Content */}
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            <i className="fas fa-gem me-3" />D. Sherif Abdelbaeth
                                        </h6>
                                        <p>
                                            We are committed to helping people reach their fitness goals. We vary their programs and services to suit your needs, whether you're an experienced athlete.
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <a href="/#plan" className="text-reset">{Pricing}</a>
                                        </p>
                                        <p>
                                            <a href="http://wa.me/+201012123720" target="_blank" className="text-reset">Help</a>
                                        </p>
                                        <p>
                                            <a href="/" className="text-reset">{HomeFooter}</a>
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                        <p><i className="fas fa-home me-3" /> egypt</p>
                                        <p>
                                            <i className="fas fa-envelope me-3" />
                                            sherifbaeth1@gmail.com
                                        </p>
                                        <p><i className="fas fa-phone me-3" /> +201012123720</p>
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </div>
                        </section>
                        {/* Section: Links  */}
                        {/* Copyright */}
                        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                            © 2023 Copyright:
                            <a className="text-reset fw-bold" href="https://github.com/KarimKashkoush">Karim
                                Kashkoush
                            </a>
                        </div>
                        {/* Copyright */}
                    </footer>
                </div>
            </div>
            {/* Footer */}
        </>
    );
}

export default Footer;
