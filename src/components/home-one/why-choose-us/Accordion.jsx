import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";

function Accordion() {
	return (
    <FadeInStaggerTwo
      className="accordion aximo-accordion-wrap"
      id="aximo-accordion"
    >
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
          >
            01/ Crypto Insights
          </button>
        </h3>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            We begin by delving into the latest market trends, analyzing coin
            performance, and identifying key factors driving crypto prices.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
          >
            02/ Strategy Formulation
          </button>
        </h3>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            We leverage our market expertise and data-driven insights to
            formulate effective strategies tailored to your crypto investment
            goals and risk tolerance.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
          >
            03/ Taking Action
          </button>
        </h3>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Armed with well-defined strategies, we take decisive action in the
            crypto market, carefully executing trades and managing your
            portfolio to optimize returns.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  )
}

export default Accordion;
