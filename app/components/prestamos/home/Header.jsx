import Link from 'next/link'

const Header = () => {
  return <div className="header-container">
    <span>Prestámos |</span>
    <div className="actions-group">
      <button className="btn btn-primary">
        <Link href="/new/prestamo">
          <a>Crear</a>
        </Link>
      </button>
    </div>
  </div>
}

export default Header