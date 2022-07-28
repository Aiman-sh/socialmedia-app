import './post.css';
import {MoreVert} from '@material-ui/icons'


function Post(props) {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person1.jpg" alt="person" className='postProfileImg'/>
                        <span className="postUsername">Timmy Drew</span>
                        <span className="postDate">5 minutes ago</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert className=''/>
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It's my first post!:)</span>
                    <img src="/assets/2.jpg"  className='postImg' alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className='likeIcon'/>
                        <img src="/assets/heart.png" alt="" className='likeIcon'/>
                        <span className="postLikeCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">
                            9 comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;