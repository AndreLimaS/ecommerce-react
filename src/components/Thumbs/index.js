import React from "react";
import { listproducts } from "../../services/api";
import { ThumbImgs } from "./styles";

export default function Thumbs() {
  const [thumbs, setThumbs] = React.useState(null);

  React.useEffect(() => {
    getThumbs();
  }, []);

  async function getThumbs() {
    const response = await listproducts();
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
