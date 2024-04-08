import './Program.css'

const Program = () => {
    return (
        <>
            {/* Program */}
            <div className="program" id="programing">
                <div className="container">
                    <div className="heading">
                        <h2>the best programs we offers for you</h2>
                        <p>we offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness
                            levels. our aim to help your achieve specific goals &amp; maximizeresult.</p>
                    </div>
                    <div className="boxs">
                        <div className="box shadow-5 wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                            <i className="fa-solid fa-person-running" />
                            <h3>cardio</h3>
                            <p>Effectively burning fats and calories.</p>
                        </div>
                        <div className="box shadow-5 wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            <i className="fa-solid fa-dumbbell" />
                            <h3>body building</h3>
                            <p>for thoes looking to increases strenght build lean muscle, our strength &amp; muscle.</p>
                        </div>
                        <div className="box shadow-5 wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                            <i className="fa-solid fa-person-biking" />
                            <h3>weight loss</h3>
                            <p>our weight loss programs are designed to help you make sustainable lifestyle changes.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Program */}
        </>
    );
}

export default Program;
