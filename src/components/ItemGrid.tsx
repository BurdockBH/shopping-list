import React, {useCallback} from "react";
import {Item} from "../viewmodels/Item";
import {Shoppers} from "../const/const";
import {postShoppingListData} from "../services/services";

export const ItemGrid = ({data, SetShoppingLists, ShoppingLists, Shopper, setStatusText}: any) => {

    const postShoppingList = useCallback((item: any) => {
        if (Shopper) {

            const postData = {
                shopper_id: Shopper.id,
                item_id: item.id
            }

            postShoppingListData(postData).then((response: any) => {

                let shoppingListIndex
                shoppingListIndex = ShoppingLists.findIndex((list: any) => list.shopper.firstName == Shopper.firstName && list.shopper.lastName == Shopper.lastName);
                const updatedShoppingLists = [...ShoppingLists];

                updatedShoppingLists[shoppingListIndex].items.push(item);

                SetShoppingLists(updatedShoppingLists);
                setStatusText("Added " + item.name + " to " + Shopper.firstName + "'s shopping list")
            }).catch(
                (error: any) => {
                    setStatusText("Error: " + error.response.data.message)
                }
            )

        }
    }, [ShoppingLists, Shopper])

    const addItemToShoppingList = (item: any) => {
        postShoppingList(item)
    };

    return (
        <div className="w-3/4 m-auto grid grid-cols-5 gap-4 text-center">
            {data != null && data.map((item: Item, index: number) => (
                <div key={index} className="grid-item bg-cyan-600">
                    {item.name + " " + item.price}
                    <br/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={
                                () => {
                                    addItemToShoppingList(item)
                                }
                            }>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}

