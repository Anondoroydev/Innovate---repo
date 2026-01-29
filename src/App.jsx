import { useState } from "react";
import Blogs from "./compontes/Blogs/Blogs";
import Bookmarkes from "./compontes/Bookmarkes/Bookmarkes";
import Header from "./compontes/Header/Header";

function App() {
	const [bookMarkes, setbookMarkes] = useState([]);
	const [readingTime, setReadingTime] = useState(0);
	const handelAddToBookmarks = (blog) => {
		const newbookmarks = [...bookMarkes, blog];
		setbookMarkes(newbookmarks);
	};
	const handelAddToRedingmark = (id, time) => {
		const newReadingTime = readingTime + time;
		setReadingTime(newReadingTime);
		// remove item

		const remaingBookmark = bookMarkes.filter((bookMark) => bookMark.id !== id);
		setbookMarkes(remaingBookmark);
	};

	return (
		<>
			<div className="max-w-7xl m-auto">
				<Header></Header>
				<div className="md:flex">
					<Blogs
						handelAddToBookmarks={handelAddToBookmarks}
						handelAddToRedingmark={handelAddToRedingmark}></Blogs>
					<Bookmarkes
						bookMarkes={bookMarkes}
						readingTime={readingTime}></Bookmarkes>
				</div>
			</div>
		</>
	);
}

export default App;
