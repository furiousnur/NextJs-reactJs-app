import getSinglePost from "@/lib/singlePost";
import getComments from "@/lib/getComments";
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import "./style.css";

export default async function SingleBlog({ params }) {
    const id = params.id;
    const postPromise = getSinglePost(id); 
    const commentsPromise = getComments(id);
    //request both promises at the same time and wait for both to resolve which is called parallel fetching
    const [post,comments] = await Promise.all([postPromise, commentsPromise]); 
    return (
        <div>
            <div className="single-post">
                <h5 className="single-title">{post.title}</h5>
                <p className="date">{post.date}</p>
                <p className="single-content">{post.body}</p>
                <Link href="/blog" className="back-link">Back to Blog</Link>
                <div className="comments">
                    <h1 className="blog-title">Comments</h1>
                    {
                        comments.comments.map(comment => (
                            <div key={comment.id} className="comment">
                                <p className="comment-body">{comment.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    console.log('Posts:', posts); // Check what posts is
    return posts.posts.map((post) => ({
        id: ""+post.id,
    }))
}

