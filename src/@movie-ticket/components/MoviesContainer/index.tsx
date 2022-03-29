export const MoviesContainer = () => {
  return (
    <div className="movies-container">
      <div className="img-container">
        <img
          src={require("./../../assets/images/movie01.jpg")}
          alt="loading"
        />
      </div>
      <div className="movies-content">
        <h4>Alone</h4>
        <ul className="movies-rating-percent">
          <li>left</li>
          <li>right</li>
        </ul>
      </div>
    </div>
  );
};
