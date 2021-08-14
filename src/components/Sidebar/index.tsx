
import { Link, BrowserRouter as Router } from 'react-router-dom'
import './style.scss'

interface MenuProps {
  id: number;
  label: string;
  to: string;
}

const Menu = (item: MenuProps, index: number) => {
  return (
    <>
      <div className="menu-item" key={index}>
        <Link to={`/gerenciador_pedidos/${item.to}`}>
          <button type="button" className="link-btn">{item.label}</button>
        </Link>
      </div>
    </>
  )
}
const Sidebar = () => {

  const rotas = [
    { id: 1, label: 'Clientes', to: 'clientes' },
  ]
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <button className="btn-menu">{'>'}</button>
        <div className="menu">
          {rotas.map(Menu)}
        </div>
      </div>
    </div>
  )
}

export default Sidebar