import { Link, useLocation } from "react-router-dom";

function Menu(props) {
  const { onClick, href, children } = props;
  const location = useLocation();
  return (
    <li onClick={onClick}>
      <Link
        to={href}
        className={`flex items-center rounded-lg p-2 ${
          location.pathname === href
            ? "bg-slate-200 text-slate-900"
            : "text-slate-500"
        } hover:bg-slate-200 hover:text-slate-900`}
      >
        {children}
      </Link>
    </li>
  );
}

export default Menu;
