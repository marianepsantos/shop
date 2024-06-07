import Link from "next/link"
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {

    return(
        <footer className={styles.rodape}>
        
            <div>
            <image className={style.imagem}
             width={80}
             height={80}
             src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
             />
            </div>
            
            <h1></h1>

            <ul>
            <li className={styles.midia}><image
             width={20}
             height={20}
             src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
             /></li>

             <li><image
             width={20}
             height={20}
             src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
             /></li>

             <li><image
             width={20}
             height={20}
             src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
             /></li>

             <li><image
             width={20}
             height={20}
             src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
             /></li>

             <li><image
             width={20}
             height={20}
             src={"https://i.pinimg.com/originals/07/2f/5e/072f5ef47a0514ee374c4e838f5d54f0.jpg"}
             /></li>
            </ul>

            <p>Desde 05 de abril de 2006</p>

        </footer>
    );
}



