import React from "react";
import { useParams } from "react-router";
import PageHeader from "../page-header/PageHeader";
import { category as cate } from "../../api/tmdbApi";
import MovieGrid from "../movie-grid/MovieGrid";

export default function Catalog(props) {
  const { category } = useParams();

//   console.log(category);

  return (
    <div>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
          <div className="section mb-3">
              <MovieGrid category={category}/>
          </div>
      </div>
    </div>
  );
}
