import Link from "next/link"
import styles from "./header.module.css";

export default function Header(){
    return(
        <header className={styles.cabecalho}>
        
        <div>
            <image className={style.imagem}
            width={80}
            height={80}
            src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
            />
         </div>

         <div>
         <image className={style.carrinho}
            width={20}
            height={20}
            src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
            />
         </div>

         <button className={style.botão}>Adicionar um novo produto</button>

         <p>FRASE DE MARKETING DO SHOP</p>

    </header>
);
}
    