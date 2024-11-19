import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: 'Super channel!',
    description: 'This channel is great! It helps me understand crypto better',
    author: 'Shiva Shanker',
    img: Thumb1Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: 'Exceptional creativity and vision',
    description:
      "I used to be so confused about crypto. It seemed like everyone was making money except me! But then I found this channel. They explain things in a way that's easy to understand, even for beginners like me. Now I feel like I finally know what I'm doing, and I'm starting to see some real results.  Thank you so much!",
    author: 'Smith Align',
    designation: 'Businessman',
    img: Thumb2Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: 'Innovative and professional',
    description:
      "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
    author: 'Smith Align',
    designation: 'Milano Joe',
    img: Thumb3Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    title: 'Transformed our brand',
    description:
      'Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.',
    author: 'Danial Mark',
    designation: 'Marketing Director',
    img: Thumb4Img,
  },
]

function Testimonial() {
	return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            Subscriber are always
            <span className="aximo-title-animation">
              satisfied with us
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <FadeInStagger
              index={index}
              className="col-lg-6"
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
