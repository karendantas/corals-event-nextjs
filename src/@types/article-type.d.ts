import { AuthorType } from "./author-type";
import { UserType } from "./user-type";

export interface ArticleType {
    id: string,
    author_name: string,
    title: string,
    content: string,
    image?: string,
    created_at: string,
}