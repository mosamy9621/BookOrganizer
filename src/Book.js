import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
class Book extends Component {

    render() {
        const objBook = this.props.Book;
        const strImageURL = objBook.imageLinks === undefined ? '':`url(${objBook.imageLinks.thumbnail})`;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"  style={{ width: 128, height: 193, backgroundImage: strImageURL }}></div>
                    <BookShelfChanger shelf={objBook.shelf} />
                </div>
                <div className="book-title">{objBook.title}</div>
                {Array.isArray(objBook.authors) &&   <div className="book-authors">{objBook.authors.join(' and ')}</div>}
              
            </div>
        )

    }
}
export default Book;