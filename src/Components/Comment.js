import React, {useState} from 'react'

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: false
        };

        this.like = this.like.bind(this);
        this.report = this.report.bind(this);
    };

    like(e) {
        e.preventDefault();
        this.setState(state => ({
            liked: !state.liked
        }));
    }

    report(e) {
        e.preventDefault();
        alert("Thank you for your report, our team will investigate this comment.");
    }

    render() {
        return (
            <div className="Comment__container">
                <p className="Comment__author">{this.props.author.toLowerCase()} commented</p>
                <p className="Comment__body">{this.props.body}</p>
                <div className="Comment__action_buttons">
                    <a href="#" onClick={this.like}>{this.state.liked ? 'Liked' : 'Like'}</a>
                    <a href="#">Reply</a>
                    <a href="#" onClick={this.report}>Report</a>
                </div>
            </div>
        )
    }
}

export default Comment;