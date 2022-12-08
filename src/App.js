import books from "./books.json";
import { useState } from "react";
import "./App.css";

function App() {
	const [selectedBookId, setSelectedBookId] = useState(null);
	const [selectedBook, setSelectedBook] = useState(null);
	const [isSelected, setIsSelected] = useState(false);

	const handleBookClick = (e) => {
		const bookId = parseInt(e.target.id);
		if (selectedBookId === bookId) {
			setIsSelected(false);
			setSelectedBook(null);
			setSelectedBookId(null);
		} else {
			setSelectedBookId(bookId);
			const book = books.find((book, i) => i === bookId);
			setSelectedBook(book);
			setIsSelected(true);
		}

		console.log(bookId);
	};

	return (
		<div className="App">
			<header>Library</header>
			<div className="Search">
				<input type="text" />
				<button>Search</button>
			</div>
			<div className="PageContent">
				{" "}
				<div className={`Library ${isSelected ? "minimised" : ""}`}>
					{books.map((book, id) => {
						return (
							<div className="Book" id={id} onClick={handleBookClick}>
								<img
									src={`/${book.imageLink}`}
									id={id}
									alt={`${book.title}-cover`}
								/>
								<h3>{book.title}</h3>
							</div>
						);
					})}
				</div>
				{isSelected && selectedBook ? (
					<div className={`SelectedBook ${isSelected ? "open" : ""}`}>
						<p>Selected</p>
						<img
							src={`/${selectedBook.imageLink}`}
							alt={`${selectedBook.title}-cover`}
						/>
						<h1>{selectedBook.title}</h1>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default App;
