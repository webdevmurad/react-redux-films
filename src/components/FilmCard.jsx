import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const FilmCard = film => {
    const {image, title, producer, price, addToCart, addedCount} = film

    return (
        <Card>
            <Image src={image} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{producer}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Icon name='rub' />
                {price}
            </Card.Content>
            <Button onClick={addToCart.bind(this, film)}>
                {!addedCount ? 'Добавить в корзину' : `Добавлено в корзину (${addedCount})`}
            </Button>
        </Card>
    )
}
    
PropTypes.FilmCard = {
    film: PropTypes.object
}

FilmCard.defaultProps = {
    film: {}
}

export default FilmCard