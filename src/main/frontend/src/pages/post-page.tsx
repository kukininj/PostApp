import * as React from 'react';
import { useParams } from 'react-router-dom'
import { Post, User } from '../types'

const EmptyPost: Post = {
    id: "0",
    title: "Tytuł ogłoszenia",
    about: "opis",
    price: "2137 zł",
    picture: undefined,
    area: "Kraków",
    date: "02.02.2020",
};

const SampleAuthor: User = {
    id: "0",
    name: "Jan",
    surname: "Kowalski",
    joinDate: new Date(2020, 2, 2),
    picture: new URL("https://localhost/img/profile.png"),
}

const PostPage: React.FC<{}> = () => {
    const [post, setPost] = React.useState(EmptyPost);
    const [author, setAuthor] = React.useState(SampleAuthor);
    const { postID } = useParams();
    console.log(postID);
    return (
        <main className="container-lg">
            <div className="row">
                <div className="col-lg-8">
                    <img src={post.picture?.href} alt="obrazek ogłoszenie" className="img-fluid" />
                    <div className="container-fluid">
                        <h1>{post.title}</h1>
                        <h2><b>{post.price}</b></h2>
                        <div>
                            <h3>Opis</h3>
                            <div>
                                {post.about}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <p className="col-sm-auto">ID: {post.id}</p>
                            <p className="col-sm-auto">Ostatnia aktualizacja: {post.date}</p>
                            <p className="col-sm-auto">{post.area}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 justify-content-lg-end">
                    <h5>Autor</h5>
                    <div className="author-info row">
                        <img className="img-thumbnail rounded col-sm-auto bg-secondary" width="100px" height="100px" src={author.picture.href} alt="profilowe"/>
                        <div className="col">
                        <h2 className="row">{author.name + " " + author.surname}</h2>
                        <h6 className="row">Dołączył: {author.joinDate.toDateString()}</h6>
                        </div>
                    </div>
                    <button type="button" className="btn btn-secondary row">Wyślij wiadomość</button>
                </div>
            </div>
        </main>
    );
};

export default PostPage;
