import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaigns } from '../actions';
import { Row, Col, Modal } from 'react-bootstrap';


const ModalC =({campaignDetail, show, handleClose}) => {

    return (
        <Modal show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>{campaignDetail.campaign_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>
                            <span className='modal-key'>Product Id: </span>
                            <span className='modal-value'>{campaignDetail.id}</span>
                        </li>
                        <li>
                            <span className='modal-key'>Product Name: </span>
                            <span className='modal-value'>{campaignDetail.brand_name}</span>
                        </li>
                        <li>
                            <span className='modal-key'>Created On: </span>
                            <span className='modal-value'>{campaignDetail.created_on}</span>
                        </li>
                        <li>
                            <span className='modal-key'>Description: </span>
                            <span className='modal-value'>{campaignDetail.description}</span>
                        </li>
                        <li>
                            <span className='modal-key'>Logo: </span>
                            <span className='modal-value'>{campaignDetail.logo}</span>
                        </li>
                        <li>
                            <span className='modal-key'>No of meme needed: </span>
                            <span className='modal-value'>{campaignDetail.no_of_meme_needed}</span>
                        </li>
                        <li>
                            <span className='modal-key'>Description: </span>
                            <span className='modal-value'>{campaignDetail.description}</span>
                        </li>
                        <li>
                            <span className='modal-key'>Time Limit: </span>
                            <span className='modal-value'>{campaignDetail.time_limit}</span>
                        </li>
                        <li>
                            <span className='modal-key'>Status: </span>
                            <span className='modal-value'>{campaignDetail.status}</span>
                        </li>
                        
                    </ul>
                </Modal.Body>
            </Modal>
    )
}
const Campaigns = ({status}) => {
    let  allCampaign = useSelector(state => state.campaign.allCampaign);
    let  pendingCampaign = useSelector(state => state.campaign.pendingCampaign)
    // let  pendingCampaign = useSelector(state => state.campaign.pendingCampaign)
    let data
   if(status === "all" || status === undefined){
        data = allCampaign
   }else if (status === "pending"){
    data = pendingCampaign
   }else if (status === "completed") {
    data = []
   }
    const [campaignDetail, setCampaignDetail] = useState({})
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    
    const handleClose = (e) => {
        setShow(false)
    }
    useEffect(() => {
        dispatch(fetchCampaigns())
    },[dispatch])



      const modal = (i) => {
        setShow(true)
        setCampaignDetail(i)

      }
    return (
        <>
         { show && <ModalC campaignDetail={campaignDetail} show={show} handleClose={handleClose}/>}
        <Col sm={12}>
            <Row>
                {
                    data !== undefined && data.map(i => (
                        <Col sm={6} md={3}>
                        <div className="dashboard-count">
                            <div className="dashboard-count-heading">
                                <p>{i.campaign_name}</p>
                            </div>
                            <div className="dashboard-count-content status">
                                <p>Status: {i.status}</p>
                                <a className='custom-btn' onClick={() => modal(i)}>View</a>
                            </div>
                        </div>
                    </Col>
                    ))
                }
            </Row>
        </Col>
        </>
        // <div className="campaign-table">
        //     <BootstrapTable
        //         bootstrap4
        //         keyField="id"
        //         data={data !== undefined && (status != undefined ? data.pendingCampaign : data.allCampaign)}
        //         columns={columns}
        //         pagination={paginationFactory({ sizePerPage: 5 })}
        //     />
        // </div>
    )
}

export default Campaigns;