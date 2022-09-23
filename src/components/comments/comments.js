import { useState, useEffect } from 'react';
import SingleComment from './singleComment';
import { useDispatch, useSelector } from 'react-redux';
import { createComment, loadComments } from '../../redux/actions/action_creators/comment_action_creator';
import uniqid from 'uniqid';

const Comments = props => {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        return state.commentReducer.comments;
    })

    const handleChange = (e) => {
        setTextComment(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createComment(uniqid(), textComment))
    }
    useEffect(() => {
        dispatch(loadComments());
    }, [])
    return (
    <div className="card-comments">
        <form onSubmit={handleSubmit} className="comments-item-create">
            <input type='text' onChange={handleChange} value={textComment}/>
            <input type='submit' hidden />
        </form>
        { !!comments.length && comments.map(comment => {
            return <SingleComment key={comment.id} comment={comment}/>
        })} 
    </div>
)
}

export default Comments;