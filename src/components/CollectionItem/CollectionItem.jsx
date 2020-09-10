import React from "react";
import './_CollectionItem.scss'

const CollectionItem = ({ id,imageUrl, name, price }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="collection-footer">
                <span className='name'>{name.toUpperCase()}</span>
                <span className='price'>{price}</span>

            </div>

        </div>
    )

};
export default CollectionItem;