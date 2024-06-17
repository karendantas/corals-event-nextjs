import { UserType } from "./user-type";

export interface ArticleType {
    id: string,
    author: UserType,
    title: string,
    content: string,
    image?: string,
    created_at: string,
}