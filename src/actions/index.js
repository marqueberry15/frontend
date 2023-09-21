import axios from "axios";
import { config } from "../components/Constant";

const USER = sessionStorage.getItem("USER")
const userId = JSON.parse(USER)


const fetchCampaigns = () => async (dispatch) => {
   
    await axios.get(`${config.API_URL+'/listCampaign/?userId='+userId.userId}`).then(res => {
        if(res.status === 200){
            let allCampaign = res.data.data
            let pendingCampaign = []
            let completedCampaign = []
            let activeCampaign = []
            if(allCampaign){
                allCampaign.map(i => {
                    if(i.status === "pending"){
                        pendingCampaign.push(i)
                    }else if(i.status === "completed"){
                        completedCampaign.push(i)
                    }else if(i.status === 'active') {
                        activeCampaign.push(i)
                    }
                })}
           return  dispatch({type: "SET_USER_CAMPAIGN", payload: {allCampaign, pendingCampaign,completedCampaign, activeCampaign} })
        }
    }); 
}


const fetchBlogs = (id) => async (dispatch) => {
   
    await axios.get(`${config.API_URL+'/getBlog'}`).then(res => {
        if(res.status === 200){
            let blogs = res.data.data;
            let featured = res.data.Featured;
            let mostRecent = res.data.mostRecent;

            let allBlogs = [...blogs, ...featured, ...mostRecent];
            console.log(res)
            let blogDetails = []
            if(id != undefined){
                console.log(id )
                allBlogs.map((i)=>{
                    if(i.header === id){
                        blogDetails.push(i)
                    }
                })
            }
           
           return  dispatch({type: "SET_BLOG", payload: {blogs, featured, mostRecent, blogDetails} })
        }
    }); 
}


const setUser = (userObj) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const setUserID = (userObj) => {
    return {
        type: "SET_USER_ID",
        payload: userObj
    }
}

const setCampaign = (userObj) => {
    return {
        type: "SET_USER_CAMPAIGN",
        payload: userObj
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

const campaignCreated = () => {
    return {
        type: "CAMPAIGN_CREATED"
    }
}


const currentPage = (str) => {
    return {
        type: "CURRENT_PAGE",
        payload: str
    }
}
export  {
    setUser,
    setUserID,
    setCampaign,
    logOut,
    currentPage,
    fetchCampaigns,
    fetchBlogs,
    campaignCreated
}