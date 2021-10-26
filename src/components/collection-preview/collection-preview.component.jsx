import React, { Component } from 'react'
import '../collection-preview/collection-preview.styles.scss'
import ShopPage from '../../pages/shop/shop-page.component'
import SHOP_DATA from '../../pages/shop/shop.data'
import { CollectionItem } from '../collection-item/collection-item.component'
 
const CollectionPreview = ({title,items}) => (
     <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
            <div className="preview">
                {items.filter((item,idx)=> idx<4).map(({id,...otherItemProps}) => 
                (<CollectionItem key={id} {...otherItemProps}/>))}
            </div>
       </div>    
)

export default CollectionPreview
 