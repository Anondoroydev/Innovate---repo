import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
	const { title } = bookmark;
	return (
		<div className="p-4 m-4 bg-yellow-100">
			<h3>{title}</h3>
		</div>
	);
};
















BookMark.propTypes = {
	bookmark: PropTypes.object,
};
export default BookMark;
