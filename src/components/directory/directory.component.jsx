import React,{ Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             sections : [
                 {
                     title : 'HATS',
                     imageUrl : 'https://i.ibb.co/cvpntL1/hats.png',
                     id:1,
                     linkUrl : "hats"
                 },
                 {
                    title : 'JACKETS',
                    imageUrl : 'https://i.ibb.co/px2tCc3/jackets.png',
                    id:2,
                    linkUrl : "jackets"
                  },
                  {
                    title : 'SNEAKERS',
                    imageUrl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3,
                    linkUrl : "sneakers"
                  },
                  {
                    title : 'MEN',
                    imageUrl : 'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large',
                    id:4,
                    linkUrl : "men"
                },
                {
                    title : 'WOMEN',
                    imageUrl : 'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    id:5,
                    linkUrl : "women"
                }
             ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {/* {this.state.sections.map(({title,imageUrl,id,size}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)} */}
                {this.state.sections.map(({id,...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps} />)}
            
            </div>
        )
    }
    
}

export default Directory