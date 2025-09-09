import { NavLink, Link } from 'react-router-dom'
import '../Button/Button.css';

export default function Button({icon, link, title}) {
  return (
      <div className="button">
        <img src={icon}></img>
        <a className="cta" href={link} rel="noopener">
          {title}
        </a>
      </div>
  )
}
