import Link from "next/link"
import Image from 'next/image'
import styles from "../styles/Characters.module.css"

const rickandmortycharacters = ({ data }) => {

  return (
    <div>
      <h1>Fetch static from the next api </h1>
      <div className={styles.cards}>
        {data.results.map((item) => (

          <div key={item.id} className={styles.single}>
            <div className={styles.content}>
              <img className={styles.img} src={item.image} width="100" height={100} alt={item.name} />
              <p className={styles.name}>{item.name}</p>
            </div>

            <div className="buttons">
              <Link href={`/rickandmortys/${item.id}`}>
                <a className={styles.button}>ServerSide</a>
              </Link>

              <Link href={`/rickandmortys-static/${item.id}`}>
                <a className={styles.button}>StaticSide</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <pre><code>{JSON.stringify(data.results, null, 4)}</code></pre>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://nextjs-scratch.vercel.app/api/rickandmorthyapi`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default rickandmortycharacters