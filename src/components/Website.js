import React, { useReducer, useEffect } from "react";
import {Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Nav from "./Nav";
import Footer from './Footer'
import Pages from "./Pages";
import About from './About'
import Services from './Services'
import Completemenu from './Completemenu'
import Reservations from './Reservations'
import Login from './Login'


const Website = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }

    return(
            <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Pages/>} />
                
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed" element={<ConfirmedBooking/> } />
                <Route path="/about" element={<About/> } />
                <Route path="/services" element={<Services/> } />
                <Route path="/completemenu" element={<Completemenu/> } />
                <Route path="/reservations" element={<Reservations/> } />
                <Route path="/login" element={<Login/> } />
            </Routes>
        
            <Footer/>
            </>

    )
}

export default Website
