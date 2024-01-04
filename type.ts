interface UserI{
    id: string | number,
    username: string,
    avatar: string
}


interface PostI{
    id: number,
    content: string,
    username: string,
    avatar: string
    created_at: string
}