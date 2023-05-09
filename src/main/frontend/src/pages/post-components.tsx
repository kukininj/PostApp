import * as React from "react";
import { Post } from "../types";
import { Link } from "react-router-dom";
import { EmptyPost } from "../types/post";

export const PostsList: React.FC<{
    posts: Post[]
}> = ({ posts }) => {
    let postComponents = posts.map((post) => {
        return (
            <div className="post-element row bg-light rounded-5 shadow" key={post.id}>
                <Link to={`/post/${post.id}`} className="col-lg flex-shrink-0 felx-grow-1 bg-primary rounded-5 p-3 shadow" style={{aspectRatio:"3"}}>
                    <img className="d-block h-100 mx-auto" src={post.picture?.href || ""} alt="obrazek" />
                </Link>
                <div className="col-lg-10">
                    <div className="d-flex p-2 justify-content-between">
                        <Link className="text-decoration-none link-dark" to={`/post/${post.id}`}>
                            <h2 className="col">{post.title}</h2>
                        </Link>
                        <h3 className="align-self-end">{post.price}</h3>
                    </div>
                    <div className="row">
                        <p>{post.area}</p>
                        <p>{post.date}</p>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="d-grid m-5 gap-3">
            {postComponents}
        </div>
    );
}

export const LatestPosts: React.FC<{}> = () => {
    const [posts, setPosts] = React.useState([EmptyPost, EmptyPost]);

    return (
        <PostsList posts={posts} />
    )
}
