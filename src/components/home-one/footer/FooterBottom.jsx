import LogoWhiteImg from "../../../assets/images/logo/logo-white.svg";
function FooterBottom() {
	return (
    <>
      <div className="col-lg-6">
        <div className="aximo-footer-logo">
          <a href="">
            <img src={LogoWhiteImg} alt="Logo" className="footerlogosizeset" />
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="aximo-copywright one">
          <p> &copy; Copyright 2024, All Rights Reserved by Crypto 200% Earning</p>
        </div>
      </div>
    </>
  )
}

export default FooterBottom;
