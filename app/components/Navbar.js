import Link from 'next/link';
import "./styles.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/">
                    <span className="navbar-brand">My Blog</span>
                </Link>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link href="/">
                            <span className="nav-link active">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog">
                            <span className="nav-link">Blog</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
