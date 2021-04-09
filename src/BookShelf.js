import React, { Component } from 'react';
import Book from './Book';
class BookShelf extends Component {
    render() {
        const { strTitle, arrBook } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{strTitle}</h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                        {
                            arrBook.map((objBook) => (
                                <li key={objBook.id}>
                                    <Book Book={objBook} />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;