import Link from 'next/link'

const Home = () => {
  return <div>
    <ul>
      <li>
        <Link href="/prestamos">
          <a>Prestamos</a>
        </Link>
      </li>
    </ul>
  </div>
}

export default Home