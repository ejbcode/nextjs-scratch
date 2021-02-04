import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {

  const router = useRouter()
  return (
    <nav className="nav">
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">home</Link>
        </li>
        <li className={router.pathname == "/welcome" ? "active" : ""}>
          <Link href='/welcome'>Welcome</Link>
        </li>
        <li className={router.pathname == "/rickandmortycharacters" ? "active" : ""}>
          <Link href='/rickandmortycharacters'>Rick and morty characters</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
