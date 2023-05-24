import React from "react";
import { render, fireEvent, getByText, getByAltText } from "@testing-library/react";
import Carousel from "./Carousel";

const cardData = [
  {
    caption: "Example caption 1",
    src: "example1.jpg"
  },
  {
    caption: "Example caption 2",
    src: "example2.jpg"
  },
  {
    caption: "Example caption 3",
    src: "example3.jpg"
  }
];

test("renders Carousel component", () => {
  const { getByText, getByAltText } = render(<Carousel title="Example title" cardData={cardData} />);
  const titleElement = getByText(/Example title/i);
  const captionElement = getByText(/Example caption 1/i);
  const imageElement = getByAltText(/Example caption 1/i);
  expect(titleElement).toBeInTheDocument();
  expect(captionElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});

test("clicking left arrow updates card", () => {
  const { getByTestId, getByAltText } = render(<Carousel title="Example title" cardData={cardData} />);
  const leftArrowElement = getByTestId("left-arrow");
  fireEvent.click(leftArrowElement);
  const captionElement = getByText(/Example caption 2/i);
  const imageElement = getByAltText(/Example caption 2/i);
  expect(captionElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});

test("clicking right arrow updates card", () => {
  const { getByTestId, getByAltText } = render(<Carousel title="Example title" cardData={cardData} />);
  const rightArrowElement = getByTestId("right-arrow");
  fireEvent.click(rightArrowElement);
  const captionElement = getByText(/Example caption 2/i);
  const imageElement = getByAltText(/Example caption 2/i);
  expect(captionElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
});
