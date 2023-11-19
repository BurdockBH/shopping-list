import {Shopper} from "../viewmodels/Shopper";

export const Shoppers: Shopper[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Smith"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith"
    },
    {
        id: 3,
        firstName: "John",
        lastName: "Doe"
    },
    {
        id: 4,
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        id: 5,
        firstName: "Edo",
        lastName: "Cicak"
    }
];

export const Items = [
    {
        id: 1,
        name: "Apple",
        price: 1.99,
        description: "A red, delicious apple.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
        quantity: 1
    },
    {
        id: 2,
        name: "Banana",
        price: 0.99,
        description: "A yellow banana.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/265px-Bananas_white_background_DS.jpg",
        quantity: 1
    },
    {
        id: 3,
        name: "Orange",
        price: 1.49,
        description: "A juicy orange.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orange-Whole-%26-Split.jpg/265px-Orange-Whole-%26-Split.jpg",
        quantity: 1
    },
    {
        id: 4,
        name: "Pineapple",
        price: 2.99,
        description: "A tropical pineapple.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/265px-Pineapple_and_cross_section.jpg",
        quantity: 1
    },
    {
        id: 5,
        name: "Strawberry",
        price: 0.99,
        description: "A sweet strawberry.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/265px-PerfectStrawberry.jpg",
        quantity: 1
    }
];

export const ShoppingLists = [
    {
        id: 1,
        shopper: Shoppers[0],
        items: []
    },
    {
        id: 2,
        shopper: Shoppers[1],
        items: []
    },
    {
        id: 3,
        shopper: Shoppers[2],
        items: []
    },
    {
        id: 4,
        shopper: Shoppers[3],
        items: []
    },
    {
        id: 5,
        shopper: Shoppers[4],
        items: []
    }
];
