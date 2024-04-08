import './Landing.css'

const Landing = () => {
    return (
        <>
            {/* Landing */}
            <div className="landing" id="home">
                <div className="container">
                    <div className="text">
                        <h2
                            className="wow slideInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="0.3s"
                        >
                            get healthy body with the perfect exercises.
                        </h2>
                        <p
                            className="wow slideInLeft"
                            data-wow-duration="1s"
                            data-wow-delay="0.3s"
                        >
                            we are always there to help you to make a healthy body and mind
                            through the power of fitness.
                        </p>
                        <a href="#plan">get started</a>
                        <ul className="iqon">
                            <li>
                                <a href="http://wa.me/+201012123720" target="_blank">
                                    <i className="fa-brands fa-whatsapp" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/sherif.abdelbaeth.9"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-facebook" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/sherif_abdelbaeth/"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Landing */}
        </>
    );
};

export default Landing;
