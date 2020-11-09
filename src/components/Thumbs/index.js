import React from "react";
import { ThumbImgs } from "./styles";

export default function Thumbs({ products }) {
  const [thumbs, setThumbs] = React.useState(null);

  React.useEffect(() => {
    getThumbs();
  }, []);

  async function getThumbs() {
    const response = await products;
    response.map(({ images }) => setThumbs(images));
  }

  if (thumbs === null) return null;
  return (
    <>
      <ThumbImgs>
        {thumbs.map((item, index) => (
          <img src={item} alt="" key={index} />
        ))}
      </ThumbImgs>
    </>
  );
}
