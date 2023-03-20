import * as React from 'react';



interface Post {
    id: string;
    title: string;
    about: string;
    price: string;
    picture?: URL;
    area: string;
    date: string;
};

const EmptyPost: Post = {
    id: "0",
    title: "Tytuł ogłoszenia",
    about: "opis",
    price: "2137 zł",
    picture: undefined,
    area: "Kraków",
    date: "02.02.2020",
};

interface PostList {
    posts: Post[]
};

const PostsList: React.FC<PostList> = ({ posts }) => {
    let postComponents = posts.map((post) => {
        return (
            <div className="post-element row" key={post.id}>
                <img className="col-sm-auto" src={post.picture?.href || "" } alt="obrazek" />
                <div className="post-element-info col">
                    <div className="row">
                        <h2 className="col">{post.title}</h2>
                        <h3 className="col col-lg-2">{post.price}</h3>
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
        <div className="post-list">
            {postComponents}
        </div>
    );
}

const LatestPosts: React.FC<{}> = () => {
    const [posts, setPosts] = React.useState([EmptyPost]);

    return (
        <PostsList posts={posts} />
    )
}

const Home: React.FC<{}> = () => {
    return (
        <main>
            <h2>Home</h2>
            <LatestPosts />
        </main>
    );
}

export default Home;
