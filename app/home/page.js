
import Link from 'next/link';
const Page = () => {
    return (
        <div>
            <div style={{textAlign: "center"}} className="jumbotron">
                <h1>Welcome to My blog Project using NEXT JS AND REACT JS</h1>
                <Link href="/blog"><button style={{fontSize: "25px", cursor: "pointer"}}>Go to Blog</button></Link>
            </div>
        </div>
    );
};

export default Page;
