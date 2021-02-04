const character = ({data}) => {
  return (
    <div>
    ServerSide
      <p>{data.name}</p>
      <img src={data.image} alt={data.name}/>
      <pre><code>{JSON.stringify(data,null,4)}</code></pre>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${context.params.id}`)
  const data = await res.json()
    return {
      props: {
        data,
      },
  }
}

export default character
