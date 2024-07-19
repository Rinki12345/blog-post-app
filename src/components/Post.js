
const Post = ({post, onClick}) => {
    return (
        <div onClick={onClick}>
           <h2>{post.title}</h2> 
           <p>{post.body.substring(0, 50)}...</p>
        </div>
    )
}

export default Post;