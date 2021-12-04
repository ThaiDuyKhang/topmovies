import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiConfig from "../../../api/apiConfig";
import tmdbApi from "../../../api/tmdbApi";

export default function CastsList(props) {
  const { category } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCast(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <div className="casts">
      {cast.map((item, index) => (
        <div key={index} className="casts__item">
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
