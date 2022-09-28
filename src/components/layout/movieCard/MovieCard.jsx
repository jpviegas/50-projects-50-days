function MovieCard({ title, vote, release, overview, img }) {
  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    }
    if (vote >= 5) {
      return "orange";
    }
    return "red";
  }

  return (
    <div className="movie">
      <img src={img} alt={`${title} movie cover`} />
      <div className="movie-info">
        <h1>{title}</h1>
        <span>release:{release}</span>
        <span className={getClassByRate(vote)}>{vote}</span>
      </div>
      <div className="overview">
        <h1>Overview</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
