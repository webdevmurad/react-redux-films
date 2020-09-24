import React from 'react'
import { Menu } from 'semantic-ui-react'

const MenuComponent = () => (
    <Menu>
        <Menu.Item
          name='browse'
        //   active={activeItem === 'browse'}
        //   onClick={this.handleItemClick}
        >
          Магазин книг
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item
                name='signup'
                // active={activeItem === 'signup'}
                // onClick={this.handleItemClick}
            >
                Итого: &nbsp; <b>0</b> руб
            </Menu.Item>

            <Menu.Item
                name='help'
                // active={activeItem === 'help'}
                // onClick={this.handleItemClick}
            >
                Корзина (<b>0</b>)
            </Menu.Item>
        </Menu.Menu>
    </Menu>
)

export default MenuComponent