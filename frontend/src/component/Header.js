import { Link } from "react-router";
import './Header.css';
import medal from '../medal.png';

const MenuItem = ({children, to}) => (
    <Link to={to} className="menu-item">
        {children}
    </Link>
);

const Header = () => {
    return (
        <div>
            <div className="logo">
                <img src={medal} className="medal"/>
                자격증 Collector
                <img src={medal} className="medal"/>
            </div>
            <div className="menu">
                <MenuItem to={'/'}>Home</MenuItem>
                <MenuItem to={'/search'}>Search</MenuItem>
                <MenuItem to={'/list'}>List</MenuItem>
            </div>
        </div>
    );
};

export default Header;