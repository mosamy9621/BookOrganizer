import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf'
import PropTypes from 'prop-types';
/**
 * @description : This is stateless component function that responsible for rendering the component.
 * @param {object} props 
 * @returns : JSX to the component to be rendered. 
 */
function ListBook(props) {
    const { arrAllBook, onBookUpdate } = props;
    if (!Array.isArray(arrAllBook) || arrAllBook.length === 0) {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Book Organizer</h1>
                </div>
                <div className="loader-parent">
                    <div className="loader"></div>
                </div>
            </div>
        );
    }
    let arrCurrentlyReading = arrAllBook.filter((objBook) => objBook.shelf === 'currentlyReading');
    let arrWantToRead = arrAllBook.filter((objBook) => objBook.shelf === 'wantToRead');
    let arrRead = arrAllBook.filter((objBook) => objBook.shelf === 'read');
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>Book Organizer</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf strTitle="Currently Reading" arrBook={arrCurrentlyReading} onBookUpdate={onBookUpdate} />
                    <BookShelf strTitle="Want To Read" arrBook={arrWantToRead} onBookUpdate={onBookUpdate} />
                    <BookShelf strTitle="Read" arrBook={arrRead} onBookUpdate={onBookUpdate} />

                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}
ListBook.propTypes = {
    arrAllBook: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired,
}
export default ListBook;