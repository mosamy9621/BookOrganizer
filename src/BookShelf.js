import React from 'react';
import Book from './Book';
/**
 * @description : This is stateless component function that responsible for rendering the component.
 * @param {object} props 
 * @returns : JSX to the component to be rendered.
 */
function BookShelf(props) {
    const { strTitle, arrBook, onBookUpdate } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{strTitle}</h2>
            <div className="bookshelf-books">

                <ol className="books-grid">
                    {
                        arrBook.map((objBook) => (
                            <li key={objBook.id}>
                                <Book Book={objBook} onBookUpdate={onBookUpdate} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
}
export default BookShelf;