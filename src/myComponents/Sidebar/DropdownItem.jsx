import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function DropdownItem(props) {
  const { onClick, setActive, href, title } = props;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(href)) setActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <li onClick={onClick}>
      <Link
        to={href}
        className={`group -ml-px  border-l px-5 py-1 hover:border-slate-800 hover:text-slate-900 ${
          location.pathname.includes(href)
            ? "border-slate-800 text-slate-900"
            : "border-slate-200 text-slate-500"
        }`}
      >
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default DropdownItem;
