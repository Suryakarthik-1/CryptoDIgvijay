import Team5Img from "../../../assets/images/team/team5.png";
import Team6Img from "../../../assets/images/team/team6.png";
import Team7Img from "../../../assets/images/team/team7.png";

const commentsData = [
	{
		id: crypto.randomUUID(),
		comment:
			"Great beginner's guide — the clear explanation of private keys vs. public addresses helped me understand wallet security. Would love a follow-up on hardware wallets.",
		author: "Ricky Smith",
		date: "July 23, 2025",
		img: Team5Img,
		children: false,
	},
	{
		id: crypto.randomUUID(),
		comment:
			"This overview of Bitcoin basics is really useful. The sections on volatility and long-term strategies make it clear why dollar-cost averaging can be a sensible approach for new investors.",
		author: "Aisha Khan",
		date: "August 05, 2025",
		img: Team6Img,
		children: true,
	},
	{
		id: crypto.randomUUID(),
		comment:
			"Nice introduction! It might help to include recommended resources for on-chain data and how to verify transaction history for beginners who want to dig deeper.",
		author: "Mark Jones",
		date: "September 12, 2025",
		img: Team7Img,
		children: false,
	},
];

function CommentList() {
	return (
		<div className="post-comment">
			<h3>Comments:</h3>
			<ul>
				{commentsData.map((comment) => (
					<li className={`${comment.children && "children"}`} key={comment.id}>
						<div className="post-comment-wrap">
							<div className="post-comment-thumb">
								<img src={comment.img} alt={comment.author} />
							</div>
							<div className="post-comment-data">
								<a className="comment-reply" href="">
									Reply
								</a>
								<strong>{comment.author}</strong>
								<span>{comment.date}</span>
								<p>{comment.comment}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CommentList;
