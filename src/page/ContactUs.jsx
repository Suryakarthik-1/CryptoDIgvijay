import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
function ContactUs() {
	const location = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		<>
			<BreadCrumb title="Contact Us" />
			<ContactForm />
			<ContactInfo />
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
