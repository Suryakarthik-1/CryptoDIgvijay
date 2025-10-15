import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
function FooterContent() {
	return (
    <div className="aximo-default-content light position-relative">
      <h2>
        <span className="aximo-title-animation">
          Stay ahead
          <span className="aximo-title-icon">
            <img src={Star2Img} alt="Star2Img" />
          </span>
        </span>
        <br />
        of the crypto curve.
      </h2>
      <p>
        We analyze market trends and your investment preferences to provide
        tailored strategies for maximizing your crypto returns.
      </p>
      <div className="aximo-info-wrap">
        <div className="aximo-info">
          <ul>
            <li>Send us an email:</li>
            <li>
              <a href="mailto:hello@cryptodigvijay.com
">hello@cryptodigvijay.com
</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="aximo-social-icon social-large">
        <ul>
          <li>
            <a href="https://x.com/Digvijay_Crypto" target="_blank">
              <i className="icon-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/crypto_digvijayofficial/"
              target="_blank"
            >
              <i className="icon-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="aximo-hero-shape aximo-footer-shape">
        <img src={Shape1Img} alt="Shape1Img" />
      </div>
    </div>
  )
}

export default FooterContent;
