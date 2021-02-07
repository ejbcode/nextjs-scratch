import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'


const Nav = () => {

  const router = useRouter()
  return (
    <nav className="nav">
      <Image src="/logo.png"  alt="site logo"  width={90} height={50}/>
      <div className="links">
        <Link href="/" >
          <a className={router.pathname == "/" ? "active" : "" }>Home</a>
        </Link>

        <Link href="/welcome" className={router.pathname == "/welcome" ? "active" : "" }>
          <a className={router.pathname == "/welcome" ? "active" : "" }>Welcome</a>
        </Link>

        <Link href="/rickandmortycharacters" className={router.pathname == "/rickandmortycharacters" ? "active" : "" }>
          <a className={router.pathname == "/rickandmortycharacters" ? "active" : "" }>Fetching Example</a>
        </Link>

        <Link href="/fromnextapi" className={router.pathname == "/fromnextapi" ? "active" : "" }>
          <a className={router.pathname == "/fromnextapi" ? "active" : "" }>Fetching 2</a>
        </Link>
      </div>   
    </nav>
  )
}

export default Nav
