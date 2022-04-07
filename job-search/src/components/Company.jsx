import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'

const Company = () => {
    const {company} = useParams()
    const [jobs, setJobs] = useState([])


    useEffect(() => {
        fetchJobs()
    }, [] )

    const fetchJobs = async () => {
        const response = await fetch ('https://strive-jobs-api.herokuapp.com/jobs?company=${company}')
        const data = await response.json()
        setJobs(data.data)

        console.log(data.data)
    }

    return (
        <Container>

            <h2> {company}</h2>
            
            <Row>
            {jobs.map((job) => (
                <Col>
                <Card className="cards">
                    <Card.Header>{job.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        
                        
                    </Card.Body>
                </Card>
                </Col>

            ) )}
                
            </Row>

        </Container>
    )


}

export default Company