import { BiHomeAlt2 } from 'react-icons/bi'

import style from './Navbar.module.css'

export function Navbar() {
  return (
    <header className={style.navbar}>
      <h3>Navbar</h3>

      <nav>
        <ul className={style.navlinks}>
          <li><a href="/">
            <BiHomeAlt2 size='1rem' />
          </a></li>
          <li><a href="/">
            About
          </a></li>
          <li><a href="/">
            Contact
          </a></li>
        </ul>
      </nav>
    </header>
  )
}