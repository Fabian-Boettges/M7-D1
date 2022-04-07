import {Container, Row, Col, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({

})

const Favorites = ({favorites}) => {



    return(
        <Container>
            <Row>
            
            {favorites && favorites.companies.map((company) => (
                <Col>
                <Card>
                    <Link to={`/${company}`}>
                        <Card.Body>{company}</Card.Body>
                    </Link>
                </Card>
                </Col>
            ))}

            
            </Row>

        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)