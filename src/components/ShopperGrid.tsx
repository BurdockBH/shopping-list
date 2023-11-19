import React, {useCallback} from "react";
import {Shopper} from "../viewmodels/Shopper";
import $ from 'jquery';

export const ShopperGrid = ({data, setShopper}: any) => {


    return (
        <div className="w-3/4 m-auto grid grid-cols-5 gap-4 text-center">
            {data != null && data.map((item: Shopper, index: number) => (
                <div onClick={() => {
                    selectShopper(index, data.length, setShopper, item)

                }} key={index}
                     id={"shopperItem-" + index}
                     className="grid-item-shopper bg-blue-500 hover:scale-110 hover:bg-indigo-500 duration-300 ... ">
                    {item.firstName + " " + item.lastName}
                </div>
            ))}
        </div>
    )
}

const selectShopper = (index: number, elements: any, setShopper: any, item: any) => {

    const shopperItem = $("#shopperItem-" + index)

    if (shopperItem.css("background-color") !== "rgb(99, 102, 241)") {
        setShopper(item)
        shopperItem.css("background-color", "rgb(99,102,241)")
    } else {
        setShopper(null)
        shopperItem.css("background-color", "rgb(59,130,246)")

    }
    for (let i = 0; i < elements; i++) {
        if (i !== index) {
            $("#shopperItem-" + i).css("background-color", "rgb(59,130,246)")
        }
    }

}