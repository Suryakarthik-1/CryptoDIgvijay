import { LazyLoadImage } from "react-lazy-load-image-component";
import Blog3PreviewImg from "../../../assets/images/blog/blog3-preview.webp";
import Blog3Img from "../../../assets/images/blog/blog3.png";
import FadeInUp from "../../animation/FadeInUp";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostMeta from "./PostMeta";
import PostTags from "./PostTags";
function BlogDetails() {
	return (
		<>
			<FadeInUp className="post-thumbnail">
				<LazyLoadImage
					src={Blog3Img}
					width={850}
					height={500}
					alt="Single blog image"
					effect="blur"
					placeholderSrc={Blog3PreviewImg}
				/>
			</FadeInUp>
			<div className="single-post-content-wrap">
				<PostMeta />
				<div className="entry-content">
					<h3>Understanding Bitcoin: A Beginner's Guide to Cryptocurrency Investment</h3>
					<p>
						Bitcoin is a decentralized digital currency that enables peer-to-peer transactions on a global
						scale without intermediaries. Launched in 2009, it uses blockchain technology to record and
						verify transactions in a transparent, tamper-resistant ledger.
					</p>

					<span>What is Bitcoin and how it works</span>
					<p>
						Transactions are grouped into blocks and added to the blockchain through mining (proof-of-work)
						or other consensus mechanisms. Each transaction is secured by cryptographic keys: a public key
						(used as an address) and a private key (used to sign transactions).
					</p>

					<span>Where to buy Bitcoin</span>
					<p>
						You can buy Bitcoin on regulated exchanges (e.g., Coinbase, Kraken, Binance) or via peer-to-peer
						marketplaces. After purchase, you can store Bitcoin on custodial platforms (they hold your keys)
						or non-custodial wallets (you hold your private keys).
					</p>

					<blockquote>
						"Always understand custody: not your keys, not your coins."
					</blockquote>

					<span>Wallets and security</span>
					<p>
						Wallet options include hardware wallets (most secure), software wallets (convenient), and
						mobile wallets (on-the-go). Protect your private keys and seed phrase—store them offline and
						never share them. Use strong passwords, 2FA on exchanges, and consider a hardware wallet for
						long-term holdings.
					</p>

					<span>Investment considerations</span>
					<p>
						Bitcoin is highly volatile. Consider dollar-cost averaging (regular small buys) to reduce timing
						risk, diversify across assets, and only invest what you can afford to lose. Research the market
						drivers, such as adoption, macroeconomic trends, and regulatory changes.
					</p>

					<span>Taxes, regulations, and learning</span>
					<p>
						Cryptocurrency taxation and regulation vary by jurisdiction. Keep accurate records of trades,
						consult local regulations, and consider professional tax advice if needed. Continue learning
						from reputable sources and practice safe custody and trading habits.
					</p>

					<p>
						This guide is introductory and not financial advice. Do your own research before investing in
						Bitcoin or any cryptocurrency.
					</p>
					<PostTags />
					<CommentList />
					<CommentForm />
				</div>
			</div>
		</>
	);
}

export default BlogDetails;
