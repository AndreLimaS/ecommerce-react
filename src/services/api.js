import picProduct1 from "../assets/m1.jpg";
import picProduct2 from "../assets/m2.jpg";
import picProduct3 from "../assets/m3.jpg";
import picProduct4 from "../assets/m4.jpg";

function fakeFetch() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Mochila 1",
          images: [picProduct1, picProduct2, picProduct3, picProduct4],
          price: 300.0,
          sku: "#12345",
        },
        {
          id: 2,
          name: "Mochila 2",
          images: [picProduct1, picProduct2, picProduct3, picProduct4],
          price: 200.0,
          sku: "#432143",
        },
        {
          id: 3,
          name: "Mochila 3",
          images: [picProduct1, picProduct2, picProduct3, picProduct4],
          price: 350.0,
          sku: "#6543654",
        },
      ]);
    }, 500)
  );
}

export async function listproducts() {
  const response = await fakeFetch();
  return response;
}
