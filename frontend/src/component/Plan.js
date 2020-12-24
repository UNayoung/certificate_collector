import React from 'react';
import Swal from "sweetalert2";
import axios from "axios";
import './Plan.css';

class Plan extends React.Component {
    render() {
        const { plan } = this.props;
        return (
            <div>
                <button className="butt" onClick={e => {
                    var create = null;
                    create = plan.create.split('T');
                    var ti = null;
                    ti = create[1].substring(0,8);
                    Swal.fire(
                        plan.title,
                        '분야:' + '\t'
                        + plan.field
                        + '<br/>시험일자:' + '\t'
                        + plan.date
                        + '<br/>Tips or 관련 정보:' + '\t'
                        + plan.tips
                        + '<br/>목록생성일시:' + '\t'
                        + create[0] + '\t' + ti
                    )
                }}>{plan.title}</button>
                <button className="bpp" onClick={e => {
                    axios.post("http://localhost:5000/plandelete", {
                        _id: plan._id,
                    })
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err.response)
                        })
                    this.props.onDelete(plan._id);
                }}>삭제</button>
                <button className="bpp" onClick={e => {
                    var planModifyField = prompt('카테고리 변경', plan.field);
                    var planModifyTitle = prompt('자격증명 변경', plan.title);
                    var planModifyDate = prompt('시험일자 변경', plan.date);
                    var planModifyTips = prompt('Tips or 관련 정보 변경', plan.tips);
                    axios.post("http://localhost:5000/planmodify", {
                        _id: plan._id,
                        field: planModifyField,
                        title: planModifyTitle,
                        date: planModifyDate,
                        tips: planModifyTips,
                    })
                    window.location.replace("/list/4");
                }}>수정</button>
            </div>
        );
    }
}

export default Plan;