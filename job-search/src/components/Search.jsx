import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { addFavoritesAction } from '../redux/actions'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    addFavorites: (company) => {
        dispatch(addFavoritesAction(company))
    },
})


const Search = (props) => {
    const [jobs, setJobs] = useState([])
    const [input, setInput] = useState("")
    const [selected, setSelected] = useState(false)


    useEffect ( () => {
        fetchJobs()
    }, [] )


    const fetchJobs = async (searchJobs) => {
        if(searchJobs){
            const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?search=${searchJobs}&limit=10')
            const data = await response.json()
            setJobs(data.data)
        } else {
            const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=10')
            const data = await response.json()
            setJobs(data.data)
        }
    }

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchJobs(input)
    }

    return(
        <Container>
            <Link to='/favorites'></Link>

            <h2> Search for your dream Job</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='type your search' value = {input} onChange={handleInput} />
            </form>

            <Row>
            {jobs.map((job) => (
                <Col>
                <Card className="cards">
                    <Card.Header>{job.category} <Button active onClick={(e) => {props.addFavorites(job.company_name)}}>Add to favorites</Button>   </Card.Header>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                        
                    </Card.Body>
                </Card>
                </Col>

            ) )}
                
            </Row>

        </Container>
    )

}



export default connect(mapStateToProps, mapDispatchToProps)(Search)