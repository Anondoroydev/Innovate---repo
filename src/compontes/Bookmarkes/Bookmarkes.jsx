 
import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const Bookmarkes = ({ bookMarkes, readingTime }) => {
	return (
		<div>
			<div className="bg-gray-300 ml-4 p-4">
				<h3 className="text-4xl">Reading Time :{readingTime}</h3>
				<h2 className="text-center font-bold p-4 text-2xl">
					{" "}
					Book Markes: {bookMarkes.length}
				</h2>
				{bookMarkes.map((bookmark, idx) => (
					<BookMark key={idx} bookmark={bookmark}></BookMark>
				))}
			</div>
		</div>
	);
};

Bookmarkes.propTypes = {
	 
	bookMarkes: PropTypes.array,
	readingTime: PropTypes.number 
}

export default Bookmarkes

