import veranda from "../Img/veranda.jpg";
import lovetime from "../Img/lovetime.jpg";
import pizza from '../Img/pizza.jpg'
import nature from '../Img/nature1.jpg'
import shaurma from '../Img/shaurma.jpg'
import compot from '../Img/compot.jpg'

const Places = {
    cafe1: {
        title: "VERANDA",
        address:"г. Махачкала, пр-т Расула Гамзатова 18",
        img: veranda,
        description: {
            title: "О заведении",
            text: 'что в этом ресторане можно съесть'
        },
        discounts: {
            discount1:{
                name:"Шаурмище",
                img:shaurma,
                date: "16.10.21-16.11.21",
                description:"Шаурма Бесплатно",
            },
            discount2:{
                name:"Пиццище",
                img:pizza,
                date: "16.10.21-16.11.21",
                description:"Пицца Бесплатно то же че",
            },
        },
        new: false,
        worktime: {
            from: 10,
            to: 23
        }

    },
    cafe2: {
        title: "Love Time",
        img: lovetime,
        description: {
            title: "О заведении",
            text: 'что в этом ресторане можно съесть'
        },
        discounts: {
            discount1:{
                name:"Компотище",
                img:compot,
                date: "19.10.21-19.12.21",
                description:"Компот Нахаляву",
            },
            discount2: {
                name: "Природа",
                img: nature,
                date: "16.10.21-16.11.21",
                description: "Природа Бесплатно",
            }
        },
        new: false,
        worktime: {
            from: 9,
            to: 22
        }
    },
    cafe3: {
        title: "Love Time",
        img: lovetime,
        description: {
            title: "О заведении",
            text: 'что в этом ресторане можно съесть'
        },
        discounts: {
            discount1:{
                name:"Компотище",
                img:compot,
                date: "19.10.21-19.12.21",
                description:"Компот Нахаляву",
            },
            discount2: {
                name: "Природа",
                img: nature,
                date: "16.10.21-16.11.21",
                description: "Природа Бесплатно",
            }
        },
        new: false,
        worktime: {
            from: 9,
            to: 22
        }
    },

}
export default Places