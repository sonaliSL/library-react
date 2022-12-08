export default function SelectedBook({ selectedBook }) {
	const { title, imageLink, country, year } = selectedBook;
	return (
		<div className={`SelectedBook`}>
			<p>Selected</p>
			<img src={`/${imageLink}`} alt={`${title}-cover`} />
			<h1>{title}</h1>
			<p>{country}</p>
			<p>{year}</p>
		</div>
	);
}
