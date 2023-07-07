const MovieCard = ({movie}) => {

    return(
    <div className="movie-Card" style={{ display : "flex", margin : 20, marginTop: 20}} >

        <img style={{ width : 250, borderRadius: 20}}
        src={movie.posterURL}
        alt={movie.title}
        />
        <h1 style={{ margin : 20}}>
        {movie.title}
        </h1>

        <p style={{ marginTop : 130}}>
        {movie.description}
        </p>

        <p style={{ margin : 20}}>
        Movie Rating : {movie.rating}
        </p>
    </div>
    );
}

export default MovieCard

