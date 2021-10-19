import React from "react";
import DiscountsList from "./DiscountList";
import Places from "./Store";


const Discounts = (props) => {
    return (
        <div>
            {Object.values(Places).map(value => <DiscountsList key={value}
                value={value}/>)}
        </div>
    )
}

export default Discounts