import './Plan.css'

const Plan = () => {
    return (
        <>
            {/* plan */}
            <div className="plan" id="plan">
                <div className="container">
                    <div className="heading-div">
                        <h2>chose your plan</h2>
                    </div>
                    <div className="content">
                        {/* Tabs navs */}
                        <ul className="nav nav-tabs" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="ex2-tab-1" data-mdb-toggle="tab" href="#ex2-tabs-1" role="tab" aria-controls="ex2-tabs-1" aria-selected="true">online</a>
                            </li>
                            {/* <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex2-tab-2" data-mdb-toggle="tab" href="#ex2-tabs-2" role="tab" aria-controls="ex2-tabs-2" aria-selected="false">Mansoura</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex2-tab-3" data-mdb-toggle="tab" href="#ex2-tabs-3" role="tab" aria-controls="ex2-tabs-3" aria-selected="false">belqas</a>
                            </li> */}
                        </ul>
                        {/* Tabs navs */}
                        {/* Tabs content */}
                        <div className="tab-content" id="ex2-content">
                            <div className="tab-pane fade show active" id="ex2-tabs-1" role="tabpanel" aria-labelledby="ex2-tab-1">
                                <div className="boxs">
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        <h3>1 month</h3>
                                        <p>800 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Online1">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>whatsapp <span>7/24</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <h3>2 month</h3>
                                        <p>1500 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Online2">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>whatsapp <span>7/24</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="2.5s" data-wow-delay="0.3s">
                                        <h3>3 month</h3>
                                        <p class='discount'>2400 <span>egp</span></p>
                                        <p>1200 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Online3">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>whatsapp <span>7/24</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="2.5s" data-wow-delay="0.3s">
                                        <h3>6 month</h3>
                                        <p class='discount'>4800 <span>egp</span></p>
                                        <p>2400 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Online4">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>whatsapp <span>7/24</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex2-tabs-2" role="tabpanel" aria-labelledby="ex2-tab-2">
                                <div className="boxs">
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        <h3>20 session</h3>
                                        <p>4500 <span>egp</span></p>
                                        <p>3000 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Mansoura1">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>2one2 gym <span>7pm-12am</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <h3>40 session</h3>
                                        <p>7000 <span>egp</span></p>
                                        <p>5000 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Mansoura2">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>2one2 gym <span>7pm-12am</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex2-tabs-3" role="tabpanel" aria-labelledby="ex2-tab-3">
                                <div className="boxs">
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                        <h3>1 month</h3>
                                        <p>1500 <span>egp</span></p>
                                        <p>1000 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Belqas1">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>turbino gym <span>4pm-6pm</span></li>
                                                <li>forma gym <span>8am-9am</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                                        <h3>2 month</h3>
                                        <p>3000 <span>egp</span></p>
                                        <p>1700 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Belqas2">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>turbino gym <span>4pm-6pm</span></li>
                                                <li>forma gym <span>8am-9am</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box shadow-5 wow slideInDown" data-wow-duration="2.5s" data-wow-delay="0.3s">
                                        <h3>3 month</h3>
                                        <p>4500 <span>egp</span></p>
                                        <p>2500 <span>egp</span></p>
                                        <ul>
                                            <li>5 classes per week</li>
                                            <li>healthy diet</li>
                                            <li>Customized diet program every 14 days</li>
                                            <li>Improve flexibility</li>
                                            <li>Reach the best form</li>
                                            <li>Consider any injury</li>
                                        </ul>
                                        <a href="Belqas3">buy now</a>
                                        <div className="location">
                                            <h4>I'm here</h4>
                                            <ul>
                                                <li>turbino gym <span>4pm-6pm</span></li>
                                                <li>forma gym <span>8am-9am</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Tabs content */}
                    </div>
                </div>
            </div>
            {/* plan */}
        </>
    );
}

export default Plan;
