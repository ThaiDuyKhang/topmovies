import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import Modal, { ModalContent } from "../modal/Modal";
import "./movie-card.scss";

export default function MovieCard(props) {
  const item = props.item;
  const iframeRef = useRef(null);
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

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        {movieItems.map((item, index) => (
          <div key={index} className="content">
            <div className="content__video">
            <iframe
              src={`https://www.youtube.com/embed/${item.key}`}
              ref={iframeRef}
              width="100%"
              title="video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            </div>
            <div className="content__info">
          </div>
          </div>
        ))}
      </div>
    </Link>
  );
}
