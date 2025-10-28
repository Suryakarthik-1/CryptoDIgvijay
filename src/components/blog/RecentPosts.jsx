import Blog1Img from "../../assets/images/blog/blog1.png";
import Blog2Img from "../../assets/images/blog/blog2.png";
import Blog3Img from "../../assets/images/blog/blog3.png";
import { Link } from "react-router-dom";

const recentPostData = [
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

function RecentPosts() {
	return (
		<div className="widget aximo_recent_posts_Widget">
			<h3 className="wp-block-heading">Recent Posts:</h3>

			{recentPostData.map((post) => (
				<div className="post-item" key={post.id}>
					<div className="post-thumb">
						<Link to="/single-blog">
							<img src={post.img} alt={post.title} />
						</Link>
					</div>
					<div className="post-text">
						<div className="post-date">{post.date}</div>
						<Link className="post-title" to="/single-blog">
							{post.title}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}

export default RecentPosts;
