import CountUp from "react-countup";
function AboutCounter() {
	return (
    <div className="aximo-counter-wrap">
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={8} duration={4} redraw={true} enableScrollSpy />
          </span>
          +
        </h2>
        <p>Years of experience</p>
      </div>
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={150} duration={4} redraw={true} enableScrollSpy />
          </span>
          k+
        </h2>
        <p>Happy Subscribers</p>
      </div>
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={200} duration={3} redraw={true} enableScrollSpy />
          </span>
          %
        </h2>
        <p>Happy Subscribers rate</p>
      </div>
    </div>
  )
}

export default AboutCounter;
