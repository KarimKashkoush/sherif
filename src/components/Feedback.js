import './FeedBack.css'

const Feedback = () => {
    return (
        <>
            {/* feed back */}
            <div className="feed-back">
                <div className="container">
                    <div id="carouselExampleInterval" className="carousel slide" data-mdb-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-mdb-interval={10000}>
                                <div className="text">
                                    <div className="user">
                                        <i className="fa-regular fa-circle-user" />
                                        <h2>adm ahmed</h2>
                                    </div>
                                    <div className="text">
                                        <h3>Great coach</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-mdb-interval={2000}>
                                <div className="text">
                                    <div className="user">
                                        <i className="fa-regular fa-circle-user" />
                                        <h2>karim kashkoush</h2>
                                    </div>
                                    <h3>I got an unexpected change</h3>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="text">
                                    <div className="user">
                                        <i className="fa-regular fa-circle-user" />
                                        <h2>ahmed ali</h2>
                                    </div>
                                    <div className="text">
                                        <h3>It was a good opportunity to participate in this beautiful edifice</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* feed back */}
        </>
    );
}

export default Feedback;
