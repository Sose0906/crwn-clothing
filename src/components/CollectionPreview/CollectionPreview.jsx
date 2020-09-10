import React from "react";
import './_CollectionsPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.filter((itm, idx) => idx < 4).map(({ id, ...otherProps }) =>
                        (<CollectionItem key={id} {...otherProps}/>)
                    )
                }

            </div>
        </div>
    )


};
export default CollectionPreview;