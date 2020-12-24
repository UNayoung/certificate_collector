import React, {Component} from 'react';
import axios from "axios";
import './Post.css'
import Swal from "sweetalert2";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            click: false,
        }
    }
    callAPI() {
        axios.get("http://localhost:5000/post")
            .then(res => {
                this.setState({
                    list: res.data
                });
                console.log(this.state.list);
            })
    }
    componentDidMount() {
        this.callAPI();
    }
    render() {
        if(this.props.params.id == 1) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "건설기계운전";});}
        else if(this.props.params.id == 2) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "건설배관";});}
        else if(this.props.params.id == 3) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "건축";});}
        else if(this.props.params.id == 4) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "경영";});}
        else if(this.props.params.id == 5) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "금속.재료";});}
        else if(this.props.params.id == 6) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "금형.공작기계";});}
        else if(this.props.params.id == 7) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "기계장비설비.설치";});}
        else if(this.props.params.id == 8) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "기계제작";});}
        else if(this.props.params.id == 9) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "농업";});}
        else if(this.props.params.id == 10) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "단조.주조";});}
        else if(this.props.params.id == 11) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "도시.교통";});}
        else if(this.props.params.id == 12) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "도장.도금";});}
        else if(this.props.params.id == 13) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "디자인";});}
        else if(this.props.params.id == 14) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "목재.가구.공예";});}
        else if(this.props.params.id == 15) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "보건.의료";});}
        else if(this.props.params.id == 16) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "비파괴검사";});}
        else if(this.props.params.id == 17) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "사회복지.종교";});}
        else if(this.props.params.id == 18) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "생산관리";});}
        else if(this.props.params.id == 19) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "섬유";});}
        else if(this.props.params.id == 20) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "숙박.여행.오락.스포츠";});}
        else if(this.props.params.id == 21) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "식품";});}
        else if(this.props.params.id == 22) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "안전관리";});}
        else if(this.props.params.id == 23) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "어업";});}
        else if(this.props.params.id == 24) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "에너지.기상";});}
        else if(this.props.params.id == 25) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "영업.판매";});}
        else if(this.props.params.id == 26) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "용접";});}
        else if(this.props.params.id == 27) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "운전.운송";});}
        else if(this.props.params.id == 28) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "위험물";});}
        else if(this.props.params.id == 29) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "의복";});}
        else if(this.props.params.id == 30) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "이용.미용";});}
        else if(this.props.params.id == 31) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "인쇄.사진";});}
        else if(this.props.params.id == 32) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "임업";});}
        else if(this.props.params.id == 33) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "자동차";});}
        else if(this.props.params.id == 34) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "전기";});}
        else if(this.props.params.id == 35) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "전자";});}
        else if(this.props.params.id == 36) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "정보기술";});}
        else if(this.props.params.id == 37) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "제과.제빵";});}
        else if(this.props.params.id == 38) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "조경";});}
        else if(this.props.params.id == 39) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "조리";});}
        else if(this.props.params.id == 40) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "조선";});}
        else if(this.props.params.id == 41) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "채광";});}
        else if(this.props.params.id == 42) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "철도";});}
        else if(this.props.params.id == 43) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "축산";});}
        else if(this.props.params.id == 44) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "토목";});}
        else if(this.props.params.id == 45) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "판금.제관.새시";});}
        else if(this.props.params.id == 46) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "항공";});}
        else if(this.props.params.id == 47) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "화공";});}
        else if(this.props.params.id == 48) {var filterArray = this.state.list.filter(function (value, index, arr) {
            return value.category === "환경";});}

        const list = filterArray.map((item, index) => (
            <li key={index}>
                <span>{item.name}</span>
                &nbsp;
                <button className="mybutton" onClick={e => {
                    e.preventDefault();
                    console.log(item.name);
                    console.log(item.category);
                    axios.post("http://localhost:5000/plancreatetwo", {
                        title: item.name,
                        field: item.category,
                    })
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }}>Add to Planning List</button>
                &nbsp;
                <a type="button" href="http://www.q-net.or.kr/crf005.do?id=crf00501&gSite=Q&gId=" target="_blank">상세정보보기</a>
            </li>
        ))
        return (
            <div>
                <ul className="searchitem">
                    {list}
                </ul>
            </div>
        );
    }
}

export default Post;