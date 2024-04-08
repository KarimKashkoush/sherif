import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Number from "../components/Number";
import About from "../components/About";
import Program from "../components/Program";
import Why from "../components/Why";
import Transformation from "../components/transformation";
import Plan from "../components/Plan";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Up from "../components/Up";
function Home() {
    return (
        <>
            <Up />

            <Navbar 
                Home="Home" 
                About="about us" 
                Programing="Programing" 
                Program="program" 
                Contact="contact" 
                HomeLocation="#home"
            />

            <Landing />

            <Number />

            <About />

            <Program />

            <Why />

            <Transformation />

            <Plan />

            <Feedback />

            <Contact />

            <Footer 
                Pricing="pricing"
            />
        </>
    );
}

export default Home;
