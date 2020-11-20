import Search from './Search';

const Header = ({ fetchMovies }) => {

    const handleToHome = event => {
        event.preventDefault();
        fetchMovies('indiana');
    }

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top px-5">
            <a className="navbar-brand " href="#home" onClick={handleToHome}>Movie Search</a>
            <Search fetchMovies={fetchMovies} />
        </nav>
    );
}

export default Header;