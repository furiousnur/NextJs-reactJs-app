import blogData from '../data/blogData.json';

export default async function getSinglePost(id) {
    try {
        const postId = parseInt(id);
        const post = blogData.posts.find(post => post.id === postId);

        if (!post) {
            throw new Error("Post not found");
        }

        return post;
    } catch (error) {
        console.error(error);
        throw new Error("Error Fetching post");
    }
}
