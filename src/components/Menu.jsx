import React from 'react'
import { Menu, Popup , List, Button, Image } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const CartComponent = ({title, image, id, removeFromCart}) => (
    <List divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
)

PropTypes.CartComponent = {
    title: PropTypes.string,
    image: PropTypes.number,
    id: PropTypes.number,
    removeFromCart: PropTypes.func
}

CartComponent.defaultProps = {
    title: '',
    image: '',
    id: null,
    removeFromCart: () => {}
}

const MenuComponent = ({totalPrice, count, items}) => (

    <Menu>
        <Menu.Item name='browse'> Магазин книг </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name='signup'>
                Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб
            </Menu.Item>

            <Popup
                trigger={
                    <Menu.Item name='help'>
                        Корзина (<b>{count}</b>)
                    </Menu.Item>
                }
                content={items.map(film => (
                    <CartComponent key={film.id} {...film}/>
                ))}
                on="click"
                hideOnScroll
            />
        </Menu.Menu>
    </Menu>
)
export default MenuComponent

PropTypes.MenuComponent = {
    totalPrice: PropTypes.number,
    count: PropTypes.number,
    items: PropTypes.array,
}

MenuComponent.defaultProps = {
    totalPrice: null,
    count: null,
    items: [],
}