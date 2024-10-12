import styles from './ProductList.module.css';

export default function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productPrice}>${product.price}</p>
        </div>
      ))}
    </div>
  );
}


