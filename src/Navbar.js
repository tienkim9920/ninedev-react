import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Nine Dev</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    background: '#003A57',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar;