import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category } from "../../api/tmdbApi";
import "./movie-card.scss";

export default function MovieCard(props) {
  const item = props.item;
  console.log(item.original_name);
  const iframeRef = useRef(null);

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const videos = await tmdbApi.getVideos(category.movie, item.id);
        setMovieItems(videos.results.slice(0, 1));
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [category.movie, item.id]);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        {movieItems.map((movie, index) => {
          const videoSrc = `https://www.youtube.com/embed/${movie.key}?autoplay=1&showinfo=0&controls=0`;
          const onLeave = () => iframeRef.current.setAttribute("src", "");
          const onEnter = () => iframeRef.current.setAttribute("src", videoSrc);
          return (
            <div
              className="all-content"
              onMouseLeave={onLeave}
              onMouseEnter={onEnter}
            >
              <div key={index} className="content">
                <div className="content__video">
                  <iframe
                    src={onEnter}
                    ref={iframeRef}
                    width="100%"
                    height="250px"
                    title="video"
                    frameborder="0"
                    allow="autoplay; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="content__info">
                  <div className="content__info__overview">
                    <p>{item.overview.slice(0, 80)}...</p>
                  </div>
                  <div className="content__info__detail">
                  <div className="content__info__detail__vote">
                    <p>
                      Vote: {item.vote_average}{" "}
                      <i style={{ color: "#ffbc00" }} class="bx bxs-star"></i>
                    </p>
                  </div>
                  <div className="content__info__detail__go">
                    <Link to={link}>
                      <i class="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Link>
  );
}
