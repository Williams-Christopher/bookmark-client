import React, {Component} from 'react';
import './addBookmark.css';

class AddBookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            url: '',
            description: '',
            rating: 1,
        };
    }

    titleChanged(title) {
        this.setState({
            title,
        });
    }

    urlChanged(url) {
        this.setState({
            url,
        });
    }

    descriptionChanged(description) {
        this.setState({
            description,
        });
    }

    ratingChanged(rating) {
        this.setState({
            rating,
        });
    }

    render() {
        return (
            <div className='addbookmark'>
                <h2>Add Bookmark</h2>
                <form className='addbookmark__form'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' name='title' id='title' placeholder='Title' value={this.state.title} onChange={e => this.titleChanged(e.target.value)} />
                    <label htmlFor='url'>URL:</label>
                    <input type='text' name='url' id='url' placeholder='URL' value={this.state.url} onChange={e => this.urlChanged(e.target.value)} />
                    <label htmlFor='description'>Description:</label>
                    <textarea name='description' id='description' placeholder='Description' value={this.state.description} onChange={e => this.descriptionChanged(e.target.value)} />
                    <label htmlFor='rating'>Rating:</label>
                    <input type='number' name='rating' id='rating' min='1' max='5' value={this.state.rating} onChange={e => this.ratingChanged(e.target.value)} />
                    <div className='addbookmark__buttons'>
                        <button onClick={e => this.props.showForm(false)}>Cancel</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBookmark;