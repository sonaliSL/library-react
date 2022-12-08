import Book from "./Book";
export default function Library({ books, isSelected, handleBookClick }) {
	return (
		<div className={`Library ${isSelected ? "minimised" : ""}`}>
			{books.map((book, id) => {
				return <Book info={book} id={id} handleBookClick={handleBookClick} />;
			})}
		</div>
	);
}
