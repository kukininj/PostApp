import * as React from "react";
import { Link } from "react-router-dom";
import { EmptyPost } from "../types/post";
import { Post } from "PostAppAPI";
import { Posts } from "../Api";

export const PostsList: React.FC<{
    posts: Post[]
}> = ({ posts }) => {
    let postComponents = posts.map((post) => {
        return (
            <div className="post-element row bg-light rounded-5 shadow" key={post.id}>
                <Link to={`/post/${post.id}`} className="col-sm-auto flex-shrink-0 felx-grow-1 bg-primary rounded-5 p-3 shadow" 
                    style={{aspectRatio:"3", minWidth: "150px"}}>
                    <img className="d-block h-100 mx-auto" src={post.picture?.filePath || ""} alt="obrazek" />
                </Link>
                <div className="col-sm">
                    <div className="d-flex p-2 justify-content-between">
                        <Link className="text-decoration-none link-dark" to={`/post/${post.id}`}>
                            <h2 className="col">{post.title}</h2>
                        </Link>
                        <h3 className="align-self-end">{post.price}</h3>
                    </div>
                    <div className="row">
                        <p>{post.area}</p>
                        <p>{post.edited?.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div className="d-grid m-3 m-sm-5 gap-3">
            {postComponents}
        </div>
    );
}

export const LatestPosts: React.FC<{}> = () => {
    const [posts, setPosts] = React.useState([EmptyPost, EmptyPost, EmptyPost]);

    React.useEffect(() => {
        Posts.getLatest()
            .then(setPosts)
    }, [])

    return (
        <PostsList posts={posts} />
    )
}
