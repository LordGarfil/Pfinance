import Header from "@components/Header"

const Layout = ({children}) => {
  return <div className="app">
      <Header />
      {children}
    </div>
}

export default Layout