import "./Post.css";

function Post(props) {
  const { userId, title, body } = props;

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <h3>User ID: {userId}</h3>
    </div>
  );
}

export default Post;
