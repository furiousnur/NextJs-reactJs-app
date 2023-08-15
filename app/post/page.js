import Link from 'next/link';
import getAllPosts from "@/lib/getAllPosts";
import "./style.css"

export default function Blog() {
    const posts = getAllPosts();
    return (
        <div>
            <div className="blog-container">
                <h1 className="blog-title">Posts</h1>
                {
                    posts.then(data => {
                        return data.posts.map(post => (
                            <div key={post.id} className="blog-post">
                                <Link href={`/blog/${post.id}`}>
                                    <h3 className="blog-link">{post.title}</h3>
                                </Link>
                            </div>
                        ));
                    })
                        .catch(error => (
                            <p>Error loading posts: {error.message}</p>
                        ))}
            </div>
        </div>
    );
}
