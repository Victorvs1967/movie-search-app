import { Link } from 'react-router-dom'
import Search from './Search';

const Header = ({ fetchMovies, fetchPopular, fetchPopularTV }) => {

    const handleToHome = event => {
        event.preventDefault();
        fetchPopular();
    }

    const handleToTv = event => {
        event.preventDefault();
        fetchPopularTV();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5">
            <Link to={{pathname: '/'}} className="navbar-brand" onClick={handleToHome}>Movie Search</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={{pathname: '/'}} className="nav-link" onClick={handleToHome}>Movies</Link>
                </li>
                <li className="nav-item">
                    <Link to={{pathname: '/'}} className="nav-link" onClick={handleToTv}>TV Shows</Link>
                </li>
            </ul>
            <Search fetchMovies={fetchMovies} />
            </div>
        </nav>
    );
}

export default Header;