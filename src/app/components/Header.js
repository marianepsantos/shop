import Link from "next/link"
import styles from "./header.module.css";

export default function Header(){
    return(
        <header className={styles.cabecalho}>
        
        <div>
            <image className="style.imagem"
            
            />
        <nav className="nav">
                <nav className="c">   
                <Link href="/">     
                     <li>Home</li>
                </Link>
                </nav>
            </nav>
            </div>
    </header>
);
}
    