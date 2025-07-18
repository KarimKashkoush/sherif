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
                        <p>2000 EGP</p>
                    </div>
                    <div className="box">
                        <h2>Discount</h2>
                        <p>-800 EGP</p>
                    </div>
                    <div className="box total">
                        <h2>total</h2>
                        <p>1200 EGP</p>
                    </div>
                    <button className="btn-pay" onClick={show_pup}>pay 1200EGP</button>
                    {showPopup && (
                        <div className="pup" id="pup">
                            <img src="images/vodafone.png" alt="" />
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
