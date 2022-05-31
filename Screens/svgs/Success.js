import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const Success = (props) => (
    <Svg
        width={88}
        height={88}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M80.667 44c0 20.25-16.418 36.667-36.667 36.667C23.751 80.667 7.334 64.249 7.334 44 7.334 23.75 23.75 7.333 44 7.333c20.25 0 36.667 16.418 36.667 36.667Z"
            fill="url(#a)"
        />
        <Path
            d="M63.437 26.77 38.5 51.698 28.23 41.435l-5.128 5.128L38.5 61.968l30.063-30.07-5.126-5.128Z"
            fill="#fff"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={44}
                y1={7.333}
                x2={44}
                y2={80.667}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#6B56CB" />
                <Stop offset={1} stopColor="#C250C1" />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default Success
