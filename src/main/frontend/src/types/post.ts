export const EmptyPost: Post = {
    id: "0",
    title: "Tytuł ogłoszenia",
    about: "opis",
    price: "2137 zł",
    picture: new URL("/images/posts/question-square-fill.svg", document.location.href),
    area: "Kraków",
    date: "02.02.2020",
};

export class PostID {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
    async fetch(): Promise<Post> {
        // TODO: actually fetch the Post 
        return EmptyPost;
    }
}

export interface Post {
    id: string;
    title: string;
    about: string;
    price: string;
    picture?: URL;
    area: string;
    date: string;
};
