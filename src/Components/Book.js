export default function Book({ info, handleBookClick }) {
	const { id: bookID, title, imageLink } = info;

	const handleClick = () => handleBookClick(bookID);

	return (
		<div className={`Book ${bookID}`} onClick={handleClick}>
			<img src={`/${imageLink}`} className={bookID} alt={`${title}-cover`} />
			<h3>{title}</h3>
		</div>
	);
}
