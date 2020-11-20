import Search from './Search';

const Header = ({ fetchMovies, fetchPopular }) => {

    const handleToHome = event => {
        event.preventDefault();
        fetchPopular();
    }

    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5">
            <a className="navbar-brand" href="#home" onClick={handleToHome}>Movie Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="#link" className="nav-link" onClick={handleToHome}>Movies</a>
                </li>
                <li className="nav-item">
                    <a href="#link" className="nav-link" onClick={handleToHome}>TV Shows</a>
                </li>
            </ul>
            <Search fetchMovies={fetchMovies} />
            </div>
        </nav>
    );
}

export default Header;