import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mansoura1 = () => {
    return (
        <>
            <Navbar Home="Home" HomeLocation="/"/>

            <div className="reset">
                <div className="container">
                    <div className="box">
                        <h2>duration</h2>
                        <p>20 session</p>
                    </div>
                    <div className="box">
                        <h2>Number of classes in week</h2>
                        <p>5</p>
                    </div>
                    <div className="box">
                        <h2>the price</h2>
                        <p>4500</p>
                    </div>
                    <div className="box">
                        <h2>Discount</h2>
                        <p>-1500 EGP</p>
                    </div>
                    <div className="box total">
                        <h2>total</h2>
                        <p>3000 EGP</p>
                    </div>
                    <button className="btn-pay" onclick="show_pup()">pay 3000EGP</button>
                    <div className="pup" id="pup">
                        <img src="images/vodafone.png" alt="" />
                        <h2>01012123720</h2>
                        <p>Send the payment receipt on <span><a href="http://wa.me/+201012123720" target="_blank">WhatsApp</a></span></p>
                        <button className="btn-close" onclick="hide_pup()" />
                    </div>
                    <p>Send the payment receipt on <span><a href="http://wa.me/+201012123720" target="_blank">WhatsApp</a></span></p>
                </div>
            </div>

            <Footer 
                HomeFooter="home" 
            />
        </>
    );
}

export default Mansoura1;
