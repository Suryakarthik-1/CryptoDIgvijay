import { Link } from 'react-router-dom'
import ArrowRightImg from '../../assets/images/icon/arrow-right.svg'
import QuestionImg from '../../assets/images/icon/question.svg'
import StarImg from '../../assets/images/v1/star2.png'
function PricingFaq() {
  return (
    <div className="section">
      <div className="container">
        <div className="aximo-pricing-border">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-default-content">
                {/* <h2>
                  <span className="aximo-title-animation">
                    Read our FAQ
                    <span className="aximo-title-icon">
                      <img src={StarImg} alt="star" />
                    </span>
                  </span>
                  for clarification
                </h2> */}
                {/* <p>
                  We understand that you considering our services, that's why
                  we’ve curated a collection of frequently asked questions.
                </p> */}
              </div>
              {/* <Link className="aximo-errors-btn contact-us" to="/contact-us">
                Contact us{' '}
                <span>
                  <img src={ArrowRightImg} alt="arrow right" />
                </span>
              </Link> */}
            </div>
            <div className="col-lg-0">
              <div className="aximo-accordion-normal-wrap m_top_responsive">
                {/* <div className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="question icon" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>Can I buy multiple plans?</h3>
                    <p>
                      Yes, you can try us for free for 30 days. Our friendly
                      team will work with you to get you up and running as soon
                      as possible.
                    </p>
                  </div>
                </div> */}
                {/* <div className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="question icon" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>What is the cancelation policy?</h3>
                    <p>
                      The cancellation policy refers to the rules and guidelines
                      established by a business regarding the cancellation of
                      services, products.
                    </p>
                  </div>
                </div> */}
                {/* <div className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="question icon" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3>How much does design work cost?</h3>
                    <p>
                      The cost of our design services varies depending on the
                      scope of the project. We provide customized quotes after
                      discussing requirements.
                    </p>
                  </div>
                </div> */}
                <div className="aximo-accordion-normal-item">
                  <div className="aximo-accordion-normal-icon">
                    <img src={QuestionImg} alt="question icon" />
                  </div>
                  <div className="aximo-accordion-normal-data">
                    <h3 className="premium-title">
                      How can I get{' '}
                      <span className="highlight-premium">
                        PREMIUM FOR FREE
                      </span>
                      ?
                    </h3>
                    <p className="premium-intro">
                      You can get{' '}
                      <span className="highlight-premium">
                        premium access for FREE
                      </span>{' '}
                      by following these steps:
                    </p>
                    <ol className="premium-steps">
                      <li>
                        Create an account in any of these exchanges:
                        <ul>
                          <li>
                            <a
                              href="https://www.weex.com/newbieActivities/?id=520&type=BEGINNER_TASK&vipCode=qyh3"
                              className="referral-link"
                            >
                              Weex Exchange
                            </a>{' '}
                            - Use referral code:{' '}
                            <code className="copyable">qyh3</code>
                          </li>
                          <li>
                            <a
                              href="https://www.mexc.co/en-GB/acquisition/custom-sign-up?shareCode=mexc-digvijay"
                              className="referral-link"
                            >
                              MEXC Exchange
                            </a>{' '}
                            - Use referral code:{' '}
                            <code className="copyable">mexc-digvijay</code>
                          </li>
                        </ul>
                      </li>
                      <li>Deposit $150 or more in your account</li>
                      <li>
                        Send your UID to{' '}
                        <a
                          href="http://t.me/Crypto200premium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Crypto200premium on Telegram
                        </a>
                      </li>
                    </ol>
                    <p>
                      <strong>Premium Benefits Include:</strong>
                      <ul>
                        <li>Future and spot calls</li>
                        <li>Real-time alerts</li>
                        <li>Exclusive information</li>
                        <li>Updates about crypto</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingFaq
