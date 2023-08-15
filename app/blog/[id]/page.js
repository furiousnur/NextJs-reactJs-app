import getSinglePost from "@/lib/singlePost";
import "./style.css";

export default async function SingleBlog({ params }) {
    const id = params.id;
    const post = await getSinglePost(id);

    return (
        <div className="single-post">
            <h1 className="single-title">{post.title}</h1>
            <p className="single-content">{post.body}</p>
            <a href="/blog" className="back-link">Back to Blog</a>
        </div>
    );
}
