import { NavLink, Link } from 'react-router-dom'
import '../Button/Button.css';

export default function Button({icon, link, title}) {
  return (
      <div className="button">
        <a className="cta" href={link} rel="noopener">
        <img src={icon}></img>
          {title}
        </a>
      </div>
  )
}
