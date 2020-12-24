import React from 'react';
import { Link } from 'react-router';
import './ListLink.css'

const MenuItem = ({children, to}) => (
    <Link to={to} className="mi">
        {children}
    </Link>
)

const ListLink = () => {
    return (
        <div>
            <p id="ahrfhr">나의 자격증</p>
            <div className="li">
                <MenuItem to="/list/1">보유 자격증 추가</MenuItem>
                <MenuItem to="/list/2">자격증 목록</MenuItem>
                <MenuItem to="/list/3">자격증 계획 생성</MenuItem>
                <MenuItem to="/list/4">계획 목록</MenuItem>
            </div>
        </div>
    )
}

export default ListLink;