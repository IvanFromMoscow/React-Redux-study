import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteComment, updateComment } from "../../redux/actions/action_creators/comment_action_creator";

const SingleComment = ({ comment }) => {
    const { id, text } = comment;
    const [textComment, setTextComment] = useState(text);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateComment(id, textComment))
    }
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteComment(id));
    }
    useEffect(() => {
        if(text) {
            setTextComment(text);
        }
    },[text])

    return (
        <form onSubmit={handleUpdate} className="comments-item">
            <div onClick={handleDelete} className="comments-item-delete">&times;</div>
            <input type='text' value={textComment} onChange={handleInput}/>
            <input type='submit' hidden />
        </form>
    )
}
export default SingleComment;