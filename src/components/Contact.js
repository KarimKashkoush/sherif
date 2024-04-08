import './Contact.css'

const Contact = () => {
    return (
        <>
            {/* contact */}
            <div className="contact" id="contact">
                <div className="container">
                    <div className="heading-div">
                        <h2>contact</h2>
                    </div>
                    <div className="contact-contact">
                        <div className="form">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="http://wa.me/+201012123720" target="_blank">
                                            <i className="fa-brands fa-whatsapp" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/sherif.abdelbaeth.9" target="_blank">
                                            <i className="fa-brands fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/sherif_abdelbaeth/" target="_blank">
                                            <i className="fa-brands fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="form">
                                <form>
                                    <div className="name">
                                        <input type="text" placeholder="enter your name" />
                                    </div>
                                    <div className="number">
                                        <input type="tel" placeholder="enter your whatsapp number" />
                                    </div>
                                    <div className="email">
                                        <input type="email" placeholder="enter your email" />
                                    </div>
                                    <div className="message">
                                        <textarea placeholder="enter your message" defaultValue={""} />
                                    </div>
                                    <input type="submit" defaultValue="Send" />
                                </form>
                            </div>
                        </div>
                        <div className="image">
                            <img src="images/IMG_4755.JPG" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* contact */}
        </>
    );
}

export default Contact;
