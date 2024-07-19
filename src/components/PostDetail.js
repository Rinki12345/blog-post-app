import { Link } from "react-router-dom";

const PostDetail = ({post}) => {
    if(!post){
        return <p>Select a post to view details</p>
    }
    return (
        <div>
             <h2>{post.title}</h2>
             <p>{post.body}</p>
             <Link to='/'>Back</Link>
        </div>
    )
}

export default PostDetail;