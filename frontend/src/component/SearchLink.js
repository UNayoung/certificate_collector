import React from 'react';
import { Link } from "react-router";
import './SearchLink.css';

const Item = ({children, to}) => (
    <Link to={to} className="items">
        {children}
    </Link>
)

const SearchLink = () => {
    return (
        <div>
            <div className="item">
                <Item to="/search/1">건설기계운전</Item>
                <Item to="/search/2">건설배관</Item>
                <Item to="/search/3">건축</Item>
                <Item to="/search/4">경영</Item>
            </div>
            <div className="item">
                <Item to="/search/5">금속.재료</Item>
                <Item to="/search/6">금형.공작기계</Item>
                <Item to="/search/7">기계장비설비.설치</Item>
                <Item to="/search/8">기계제작</Item>
            </div>
            <div className="item">
                <Item to="/search/9">농업</Item>
                <Item to="/search/10">단조.주조</Item>
                <Item to="/search/11">도시.교통</Item>
                <Item to="/search/12">도장.도금</Item>
            </div>
            <div className="item">
                <Item to="/search/13">디자인</Item>
                <Item to="/search/14">목재.가구.공예</Item>
                <Item to="/search/15">보건.의료</Item>
                <Item to="/search/16">비파괴검사</Item>
            </div>
            <div className="item">
                <Item to="/search/17">사회복지.종교</Item>
                <Item to="/search/18">생산관리</Item>
                <Item to="/search/19">섬유</Item>
                <Item to="/search/20">숙박.여행.오락.스포츠</Item>
            </div>
            <div className="item">
                <Item to="/search/21">식품</Item>
                <Item to="/search/22">안전관리</Item>
                <Item to="/search/23">어업</Item>
                <Item to="/search/24">에너지.기상</Item>
            </div>
            <div className="item">
                <Item to="/search/25">영업.판매</Item>
                <Item to="/search/26">용접</Item>
                <Item to="/search/27">운전.운송</Item>
                <Item to="/search/28">위험물</Item>
            </div>
            <div className="item">
                <Item to="/search/29">의복</Item>
                <Item to="/search/30">이용.미용</Item>
                <Item to="/search/31">인쇄.사진</Item>
                <Item to="/search/32">임업</Item>
            </div>
            <div className="item">
                <Item to="/search/33">자동차</Item>
                <Item to="/search/34">전기</Item>
                <Item to="/search/35">전자</Item>
                <Item to="/search/36">정보기술</Item>
            </div>
            <div className="item">
                <Item to="/search/37">제과.제빵</Item>
                <Item to="/search/38">조경</Item>
                <Item to="/search/39">조리</Item>
                <Item to="/search/40">조선</Item>
            </div>
            <div className="item">
                <Item to="/search/41">채광</Item>
                <Item to="/search/42">철도</Item>
                <Item to="/search/43">축산</Item>
                <Item to="/search/44">토목</Item>
            </div>
            <div className="item">
                <Item to="/search/45">판금.제관.새시</Item>
                <Item to="/search/46">항공</Item>
                <Item to="/search/47">화공</Item>
                <Item to="/search/48">환경</Item>
            </div>
        </div>
    );
};

export default SearchLink;