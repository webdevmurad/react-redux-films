import React from 'react'
import { Menu, Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'



const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => {

    return (
        <Menu className="menu__filter" secondary>
            <Menu.Item
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
            >Все</Menu.Item>
            <Menu.Item
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}
            >Цена (дорогие)</Menu.Item>
            <Menu.Item
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}
            >Цена (дешевые)</Menu.Item>
            <Menu.Item
                active={filterBy === 'producer'}
                onClick={setFilter.bind(this, 'producer')}
            >Автор</Menu.Item>
            <Menu.Item>
                <Input onChange={e => setSearchQuery(e.target.value)} icon="search" value={searchQuery} placeholder="Введите для поиска ..."/>
            </Menu.Item>
        </Menu>
    )
}

PropTypes.Filter = {
    setFilter: PropTypes.func,
    filterBy: PropTypes.string,
    searchQuery: PropTypes.string,
    setSearchQuery: PropTypes.func
}

Filter.defaultProps = {
    setFilter: () => {},
    filterBy: '',
    searchQuery: '',
    setSearchQuery: () => {}
}

export default Filter