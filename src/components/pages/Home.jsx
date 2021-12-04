import React from "react";
import { Link } from "react-router-dom";
import { category, movieType, tvType } from "../../api/tmdbApi";
// import { OutlineButton } from "../button/Button";
import HeroSlide from "../hero-slide/HeroSlide";
import MovieList from "../movie-list/MovieList";

export default function Home() {
  return (
    <div>
      <HeroSlide />
      <div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <Link to="/movie">
            <h2 className="title-category">
                Trending Now
                  <div className="title-category__all">Explore all</div>
                  <i className="bx bx-chevron-right title-category__icon"></i>
              </h2>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <Link to="/movie">
            <h2 className="title-category">
                Top Rated Movies
                  <div className="title-category__all">Explore all</div>
                  <i className="bx bx-chevron-right title-category__icon"></i>
              </h2>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <Link to="/tv">
              <h2 className="title-category">
                TV Series Trending
                  <div className="title-category__all">Explore all</div>
                  <i className="bx bx-chevron-right title-category__icon"></i>
              </h2>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <Link to="/tv">
              <h2 className="title-category">
                Top Rated TV Dramas
                  <div className="title-category__all">Explore all</div>
                  <i className="bx bx-chevron-right title-category__icon"></i>
              </h2>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
        <div className="section mb-3">
          <div className="section__header mb-2">
            <Link to="/tv">
              <h2 className="title-category">
                Western TV Dramas
                  <div className="title-category__all">Explore all</div>
                  <i className="bx bx-chevron-right title-category__icon"></i>
              </h2>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>
      </div>
    </div>
  );
}
