import React from 'react';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../redux/actions/action_creators/likes_action_creator';
import './style.css'
class Likes extends React.Component {
        
                render() {
        return (
                <div>
                        <button className="likes__btn" onClick={this.props.onAddLike}>{this.props.likes}</button>
                        <button className="likes__btn" onClick={this.props.onRemoveLike}>Disable</button>
                        <button className="likes__btn" onClick={this.handleDelete}>Disable</button>
                </div>);
};

}

function mapStateToProps(state) {
        return {
                likes: state.likesReducer.likes
        }
}
function mapDispatchToProps(dispatch) {

        return {
                onAddLike: () => dispatch(addLike()),
                onRemoveLike: () => dispatch(removeLike())
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes);