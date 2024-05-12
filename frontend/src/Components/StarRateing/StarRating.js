import React, { useState } from "react";
import { Button, Textarea, VStack } from "@chakra-ui/react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseEnter = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <VStack align="center" spacing={4}>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <Button
            key={value}
            colorScheme={value <= (hover || rating) ? "blue" : "gray"}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(value)}
          >
            &#9733;
          </Button>
        ))}
      </div>
      <Textarea
        placeholder="Leave your feedback here..."
        value={rating === 0 ? "" : rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
        size="md"
      />
    </VStack>
  );
};

export default StarRating;
