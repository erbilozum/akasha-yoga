import React from 'react'
import { useLottie } from "lottie-react";
import Lottie from "lottie-react";
import header_1 from "./header_1.json"

const style = {
    height: 300,
};
const Test = () => {

    const options = {
        animationData: header_1,
        loop: true,
        autoplay: true,
    };
    const { View } = useLottie(options, style);
    return View;

}

export default Test