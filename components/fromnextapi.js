import Meta from './Meta'
import { server } from '../config'

const fromnextapi = ({data}) => {

const filtered = data.results.filter((char) => char.id === 2)

  return (
    <div>
      <Meta title="Fetch from next api"/>
      <h2>Fetch from a internal API in NEXTJS</h2>
      {data.results.map((item)=> (
        <div key={item.id}>
          <div>
            <p>{item.name}</p>
            
          </div>
        </div>
      ))}
      <pre><code>{JSON.stringify(data.results,null,4)}</code></pre>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/rickandmorthyapi`)
  const data = await res.json()
  
  return {
    props: {
      data
    }
  }
}

export default fromnextapi