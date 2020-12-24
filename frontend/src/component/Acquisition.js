import React from 'react';
import Swal from "sweetalert2";
import axios from "axios";
import './Acquisition.css';

class Acquisition extends React.Component {
    render() {
        const { acq } = this.props;
        return (
            <div>
                <button className="butttt" onClick={e => {
                    Swal.fire(
                        acq.title,
                        '분야:' + '\t'
                        + acq.field
                        + '<br/>취득일자:' + '\t'
                        + acq.year
                        + '<br/>발급처:' + '\t'
                        + acq.source
                    )
                }}>{acq.title}</button>
                <button className="baaa" onClick={e => {
                    axios.post("http://localhost:5000/delete", {
                        _id: acq._id,
                    })
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err.response)
                        })
                    this.props.onDeleteAcq(acq._id);
                }}>삭제
                </button>
                <button className="baaa" onClick={e => {
                    var modifyField = prompt('분야 변경', acq.field);
                    var modifyTitle = prompt('자격증명 변경', acq.title);
                    var modifyYear = prompt('취득일자 변경', acq.year);
                    var modifySource = prompt('발급처 변경', acq.source);
                    axios.post("http://localhost:5000/modify", {
                        _id: acq._id,
                        field: modifyField,
                        title: modifyTitle,
                        source: modifySource,
                        year: modifyYear,
                    })
                    window.location.replace("/list/2");
                }}>수정
                </button>
            </div>
        );
    }
}

export default Acquisition;