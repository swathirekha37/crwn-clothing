import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component{
    constructor(props){
        super(props)
    
        this.state = {
             collections : SHOP_DATA
        }
        console.log('contruction rendered')
        console.log(this.state.collections)
    }
    render(){
        const {collections} = this.state
        console.log(SHOP_DATA)
     return(
         <div className="shop-page">
            {/* {collections.map((collection) => <CollectionPreview key={collection.id} title={collection.title} items={collection.items} /> )} */}
            {collections.map(({id,...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps}/>))}
         </div>
     )  
    }
}

export default ShopPage