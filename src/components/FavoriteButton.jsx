import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const FavoriteButton = ({ workoutId, userId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {isFavorite ? <Favorite onClick={toggleFavorite} /> : <FavoriteBorder onClick={toggleFavorite} />}
    </>
  );
};

export default FavoriteButton;
