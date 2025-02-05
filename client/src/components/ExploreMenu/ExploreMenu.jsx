import React from 'react'
import './ExploreMenu.css'

import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = () => {
  return (
    <div className='explore-menu'  id='explore-menu'>
        <h1>Elplore our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eveniet nulla voluptate consectetur vero laudantium, provident eos numquam labore corrupti nam qui? Soluta porro at nobis quas magni, aliquam nemo?</p>
        <div className="explore-menu-list">
            {menu_list.map( (item) => {
              return(
                <div className="explore-menu-list-items">
                  <img src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
                </div>
              )
            })}
        </div>
        <hr className='hr-line'/>
    </div>
  )
}

export default ExploreMenu