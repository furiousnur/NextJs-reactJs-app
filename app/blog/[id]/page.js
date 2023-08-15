import getSinglePost from "@/lib/singlePost";
import "./style.css";

export default async function SingleBlog({ params }) {
    const id = params.id;
    const post = await getSinglePost(id); 
    return (
        <div className="single-post">
            <h5 className="single-title">{post.title}</h5>
            <p className="date">{post.date}</p>
            <p className="single-content">{post.body}</p>
            <a href="/blog" className="back-link">Back to Blog</a>
        </div>
    );
}
