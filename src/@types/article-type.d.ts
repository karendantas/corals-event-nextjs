import { AuthorType } from "./author-type";
import { UserType } from "./user-type";

export interface ArticleType {
    id: string,
    author_id: string,
    title: string,
    content: string,
    image?: string,
    created_at: string,
}