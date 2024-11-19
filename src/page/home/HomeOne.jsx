import About from "../../components/home-one/about";
import AutoSlider from "../../components/home-one/auto-slider";
import Hero from "../../components/home-one/hero";
import Projects from "../../components/home-one/projects";
import Services from "../../components/home-one/services";
import Teams from "../../components/home-one/teams";
import Testimonial from "../../components/home-one/testimonial";
import WhyChooseUs from "../../components/home-one/why-choose-us";

// Teams images
import Team1Img from "../../assets/images/team/team1.png";
import Team2Img from "../../assets/images/team/team2.png";
import Team3Img from "../../assets/images/team/team3.png";
import Team4Img from "../../assets/images/team/team4.png";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: 'CRYPTO 200% EARNING',
    description:
      'Want to achieve 200% gains in crypto?  We provide the knowledge, strategies, and community support to make it happen – completely free! Subscribe now and start your crypto journey!',
    icon: 'icon-design-tools',
    link: 'https://www.youtube.com/@CRYPTO200EARNING',
  },
  {
    id: crypto.randomUUID(),
    title: 'Crypto Digvijay',
    description:
      'Crypto Digvijay is your trusted source for reliable crypto information. We provide in-depth analysis and expert commentary on the ever-changing world of digital currencies.',
    icon: 'icon-branding',
    link: 'https://www.youtube.com/@crypto_digvijay3343',
  },
  {
    id: crypto.randomUUID(),
    title: 'Crypto - Aajkal',
    description:
      'Your daily dose of crypto news and updates. Stay informed with Crypto - Aajkal.',
    icon: 'icon-web',
    link: 'https://www.youtube.com/@crypto-aajkal',
  },
  {
    id: crypto.randomUUID(),
    title: 'Telegram Channel',
    description:
      ' Dont miss out on the hottest crypto opportunities! 🔥 Join our exclusive Telegram channel for market-moving insights, winning strategies, and a community of like-minded traders.',
    icon: 'icon-design-thinking',
    link: 'https://t.me/Crypto200Earning',
  },
]


// Team data change


const teamsData = [
	{
		id: crypto.randomUUID(),
		name: "Surya Karthik",
		designation: "Creative Director",
		img: Team1Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Jack Taylor",
		designation: "Senior Designer",
		img: Team2Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Martine Joy",
		designation: "Project Manager",
		img: Team3Img,
	},
	{
		id: crypto.randomUUID(),
		name: "Adam Straw",
		designation: "Web Developer",
		img: Team4Img,
	},
];

function HomeOne() {
	return (
		<>
			<Hero />
			<Services services={servicesData} />
			<About />
			<WhyChooseUs />
			<Testimonial />
			<AutoSlider />
			<Teams teams={teamsData} />
		</>
	);
}

export default HomeOne;
