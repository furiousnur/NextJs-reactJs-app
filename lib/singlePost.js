export default async function getSinglePost(id){ 
    const res = await fetch(`https://dummyjson.com/post/${id}`);
    if (!res.ok){
        throw new Error("Error Fetching post");
    }

    return res.json();
}