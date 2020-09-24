import React from 'react'
import { Card, Image, Icon, CardGroup } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const FilmCard = ({films, isReady}) => (

    <CardGroup itemsPerRow={4}>
        {!isReady ? 'Загрузки...' : films.map(film => (
                <Card key={film.id}>
                    <Image src={film.image} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{film.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{film.producer}</span>
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='rub' />
                            {film.price}
                        </a>
                    </Card.Content>
                </Card>
            ))
        }
    </CardGroup>
)

FilmCard.propTypes = {
    films: PropTypes.array,
    isReady: PropTypes.bool
}

FilmCard.defaultProps = {
    films: [],
    isReady: Boolean
}


export default FilmCard