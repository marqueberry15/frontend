import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { config } from "../components/Constant";
import axios from "axios";
import DefaultImg from "../images/blog-default.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../actions";
import { Formik } from "formik";


const BlogItem = ({ item, isFeatured,recent }) => {
  return (
    
      <div className={isFeatured ? "blog-featured blog-tile" : "blog-tile"}>
        {isFeatured && <p className="isFeatured">Featured Post</p>}
        
        <Link to={`/blog/${item?.header}`} className={recent && "blog-recent"}>
          <div className="blog-img">
            {item?.image === null ? (
              <img src={DefaultImg} alt="" />
            ) : (
              <img src={item?.image} alt="" />
            )}
          </div>

          <div>
            <p className="blog-category">{item?.category}</p>
            <h6 className="blog-title">{item?.header}</h6>
            <p className="blog-created">{item?.created_on.split(" ")[0]}</p>
          </div>
        </Link>
      </div>
  );
};
const Blog = () => {
  const content = useSelector((state) => state.blog?.blogs);
  const featured = useSelector((state) => state.blog?.featured);
  const mostRecent = useSelector((state) => state.blog?.mostRecent);

  const [blog, setBlog] = useState([]);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(3);
  const loadMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    setBlog(content);
    console.log(content);
  }, [content, blog]);


  return (
    <section className="blog">
      <h2>Blog</h2>
      <Container>
        <Row>
          <Col md={9}>
            <BlogItem item={featured && featured[0]} isFeatured={true} />
          </Col>
          <Col md={3}>
          <p className="isFeatured">Recent Post</p>
            <Row>
              {
                mostRecent && mostRecent.map(i => (
                    <Col md={12}>
                         <BlogItem item={i} recent={true} />
                     </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div className="blog-seperator"></div>
            </Col>
        </Row>
        <Row className="all-blogs">
          {blog?.slice(0, visible).map((i) => (
           <Col md={4}>
                 <BlogItem item={i} />
           </Col>
          ))}
          <Col md={12} className="text-center">
            {blog?.length > visible ? (
              <button className="custom-btn" onClick={loadMoreItems}>
                Load More
              </button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
