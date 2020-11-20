import { API_IMG_URL, DEFAULT_PLACEHOLDER_IMAGE } from '../Const';

const MovieDetails = ({ details }) => {
    
    const { overview, poster_path, release_date, title } = details;
    const poster = poster_path === null ? DEFAULT_PLACEHOLDER_IMAGE : `${API_IMG_URL}${poster_path}`

    return (
        <div className="card mx-0">
            <img className="card-img-top" src={poster} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-3 text-muted">{release_date}</h6>
                <p className="card-text">{overview}</p>
            </div>
        </div>
    );
}

export default MovieDetails;
