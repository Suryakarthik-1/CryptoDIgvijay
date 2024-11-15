import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
	return (
    <div className="section aximo-section-padding">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>
                <span className="aximo-title-animation">
                  Stay ahead
                  <span className="aximo-title-icon">
                    <img src={Star2Img} alt="Star2Img" />
                  </span>
                </span>{' '}
                <br></br>of the crypto curve.
              </h2>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
              <p>
                We analyze market trends and your investment preferences to
                provide tailored strategies for maximizing your crypto returns.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <Video />
          </div>
          <div className="col-lg-4">
            <AboutCounter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
