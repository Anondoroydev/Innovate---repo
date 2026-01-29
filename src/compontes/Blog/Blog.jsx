import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";
const Blog = ({ blog, handelAddToBookmarks, handelAddToRedingmark }) => {
	const {
		id,
		title,
		cover,
		reading_time,
		author_img,
		author,
		posted_date,
		hashtags,
	} = blog;

	return (
		<div className="pb-20 space-y-3">
			<img className="w-full pb-5" src={cover} alt={`Cover pic ${title}`} />
			<div className="flex justify-between items-center">
				<div className="flex">
					<img className="w-14" src={author_img} alt="" />
					<div className="ml-6">
						<h3 className="text-2xl">{author}</h3>
						<p className="text-sm">{posted_date}</p>
					</div>
				</div>
				<div>
					<span className="text-2xl">{reading_time} min read</span>
					<button
						className="text-2xl ml-2 text-red-600"
						onClick={() => handelAddToBookmarks(blog)}>
						<FaBookmark />
					</button>
				</div>
			</div>
			<h1 className="text-4xl font-bold p-2">{title}</h1>
			<p className="text-base">
				{hashtags.map((hash, idx) => (
					<span className="pl-2" key={idx}>
						<a href="">#{hash}</a>
					</span>
				))}
			</p>
			<button
				onClick={() => handelAddToRedingmark(id, reading_time)}
				className="text-purple-600 text-base underline">
				Mark as read
			</button>
		</div>
	);
};
Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	handelAddToBookmarks: PropTypes.func,
	handelAddToRedingmark: PropTypes.func,
};
export default Blog;
