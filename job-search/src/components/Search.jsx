import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'




const Search = () => {
    const [jobs, setJobs] = useState([])
    const [input, setInput] = useState("")


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

            <h2> Search for your dream Job</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='type your search' value = {input} onChange={handleInput} />
            </form>

            <Row>
            {jobs.map((job) => (
                <Col>
                <Card className="cards">
                    <Card.Header>{job.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>

            ) )}
                
            </Row>

        </Container>
    )

}



export default Search