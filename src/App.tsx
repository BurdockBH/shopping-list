import React, {useCallback, useEffect} from 'react';
import './App.css';
import {ShopperGrid} from "./components/ShopperGrid";
import {Items, Shoppers, ShoppingLists} from "./const/const";
import {Shopper} from "./viewmodels/Shopper";
import {ItemGrid} from "./components/ItemGrid";
import {Item} from "./viewmodels/Item";
import {ShoppingListComponent} from "./components/ShoppingListComponent";
import {ShoppingList} from "./viewmodels/ShoppingList";
import {
    deleteShoppingListsData,
    getItemsData,
    getShopperData,
    getShoppingListData,
    postShoppingListData
} from "./services/services";
import axios from "axios";
import {text} from "stream/consumers";
import {data} from "jquery";


function App() {
    const [shoppers, setShoppers] = React.useState<Shopper[] | null>(null);
    const [shopper, setShopper] = React.useState<Shopper | null>(null);
    const [shoppingLists, setShoppingLists] = React.useState<ShoppingList[] | null>(null);
    const [items, setItems] = React.useState<Item[] | null>(null)
    const [statusText, setStatusText] = React.useState<string>("");

    const SetShopper = (data: Shopper) => {
        setShopper(data);
    }

    const SetItems = (data: Item[]) => {
        setItems(data)
    }

    const SetStatusText = (data: string) => {
        setStatusText(data)
    }

    const SetShoppers = (data: Shopper[]) => {
        let shoppers2: Shopper[] = []
        for (let i = 0; i < data.length; i++) {
            shoppers2.push({
                id: data[i].id,
                firstName: data[i].firstName,
                lastName: data[i].lastName,
            })
        }
        setShoppers(shoppers2);
    }

    const SetShoppingLists = (data: ShoppingList[]) => {
        setShoppingLists(data)
    }

    const getShoppers = useCallback(() => {
        getShopperData().then((response: any) => {

            const shopperResponse = response.data.map((shopper: any) => {
                return {
                    id: shopper.id,
                    firstName: shopper.first_name,
                    lastName: shopper.last_name,
                }
            })
            SetShoppers(shopperResponse)

        })
    }, [shoppers])

    const getItems = useCallback(() => {
        getItemsData().then((response: any) => {
            const itemsResponse = response.data.map((item: any) => {
                let item2: Item = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    quantity: item.quantity,
                }
                return item2
            })
            SetItems(itemsResponse)
        })
    }, [items])


    useEffect(() => {
        getShoppers();
    }, []);


    useEffect(() => {
        getItems();
    }, []);

    const getShoppingList = useCallback(() => {
        getShoppingListData().then((response: any) => {
            let shoppingList2: ShoppingList[] = []

            if (shoppers) {
                for (let i = 0; i < shoppers.length; i++) {

                    shoppingList2.push({
                        id: i,
                        shopper: {
                            id: shoppers[i].id,
                            firstName: shoppers[i].firstName,
                            lastName: shoppers[i].lastName,
                        },
                        items: []
                    })
                }
                console.log(response)
                if (response.data) {
                    for (let i = 0; i < response.data.length; i++) {
                        if (items) {
                            let itemRes = items.filter((item: any) => {
                                return item.id === response.data[i].item_id
                            })
                            let shopperRes = shoppers.filter((shopper: any) => {
                                return shopper.id === response.data[i].shopper_id
                            })
                            shoppingList2.map((shoppingList: any) => {
                                if (shoppingList.shopper.id === shopperRes[0].id) {
                                    shoppingList.items.push(itemRes[0])
                                }
                            })
                        }
                    }
                }
            }
            SetShoppingLists(shoppingList2);
        }).catch((error) => {
            console.log(error);
        });
    }, [shoppers]);


    useEffect(() => {
        getShoppingList();
    }, [shoppers]);


    return (
        <div className="App">
            <h1 className="text-center text-4xl pb-6">Select User, then Add to Cart an item</h1>


            <div className="Shopper-list">
                <ShopperGrid setShopper={SetShopper} data={shoppers}/>
            </div>

            <br/>
            <div className="Item-list">
                <ItemGrid ShoppingLists={shoppingLists} Shopper={shopper} SetShoppingLists={SetShoppingLists}
                          data={items} setStatusText={SetStatusText}/>
            </div>

            <div className="button-status pd-96">


                <div className="delete-button mx-auto pt-5 text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                deleteShoppingListsData().then((response: any) => {
                                    setStatusText("Deleted all shopping lists")
                                    getShoppingList();
                                }).catch((error) => {
                                        setStatusText("Error: " + error.response.data.message)
                                    }
                                )
                            }}>
                        Delete all shopping lists
                    </button>
                </div>
                <div className="status-message mx-auto text-center mb-5">
                    <div className="status-message-text">
                        <p>{statusText}</p>
                    </div>
                </div>
            </div>

            <div className="Shopping-list">
                <ShoppingListComponent shoppingList={shoppingLists}/>
            </div>


        </div>
    );
}

export default App;
