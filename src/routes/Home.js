import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
    state = { isLoading: true, movies: [] }; // 쓰고자 하는 state를 선언하는거 필수 아님
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json/sort_by=rating"); //axios가 끝날때가지 기다려

        this.setState({ movies, isLoading: false });
    };
    componentDidMount() {
        this.getMovies();
    } // component가 끝나자마자 호출됨
    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => {
                            return (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            );
                        })}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
