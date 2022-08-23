function MovieCard({ title, vote, release, overview, img }) {
  return (
    <div className="movie">
      <img src={img} alt="movie cover" />
      <div className="movie-info">
        <h1>{title}</h1>
        <span>release:{release}</span>
        <span className="green">{vote}</span>
      </div>
      <div className="overview">
        <h1>Overview</h1>
        <p>{overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
