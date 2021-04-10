import React, { Component } from 'react';
import { update } from './BooksAPI';
class BookShelfChanger extends Component {
    state = {
        strValue: ''
    };
    handleChange = (evt) => {
        let _value = evt.target.value
        let { objBook } = this.props;
        objBook.shelf = _value;
        this.props.onBookUpdate(objBook);
        update(objBook, _value).then(objResponse => {
            this.setState({
                strValue: _value
            })
        });
    }
    componentDidMount() {
        const { objBook } = this.props;
        this.setState({
            strValue: objBook.shelf
        })
    }
    render() {
        return (
            <div className="book-shelf-changer">
                <select value={this.state.strValue} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default BookShelfChanger;