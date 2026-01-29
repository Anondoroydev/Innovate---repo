import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handelAddToBookmarks, handelAddToRedingmark }) => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			// .then(data=>console.log(data));
			.then((data) => setBlogs(data));
	}, []);
	return (
		<div className="text-4xl w-2/3">
			<h4>Blogs :{blogs.length} </h4>
			{blogs.map((blog) => (
				<Blog
					key={blog.id}
					blog={blog}
					handelAddToBookmarks={handelAddToBookmarks}
					handelAddToRedingmark={handelAddToRedingmark}>
				</Blog>
			))}
		</div>
	);
};
Blogs.propTypes = {
	handelAddToBookmarks: PropTypes.func,
	handelAddToRedingmark: PropTypes.func,
};
export default Blogs;
