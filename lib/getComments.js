import commentsData from '../data/commentData.json';
export default async function getComments(){
    const res = await commentsData;
    return res;
}