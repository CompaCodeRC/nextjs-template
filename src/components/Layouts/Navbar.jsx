export const Navbar = ({ children }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/images/logo.png" alt="logo" />
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>
                    <a className="navbar-item" href="/about">
                        About
                    </a>
                    <a className="navbar-item" href="/contact">
                        Contact
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="/login">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="/login">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}