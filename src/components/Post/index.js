import React from "react";
import { Button, Card } from "antd";

const Post = ({ id, title, body, deletePost }) => {
  return (
    <Card title={title} style={{ width: 300 }}>
      <p>{body}</p>
      <Button onClick={() => deletePost(id)}>Delete</Button>
    </Card>
  );
};

export default Post;
