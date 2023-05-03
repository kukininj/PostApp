import * as React from "react";
import { Post } from "../types";
import { Link } from "react-router-dom";

export const EmptyPost: Post = {
    id: "0",
    title: "Tytuł ogłoszenia",
    about: "opis",
    price: "2137 zł",
    picture: new URL("/images/posts/question-square-fill.svg", document.location.href),
    area: "Kraków",
    date: "02.02.2020",
};

export const PostsList: React.FC<{
    posts: Post[]
}> = ({ posts }) => {
    let postComponents = posts.map((post) => {
        return (
            <div className="post-element row bg-light rounded-5 shadow" key={post.id}>
                <Link to={`/post/${post.id}`} className="col flex-shrink-0 felx-grow-1 bg-primary rounded-5 p-3 shadow" style={{aspectRatio:"3"}}>
                    <img className="d-block h-100 mx-auto" src={post.picture?.href || ""} alt="obrazek" />
                </Link>
                <div className="col-10">
                    <div className="row">
                        <Link className="col text-decoration-none link-dark" to={`/post/${post.id}`}>
                            <h2 className="col">{post.title}</h2>
                        </Link>
                        <h3 className="col col-lg-2 align-self-end">{post.price}</h3>
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
