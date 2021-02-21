import React from 'react'
import Comment from './Comment'

class CommentSection extends React.Component {
    render() {
        return (
            <div className="CommentSection__container">
                <h1>Comments</h1>
                {this.props.comments.map(comment => {
                    return (
                        <Comment body={comment.body} author={comment.email} />
                    )
                })}
            </div>
        )
    }
}

export default CommentSection