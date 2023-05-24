import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("renders Card component", () => {
  const cardData = {
    caption: "Example caption",
    src: "example.jpg"
  };
  const { getByText, getByAltText } = render(<Card caption={cardData.caption} src={cardData.src} />);
  const captionElement = getByText(/Example caption/i);
  const imageElement = getByAltText(/Example caption/i);
  expect(captionElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});