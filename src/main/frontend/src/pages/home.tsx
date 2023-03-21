import * as React from 'react';
import { Link } from 'react-router-dom'
import { Post, Category } from '../types'

const FeaturedCategories: React.FC<{}> = () => {
    const categories = [
        new Category("Motoryzacja", "moto"),
        new Category("Elektronika", "elektronika")
    ];
    let categoriesComponents = categories.map((category) => {
        return (
            <Link className="d-flex justify-content-center flex-column p-2" to={`/search/${category.name}`} key={category.name}>
                <img className="rounded-circle bg-secondary text-center" src="" alt="obrazek" width="100px" height="100px" />
                <p className="text-center">{category.title}</p>
            </Link>
        )
    })
    return (
        <div className="categories-list d-flex flex-wrap">
            {categoriesComponents}
        </div>
    );
}

const EmptyPost: Post = {
    id: "0",
    title: "Tytuł ogłoszenia",
    about: "opis",
    price: "2137 zł",
    picture: undefined,
    area: "Kraków",
    date: "02.02.2020",
};


const PostsList: React.FC<{
    posts: Post[]
}> = ({ posts }) => {
    let postComponents = posts.map((post) => {
        return (
            <div className="post-element row" key={post.id}>
                <img className="col-sm-auto" src={post.picture?.href || ""} alt="obrazek" />
                <div className="post-element-info col">
                    <div className="row">
                        <Link className="col" to={`/post/${post.id}`}>
                            <h2>{post.title}</h2>
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
        <div className="post-list container">
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
        <main className="container">
            <h2>Home</h2>
            <FeaturedCategories />
            <LatestPosts />
        </main>
    );
}

export default Home;
