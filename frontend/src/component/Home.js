import React, { useEffect, useReducer } from 'react';
import './Home.css'
import axios from "axios";
import star from '../stars.jpg';
import logo from '../load.gif';

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function Home() {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchUsers = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const response = await axios.get(
                'http://localhost:5000/home'
            );
            dispatch({ type: 'SUCCESS', data: response.data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const { loading, data: users, error } = state;

    if (loading) return <div className="load"><img className="loading" src={logo}/><h2>데이터를 가져오는 중입니다. 잠시만 기다려주세요.</h2></div>;
    if (error) return <div>에러가 발생했습니다. 잠시후 다시 이용바랍니다.</div>;
    if (!users) return null;
    return (
        <div>
            <h1 id="welcome">
                Dreams come true
            </h1>
            <div className="starparent">
                <img src={star} className="star"/>
            </div>
        </div>
    )
}

export default Home;