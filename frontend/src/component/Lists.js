import React, {Component} from 'react';
import axios from "axios";
import './Lists.css';
import Swal from 'sweetalert2';
import Plan from "./Plan";
import Acquisition from "./Acquisition";

class Lists extends Component {
    render() {
        if(this.props.params.id == 1) {
            var AcquisitionPlan = (
                <AcquisitionCreate/>
            )
        }
        else if(this.props.params.id == 2) {
            var AcquisitionPlan = (
                <AcquisitionList/>
            )
        }
        else if(this.props.params.id == 3) {
            var AcquisitionPlan = (
                <PlanCreate/>
            )
        }
        else {
            var AcquisitionPlan = (
                <Planlist/>
            )
        }
        return (
            <div>
                {AcquisitionPlan}
            </div>
        )
    }
}

class AcquisitionCreate extends Component {
    constructor(props) {
        super(props);
        this.createItem = this.createItem.bind(this);
    }
    componentDidMount() {
        this.inputItem = document.querySelector('#inputItem')
        this.inputYear = document.querySelector('#inputYear')
        this.inputSource = document.querySelector('#inputSource')
        this.inputField = document.querySelector('#inputField')
    }
    createItem(e) {
        e.preventDefault();
        axios.post("http://localhost:5000/create", {
            title: this.inputItem.value,
            year: this.inputYear.value,
            source: this.inputSource.value,
            field: this.inputField.value,
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.response)
            })
        this.inputItem.value = '';
        this.inputYear.value = '';
        this.inputSource.value = '';
        this.inputField.value = '';
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    }
    render() {
        return (
            <div>
                <form className="vha">
                    <label>분야&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='text' id='inputField' placeholder="카테고리를 입력해보세요." />
                    </label>
                    <br/>
                    <label>자격증명&nbsp;&nbsp;
                        <input type='text' id='inputItem' placeholder="자격증명을 입력해보세요.(필수입력)" />
                    </label>
                    <br/>
                    <label>취득일자&nbsp;&nbsp;
                        <input type='date' id='inputYear' />
                    </label>
                    <br/>
                    <label>발급처&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='text' id='inputSource' placeholder="발급처를 입력해보세요." />
                    </label>
                    <br/>
                    <button type='submit' onClick={this.createItem}>
                        add
                    </button>
                </form>
            </div>
        );
    }
}

class AcquisitionList extends Component {
    state = {
        Item: [],
    }
    callAPI() {
        axios.get("http://localhost:5000/list")
            .then(res => {
                this.setState({ Item: res.data });
            })
    }
    componentDidMount() {
        this.callAPI();
    }
    deleteAcq(id) {
        const acq = this.state.Item.filter(a => a._id !== id);
        this.setState({
            Item: acq
        })
    }
    render() {
        var doneList = this.state.Item.map((item, index) => (
            <li key={index}>
                <Acquisition acq={item} onDeleteAcq={this.deleteAcq.bind(this)} />
            </li>
        ))
        return (
            <div>
                <h3 className="dkffla">* 자격증명 클릭시 작성한 상세정보 확인가능</h3>
                <ul className="mylist">
                    {doneList}
                </ul>
            </div>
        );
    }
}

class PlanCreate extends Component {
    constructor(props) {
        super(props);
        this.createPlanItem = this.createPlanItem.bind(this);
    }
    componentDidMount() {
        this.planItem = document.querySelector('#planItem')
        this.planDate = document.querySelector('#planDate')
        this.planTips = document.querySelector('#planTips')
        this.planField = document.querySelector('#planField')
    }
    createPlanItem(e) {
        e.preventDefault();
        axios.post("http://localhost:5000/plancreate", {
            title: this.planItem.value,
            date: this.planDate.value,
            tips: this.planTips.value,
            field: this.planField.value,
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.response)
            })
        this.planItem.value = '';
        this.planDate.value = '';
        this.planTips.value = '';
        this.planField.value = '';
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }
    render() {
        return (
            <div>
                <form className="vha">
                    <label>분야&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='text' id='planField' placeholder="카테고리를 입력해보세요." />
                    </label>
                    <br/>
                    <label>자격증명&nbsp;&nbsp;
                        <input type='text' id='planItem' placeholder="자격증명을 입력해보세요.(필수입력)" />
                    </label>
                    <br/>
                    <label>시험일자&nbsp;&nbsp;
                        <input type='date' id='planDate' />
                    </label>
                    <br/>
                    <textarea id='planTips' placeholder="자격증 관련 정보 or Tips 을 기록해보세요." />
                    <br/>
                    <button type='submit' onClick={this.createPlanItem}>
                        add
                    </button>
                </form>
            </div>
        );
    }
}

class Planlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Plan: []
        }
    }
    callAPI() {
        axios.get("http://localhost:5000/plan")
            .then(res => {
                this.setState({ Plan: res.data });
            })
    }
    componentDidMount() {
        this.callAPI();
    }
    deletePlan(id) {
        const plan = this.state.Plan.filter(plan => plan._id !== id);
        this.setState({
            Plan: plan
        })
    }
    render() {
        const doneList = this.state.Plan.map((item, index) => (
            <li key={index}>
                <Plan plan={item} onDelete={this.deletePlan.bind(this)} />
            </li>
        ))
        return (
            <div>
                <h3 className="dkffla">* 자격증명 클릭시 작성한 상세정보 확인가능</h3>
                <ul className="mylist">
                    {doneList}
                </ul>
            </div>
        );
    }
}

export default Lists;