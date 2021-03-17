import React from 'react';
import ReactDom from 'react-dom';


function BookList(){
	return(
		<>
		<section>This is a booklist</section>
		<Book />
		</>
	);
}

const Book = () =>{
	return (
		<article>This is a book</article>
	);
}

ReactDom.render(
	<BookList />,
	document.getElementById('root')
);