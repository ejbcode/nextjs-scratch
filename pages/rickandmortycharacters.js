import Link from "next/link"

const rickandmortycharacters = ({data}) => {

  return (
    <div>
      <h2>Last rickandmortycharacters in Chile</h2>
      {data.results.map((item)=> (
        <div key={item.id}>
          <div>
            <span>{item.name}</span>
            <button><Link href={`/rickandmortys/${item.id}`}>ServerSide</Link></button>
            <button><Link href={`/rickandmortys-static/${item.id}`}>StaticSide</Link></button>
          </div>
        </div>
      ))}
      <pre><code>{JSON.stringify(data.results,null,4)}</code></pre>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://rickandmortyapi.com/api/character/`)
  const data = await res.json()
  
  return {
    props: {
      data
    }
  }
}

export default rickandmortycharacters