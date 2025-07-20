import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Online2 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const show_pup = () => setShowPopup(true);
    const hide_pup = () => setShowPopup(false);
    return (
        <>
            <Navbar Home="Home" HomeLocation="/" />

            <div className="reset">
                <div className="container">
                    <div className="box">
                        <h2>duration</h2>
                        <p>2 month</p>
                    </div>
                    <div className="box">
                        <h2>Number of classes in week</h2>
                        <p>5</p>
                    </div>
                    <div className="box">
                        <h2>the price</h2>
                        <p>1500 EGP</p>
                    </div>
                    <div className="box total">
                        <h2>total</h2>
                        <p>1500 EGP</p>
                    </div>
                    <button className="btn-pay" onClick={show_pup}>pay 1500EGP</button>
                    {showPopup && (
                        <div className="pup" id="pup">
                            <div className="image">
                                <img src="images/vodafone.png" alt="" />
                                <img src="data:image/png;base64,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" alt="img" />
                            </div>
                            <h2>01012123720</h2>
                            <p>Send the payment receipt on <span><a href="http://wa.me/+201012123720" target="_blank">WhatsApp</a></span></p>
                            <button className="btn-close" onClick={hide_pup}></button>
                        </div>
                    )}

                    <p>Send the payment receipt on <span><a href="http://wa.me/+201012123720" target="_blank">WhatsApp</a></span></p>
                </div>
            </div>

            <Footer
                HomeFooter="home"
            />
        </>
    );
}

export default Online2;
