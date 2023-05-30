import { Post, PostCategory } from 'PostAppAPI';
import { SimpleUser } from './user';

export const EmptyPost: Post = {
    get id() {
        return "123e4567-e89b-12d3-a456-426614174000";
    },
    title: "Tytuł ogłoszenia",
    description: "opis",
    price: 2137,
    area: "Kraków",
    creator: SimpleUser,
    category: { name: "Motoryzacja" },
    picture: { filePath: "/images/posts/question-square-fill.svg" },
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
