import React, {useEffect, useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import DefaultImg from '../images/blog-default.jpeg';
import { SocialLinks } from '../components/SocialLinks';
import { fetchBlogs } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'

const BlogDetail = () => {
    const blogsDetails = useSelector(state => state.blog?.blogDetails)
    const [content, setContent] = useState([])
    let dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(fetchBlogs(id))
    },[dispatch])

    useEffect(() => {
        setContent(blogsDetails && blogsDetails[0])
    },[content,blogsDetails])
   

    return(
        <section className="blog-detail">
            <div className="blog-detail-path">
                <p>Home/Blog/{content && content?.header}</p>
                
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col sm={12}>
                        <div className="blog-detail-heading">
                            <h1>{content?.header}</h1>
                            <p>Posted On {content?.created_on?.split(" ")[0]}</p>
                        </div>
                    </Col>
                    <Col md={8}>
                    <div className="blog-detail-image">
                        {
                                content?.image === null ? <img src={DefaultImg} alt=""/> : <img src={content?.image} alt="" />
                            }
                        </div>
                        <div className="blog-detail-description">
                            <p>
                                {content?.description}
                            </p>
                        </div>
                        <div className='blog-detail-share text-center'>
                            <h3>Don’t forgot to share this post!</h3>
                            <ul>
                                <SocialLinks share={true} url={window.location.href}/>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BlogDetail;