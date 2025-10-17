import { useEffect, useMemo, useState } from "react";
import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInStagger from "../../animation/FadeInStagger";

function PortfolioList() {
	const [videos, setVideos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const apiKey = useMemo(() => "AIzaSyDFyIt1xiJjR33VIVaGnVz2GgdKN-pKuAU", []);
	const channelHandles = useMemo(() => [
		"@CRYPTO200EARNING",
		"@crypto-aajkal",
		"@crypto_digvijay3343",
	], []);

	useEffect(() => {
		let isCancelled = false;

		async function getChannelId(handle) {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(handle)}&type=channel&part=id`
				);
				const data = await response.json();
				return data.items?.[0]?.id?.channelId || null;
			} catch (err) {
				return null;
			}
		}

		async function fetchVideosFromChannel(channelId) {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
				);
				const data = await response.json();
				return (data.items || [])
					.filter((item) => item.id?.kind === "youtube#video")
					.map((item) => ({
						title: item.snippet.title,
						thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url || item.snippet.thumbnails?.default?.url,
						videoId: item.id.videoId,
						publishedAt: item.snippet.publishedAt,
					}));
			} catch (err) {
				return [];
			}
		}

		async function fetchAllVideos() {
			setIsLoading(true);
			setErrorMessage("");
			try {
				const allVideos = [];
				for (const handle of channelHandles) {
					// eslint-disable-next-line no-await-in-loop
					const channelId = await getChannelId(handle);
					if (!channelId) continue;
					// eslint-disable-next-line no-await-in-loop
					const videosFromChannel = await fetchVideosFromChannel(channelId);
					allVideos.push(...videosFromChannel);
				}

				allVideos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
				setVideos(allVideos.slice(0, 20));
			} catch (err) {
				setErrorMessage("Failed to load videos. Please try again later.");
			} finally {
				if (!isCancelled) setIsLoading(false);
			}
		}

		fetchAllVideos();
		return () => {
			isCancelled = true;
		};
	}, [apiKey, channelHandles]);
	return (
		<div className="aximo-project-one-column">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
						Have a wide range of
						<span className="aximo-title-animation">
							creative videos
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
					</h2>
				</div>
				{isLoading && (
					<div className="aximo-project-wrap3">Loading latest videos...</div>
				)}
				{!isLoading && errorMessage && (
					<div className="aximo-project-wrap3">{errorMessage}</div>
				)}
				{!isLoading && !errorMessage && videos.map((video, index) => (
					<FadeInStagger className="aximo-project-wrap3" key={video.videoId} index={index}>
						<div className="aximo-project-thumb3">
							<a
								href={`https://www.youtube.com/watch?v=${video.videoId}`}
								target="_blank"
								rel="noopener noreferrer"
								title={video.title}
							>
								<img src={video.thumbnail} alt={video.title} />
							</a>
						</div>
						<div className="aximo-project-data3">
							<h3>
								<a
									href={`https://www.youtube.com/watch?v=${video.videoId}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									{video.title}
								</a>
							</h3>
							<p>{new Date(video.publishedAt).toLocaleDateString()}</p>
						</div>
					</FadeInStagger>
				))}
			</div>
		</div>
	);
}

export default PortfolioList;
