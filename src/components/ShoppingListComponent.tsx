import React from 'react';
import {ShoppingList} from "../viewmodels/ShoppingList";
import {Item} from "../viewmodels/Item";

export const ShoppingListComponent = ({shoppingList}: any) => {
    return (

        <div className="Shopping-list pt-16 w-3/4 m-auto grid grid-cols-5 gap-4 text-center">
            {shoppingList !== null &&
                shoppingList.map((item: ShoppingList, index1: any) => (
                    <div key={index1}>
                        <h3>
                            {item.shopper.firstName + "'s shopping list"}
                        </h3>
                        <div className={"boxed-list-" + item.shopper.firstName}>
                            {item.items.map((item: Item, index2: any) => (
                                <div key={index2} className="boxed-list-item">
                                    {item.name}
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
        </div>
    );
};

