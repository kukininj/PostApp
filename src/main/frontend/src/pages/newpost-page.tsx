import * as React from 'react';
import { useParams } from 'react-router-dom'
import { EmptyPost } from '../types/post';
import { SimpleUser } from '../types/user';
import { AppContext } from '../Api/app-context';
import { ReactNode } from 'react';
import { AddPostRequest } from 'PostAppAPI';
import { Posts } from '../Api';

export const NewPostPage: React.FC<{}> = () => {
    const app = React.useContext(AppContext);
    const author = app.user || SimpleUser;

    let request: AddPostRequest = {
        title: EmptyPost.title,
        description: "Nowe ogłoszenie",
        area: EmptyPost.area,
        category: EmptyPost.category?.name,
        priceStr: EmptyPost.price?.toString(),
    }

    const setCategory: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        request.category = event.target.value;
    }

    const setTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        request.title = event.target.value;
    }

    const setPrice: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        request.priceStr = event.target.value;
    }

    const setAbout: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        request.description = event.target.value;
    }

    const submit = () => {
        Posts.addPost({ addPostRequest: request })
            .then((post) => {
                if (post) {
                    alert("Dodawanie ogłoszenia powiodło się!");
                    document.location.pathname = `/post/${post.id}`;
                }
            })
    }

    return (
        <main className="container-lg" >
            <div className="row gap-3">
                <div className="col-auto col-md mx-auto">
                    <form
                        className="rounded-5 p-5 bg-light shadow">
                        <div style={{ height: "200px" }}>
                            <img className="d-block h-100 mx-auto" src={EmptyPost.picture?.filePath} alt="obrazek ogłoszenie" />
                        </div>
                        <br />
                        <div className="container-fluid">
                            <h1 className="border border-primary rounded-3">
                                <input onChange={setTitle}
                                    required
                                    className="w-100 bg-transparent rounded-3 border-0 input-info"
                                    placeholder={EmptyPost.title}
                                />
                            </h1>
                            <h2 className="text-end">
                                <p className="border border-primary rounded-3 d-inline">
                                    <input onChange={setPrice}
                                        min={0}
                                        size={4}
                                        required
                                        className="text-end bg-transparent rounded-3 border-0"
                                        type="number"
                                        placeholder={"Cena w"}
                                    />
                                </p>
                                <p className="d-inline"> zł</p>
                            </h2>
                            <hr />
                            <div>
                                <h3>Opis:</h3>
                                <div className="border rounded-3 border-primary">
                                    <textarea onChange={setAbout}
                                        required
                                        className="bg-transparent border-0 rounded-3 w-100"
                                        placeholder={EmptyPost.description}>

                                    </textarea>
                                </div>
                            </div>
                            <hr />
                            <div className="row align-items-baseline">
                                <div className="col-sm-auto">Kategoria:
                                    <div className="d-inline border rounded-3 border-primary">
                                        <select onChange={setCategory}
                                            className="bg-transparent border-0">
                                            <option value="" disabled selected>wybierz</option>
                                            <option value="Motoryzacja">Motoryzacja</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="col-sm-auto">ID: -</p>
                                <p className="col-sm-auto">Ostatnia aktualizacja: -</p>
                                <p className="col-sm-auto">{EmptyPost.area}</p>
                                <button onClick={submit}
                                    form="post-form"
                                    className="col-sm-auto btn btn-info" >
                                    Zapisz
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-auto mx-auto">
                    <div className="rounded-5 p-5 w-100 h-auto bg-light shadow">
                        <img className="img-thumbnail rounded" width="100px" height="100px" src={author.picture?.filePath} alt="profilowe" />
                        <div className="p-1">
                            <h2 className="p-1">{author.name + " " + author.surname}</h2>
                            <h6 className="p-1">Dołączył: {author.joined?.toDateString()}</h6>
                        </div>
                        <button
                            type="button"
                            className="btn btn-info"
                            disabled>
                            Wyślij wiadomość
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

