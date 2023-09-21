import React,{useState, useEffect} from "react";
import {Col,Row} from 'react-bootstrap';
import { config } from "../components/Constant";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns, currentPage, campaignCreated } from "../actions";


const DashboardHome = () => {
    const USER = sessionStorage.getItem("USER")
    const content = useSelector(state => state.campaignCreated)
    const dispatch = useDispatch();
    const data = useSelector(state => state.campaign)
    const [campaignCreated,setCampaignCreated] = useState()
    const handleOnClick = (e) => {
        dispatch(currentPage(e))
      };
  
    useEffect(() => {
        dispatch(fetchCampaigns())
    },[dispatch])


    useEffect(() => {
        setCampaignCreated(content);

      }, [content, campaignCreated]);

    return( 
        <>
        <Col sm={12}>
            <div className="dashboard-welcome">
                <h3>Welcome {JSON.parse(USER).first_name}</h3>
                <p>Here check latest updates on your project</p>
            </div>
        </Col>
        <Col sm={12}>
            <Row>
                <Col sm={6} md={3}>
                    <div className="dashboard-count">
                        <div className="dashboard-count-heading">
                            <p>Total no. of campaigns</p>
                        </div>
                        <div className="dashboard-count-content">
                            <p>{data?.allCampaign?.length}</p>
                            <Link to="/dashboard/total-campaigns" onClick={() => handleOnClick("Total Campaign")}>View All</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={3}>
                    <div className="dashboard-count">
                        <div className="dashboard-count-heading">
                            <p>Pending Approvals</p>
                        </div>
                        <div className="dashboard-count-content">
                            <p>{data?.pendingCampaign?.length}</p>
                            <Link to="/dashboard/pending-approvals" onClick={() => handleOnClick("Pending Approvals")} >View All</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={3}>
                    <div className="dashboard-count">
                        <div className="dashboard-count-heading">
                            <p>Preview</p>
                        </div>
                        <div className="dashboard-count-content">
                            <p>0</p>
                            <Link to="/dashboard/campaigns">View All</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={6} md={3}>
                    <div className="dashboard-count">
                        <div className="dashboard-count-heading">
                            <p>Download Memes</p>
                        </div>
                        <div className="dashboard-count-content">
                            <p>0</p>
                            <Link to="/dashboard/campaigns">View All</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
        </>
    )
}

export default DashboardHome;