import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Col, Row } from "react-bootstrap";
import Campaigns from "./Campaigns";
import { useSelector } from "react-redux";
import axios from "axios";
import { config } from "../components/Constant";

// const ProjectItem = () => {
//     return(
//         <Row>
//             <Col md={6}>
//                <div className="project-item">
//                     <h2>Project Name</h2>
//                     <div className="project-item-content">
//                         <p>Status</p>
//                         <button className='custom-btn'>View</button>
//                     </div>
//                </div>
//             </Col>
//             <Col md={6}>
//                <div className="project-item">
//                     <h2>Project Name</h2>
//                     <div className="project-item-content">
//                         <p>Status</p>
//                         <button className='custom-btn'>View</button>
//                     </div>
//                </div>
//             </Col>
//         </Row>
//     )
// }
const AllProjects = () => {
    
  return (
    <Col md={12}>
      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          <Campaigns status="all"/>
        </Tab>

        <Tab eventKey="contact" title="Pending" >
            <Campaigns status="pending"/>
        </Tab>
        <Tab eventKey="completed" title="Completed">
            <Campaigns status="completed" />
        </Tab>
        <Tab eventKey="active" title="Active">
            <Campaigns status="active" />
        </Tab>
      </Tabs>
    </Col>
  );
};

export default AllProjects;
