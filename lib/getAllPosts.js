export default async function getAllPosts(){
    const res = await fetch('https://dummyjson.com/posts?skip=2&limit=10');
    if (!res.ok){
        throw new Error("Error Fetching posts");
    }
    
    return res.json();
}