import React from 'react';
import BookShelfChanger from './BookShelfChanger';
/**
 * @description : This is stateless component function that responsible for rendering the component.
 * @param {object} props 
 * @returns  : JSX to the component to be rendered.
 */
function Book(props) {
    const objBook = props.Book;
    const onBookUpdate = props.onBookUpdate;
    const strImageURL = objBook.imageLinks === undefined ? '' : `url(${objBook.imageLinks.thumbnail})`;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: strImageURL }}></div>
                <BookShelfChanger objBook={objBook} onBookUpdate={onBookUpdate} />
            </div>
            <div className="book-title">{objBook.title}</div>
            {Array.isArray(objBook.authors) && <div className="book-authors">{objBook.authors.join(' and ')}</div>}
        </div>
    );
}
export default Book;
