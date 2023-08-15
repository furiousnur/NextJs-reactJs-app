import blogData from '../data/blogData.json';
export default async function getAllPosts(){
    const res = await blogData;
    return res;
}