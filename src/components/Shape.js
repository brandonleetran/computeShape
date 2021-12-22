import React from 'react'
import Circle from './Circle'
import Square from './Square'
import Triangle from './Triangle'
import { useState, useEffect } from 'react'

export const Shape = () => {

    const [circle, setCircle] = useState(false);

    const [square, setSquare] = useState(false);

    const [triangle, setTriangle] = useState(false);

    useEffect(() => {
        document.getElementById("circle").style.borderColor = (circle) ? "#1DC690" : "#e0e0b6";
        document.getElementById("square").style.borderColor = (square) ? "#1DC690" : "#e0e0b6";
        document.getElementById("triangle").style.webkitTextStroke = (triangle) ? "5px #1DC690" : "5px #e0e0b6";
    }, [circle, square, triangle]);

    const circleHandler = () => {
        setCircle(!circle);
    }

    const squareHandler = () => {
        setSquare(!square);
    }

    const triangleHandler = () => {
        setTriangle(!triangle);
    }

    return (
        <div className="shape-home">
            <div className="shape-container">
                <div id="circle" onClick={circleHandler} />
                <div id="square" onClick={squareHandler} />
                <div id="triangle" onClick={triangleHandler}>&#9650;</div>
            </div>
        </div>
    )
}

export default Shape