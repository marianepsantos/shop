import Image from "next/image";
import styles from "./main.module.css";


export default async function Main() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();

  return (
    <main className={styles.main}>
      <h2>Produtos</h2>
      <div className={styles.produto}>
        {produto.map((produto) => (
          <div className={styles.produto}key= {produto.id}>
            <p>{products.title}</p>
            <p>Preço: ${products.prince}</p>
            <p>{products.description}</p>
            <p>Categoria: {products.category}</p>
            <p>Avaliação: {products.rating.count}</p>
        <Image
        width={200}
        height={200}
        src={products.image}
        />
      </div>
        ))}
      </div>
    </main>
  );
}
