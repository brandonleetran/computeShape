import React from 'react'
import Triangle from './Triangle'
import Circle from './Circle'
import Square from './Square'

export const Shape = (props) => {

    return (
        <div class="shape-home">
            <div class="shape-container">
                <Triangle/>
                <Circle/>
                <Square/>
            </div>
        </div>
    )
}

export default Shape