import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
class Movies extends Component {
  state = { movies: getMovies() };
  handleDelete = movie => {
    const Movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: Movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <p>There are no movies in the database.</p>;
    }
    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <React.Fragment>
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger"
                    >
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
