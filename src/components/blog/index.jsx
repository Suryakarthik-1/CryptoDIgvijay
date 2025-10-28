import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Tags from "./Tags";

import Blog1Img from "../../assets/images/blog/blog3.png";
import Blog2Img from "../../assets/images/blog/blog4.png";
import Blog3Img from "../../assets/images/blog/blog5.png";
import FadeInStagger from "../animation/FadeInStagger";
import BlogCard from "./BlogCard";
import Navigation from "./Navigation";

const blogData = [
	{
		id: crypto.randomUUID(),
		title: "Understanding Bitcoin: A Beginner's Guide to Cryptocurrency Investment",
		content:
			"Discover the fundamentals of Bitcoin and how to start your cryptocurrency investment journey. Learn about blockchain technology and secure trading practices.",
		category: "Crypto",
		date: "March 15, 2025",
		img: Blog1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "The Impact of DeFi on Traditional Banking Systems",
		content:
			"Exploring how decentralized finance is revolutionizing financial services and creating new opportunities in the cryptocurrency market.",
		category: "Crypto",
		date: "July 22, 2025",
		img: Blog2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "NFTs and Digital Asset Evolution in the Crypto Space",
		content:
			"An in-depth look at how NFTs are transforming digital ownership and creating new possibilities in the cryptocurrency ecosystem.",
		category: "Crypto",
		date: "October 5, 2025",
		img: Blog3Img,
	},
];
function Blog() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						{blogData.map((blog, index) => (
							<FadeInStagger className="single-post-item" key={blog.id} index={index}>
								<BlogCard key={blog.id} blog={blog} />
							</FadeInStagger>
						))}
						<Navigation />
					</div>
					<div className="col-lg-4">
						<div className="right-sidebar">
							<Search />
							<Categories />
							<RecentPosts />
							<Tags />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
