import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getServerSideProps(context) {
  const { id } = context.query; // Get the product ID from the query parameters

  // Check if the ID exists
  if (!id) {
    console.error("No product ID provided");
    return {
      notFound: true,  // Return 404 if no ID is provided
    };
  }

  // Fetch product data based on ID
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  // Check if the fetch was successful
  if (!res.ok) {
    console.error(`Failed to fetch product with ID ${id}: ${res.status} ${res.statusText}`);
    return {
      notFound: true,  // Return 404 if the product is not found
    };
  }

  // Attempt to parse the response
  let product;
  try {
    product = await res.json();
  } catch (error) {
    console.error("Failed to parse JSON response:", error);
    return {
      notFound: true,  // Return 404 if JSON parsing fails
    };
  }

  // Check if the product data is valid
  if (!product || Object.keys(product).length === 0) {
    console.error("No product data returned");
    return {
      notFound: true,  // Return 404 if product data is empty
    };
  }

  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  return (
    <>
      <Header />
      <main>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.price} USD</p>
      </main>
      <Footer />
    </>
  );
}
