// src/components/FavoriteButton.js
import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { supabase } from "../supabaseClient";

const FavoriteButton = ({ workoutId, userId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the workout is in the user's favorites
    const fetchFavorites = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("favorites")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching favorites:", error);
        return;
      }

      if (data?.favorites?.includes(workoutId)) {
        setIsFavorite(true);
      }
    };

    fetchFavorites();
  }, [workoutId, userId]);

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);

    const { data, error } = await supabase
      .from("users")
      .select("favorites")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Error fetching user data:", error);
      return;
    }

    let updatedFavorites = data.favorites || [];

    if (isFavorite) {
      // Remove workoutId from favorites
      updatedFavorites = updatedFavorites.filter((id) => id !== workoutId);
    } else {
      // Add workoutId to favorites
      updatedFavorites.push(workoutId);
    }

    // Update the database
    const { error: updateError } = await supabase
      .from("users")
      .update({ favorites: updatedFavorites })
      .eq("id", userId);

    if (updateError) {
      console.error("Error updating favorites:", updateError);
      return;
    }

    // Toggle the state
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {isFavorite ? <Favorite onClick={toggleFavorite} /> : <FavoriteBorder onClick={toggleFavorite} />}
    </>
    // <IconButton onClick={toggleFavorite}>
    // </IconButton>
  );
};

export default FavoriteButton;
