import './About.css'
const About = () => {
    return (
        <>
            {/* About */}
            <div className="about" id="about">
                <div className="container">
                    <div className="image">
                        <img src="images/IMG_4750.JPG" alt="" />
                    </div>
                    <div
                        className="text wow slideInLeft"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.3s"
                    >
                        <h2
                            className="wow slideInLeft"
                            data-wow-duration="1s"
                            data-wow-delay="0.3s"
                        >
                            get ready to reach your fitness goals.
                        </h2>
                        <p
                            className="wow slideInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="0.3s"
                        >
                            We are committed to helping people reach their fitness goals. We
                            vary their programs and services to suit your needs, whether
                            you're an experienced athlete.
                        </p>
                        <p
                            className="wow slideInLeft"
                            data-wow-duration="2s"
                            data-wow-delay="0.3s"
                        >
                            We believe that everyone should have access to the benefits of
                            exercise make it happen.
                        </p>
                    </div>
                </div>
            </div>
            {/* About */}
        </>
    );
};

export default About;
