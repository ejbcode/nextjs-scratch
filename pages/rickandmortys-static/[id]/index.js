import Meta from "../../../components/Meta"

const character = ({data}) => {
  return (
    <div>
      <Meta title={data.name}/>
      
    Static
      <p>{data.name}</p>
      <img src={data.image} alt={data.name}/>
      <pre><code>{JSON.stringify(data,null,4)}</code></pre>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${context.params.id}`)
  const data = await res.json()
    return {
      props: {
        data,
      },
  }
}


export const getStaticPaths = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character`)  
    const characters = await res.json()
    console.log(characters)
    const ids = characters.results.map((char) => char.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
      paths,
      fallback: false,
    }
  }

export default character
