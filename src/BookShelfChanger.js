import React, { Component } from 'react';
import { update } from './BooksAPI';
import PropTypes from 'prop-types';
class BookShelfChanger extends Component {
    state = {
        strValue: ''
    };
    /**
     * @description : This function is responsible for handling the selection of book shelf.
     * @param {object} evt : event to the select element.
     */
    handleChange = (evt) => {
        let _value = evt.target.value;
        let { objBook } = this.props;
        objBook.shelf = _value;
        update(objBook, _value).then(objResponse => {
            this.setState({
                strValue: _value
            });
            this.props.onBookUpdate(objBook);
        }).catch(objResponse => {
            alert(objResponse);
        });
    }
    /**
     * @description : runs when component render , it change the selection to the actual shelf of the book
     */
    componentDidMount() {
        const { objBook } = this.props;
        this.setState({
            strValue: objBook.shelf
        })
    }
    /**
     * @description : this function is responsible for rendering the component.
     * @returns JSX to the component to be rendered.
     */
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
BookShelfChanger.propTypes = {
    objBook: PropTypes.object.isRequired
}
export default BookShelfChanger;