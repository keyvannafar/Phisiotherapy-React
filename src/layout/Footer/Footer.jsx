import { Link, useLocation } from "react-router-dom";


function SetFooterMenu({ text, icon, id, path }) {


  return (
    <Link
      className={`footerNav-link`}
      id={id}
      aria-current="page"
      to={`${path}`}
    >
      <span>
          {text}
      </span>
    </Link>
  );
}

export default SetFooterMenu;
