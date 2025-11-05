import styles from "./styles.module.css";

type Props = {  
  title: string;
  autor: string;
  data: string;
  description: string;
}

  export function Card({ title, autor, data, description }: Props) {
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.autor}>{autor}</p>
        <p className={styles.data}>{data}</p>
        <p className={styles.description}>{description}</p>
      </div>
    );
  }
