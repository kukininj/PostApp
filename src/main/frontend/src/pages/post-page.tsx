import * as React from 'react';
import { useParams } from 'react-router-dom'
import { Post, User } from '../types'
import { EmptyPost } from './post-components';

const SampleAuthor: User = {
    id: "0",
    name: "Jan",
    surname: "Kowalski",
    joinDate: new Date(2020, 2, 2),
    picture: new URL("/images/users/person.svg", document.location.href),
}

const PostPage: React.FC<{}> = () => {
    const [post, setPost] = React.useState(EmptyPost);
    const [author, setAuthor] = React.useState(SampleAuthor);
    const { postID } = useParams();
    return (
        <main className="container-lg" >
            <div className="row gap-3">
                <div className="col-auto col-md mx-auto rounded-5 p-5 bg-light shadow">
                    <div style={{ height: "200px" }}>
                        <img className="d-block h-100 mx-auto" src={post.picture?.href} alt="obrazek ogłoszenie" />
                    </div>
                    <br />
                    <div className="container-fluid">
                        <h1>{post.title}</h1>
                        <h2><b>{post.price}</b></h2>
                        <hr />
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
                <div className="col-auto mx-auto">
                    <div className="rounded-5 p-5 w-100 h-auto bg-light shadow">
                        <img className="img-thumbnail rounded" width="100px" height="100px" src={author.picture.href} alt="profilowe" />
                        <div className="p-1">
                            <h2 className="p-1">{author.name + " " + author.surname}</h2>
                            <h6 className="p-1">Dołączył: {author.joinDate.toDateString()}</h6>
                        </div>
                        <button type="button" className="btn btn-info">Wyślij wiadomość</button>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default PostPage;
