import React, { useState, useEffect }  from 'react'
import { Link, useHistory, useRouteMatch, useLocation,  useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import Swal from 'sweetalert2'
import axios from 'axios';
import { getLinksSpecific } from '../../../../Apis/apiForClassLinks';


function ListOfLinksForLiveClass() {
    let {id} = useParams()
    const [items, setItems] = useState([])
    const location = useLocation();
    const history = useHistory()
    var serialNumber = 0

    useEffect(() => {
      const fetchItems = async function() {
          console.log(location.state)
        const links = await getLinksSpecific(location.state.grade, location.state.subject)
        console.log(links)
        setItems(links)
      }
      fetchItems()
    }, []);
    const Swal = require('sweetalert2')


    const handlingSerialNumber = () => {
        serialNumber = serialNumber + 1
        return(
            <td>{serialNumber}</td>
        )
    }
    const handleJoinClass = (data) => {
        window.location.href = data.link
    }
    return (
                    <>
        <div>
         {/* Content Wrapper */}
<div id="content-wrapper" className="d-flex flex-column mt-5 pt-4">
{/* Main Content */}
<div id="content">
  {/* Begin Page Content */}
  <div className="containerBlackDashboard-fluid">
    {/* Page Heading */}
    <h1 className="h3BlackDashboard mb-2 text-gray-800">Live Classes</h1>
    
    {/* DataTales Example */}
    <div className="card shadow mb-4">
      <div className="card-header py-3" style = {{color : "white", backgroundColor : "#a98799"}}>
        <h6 className="m-0 font-weight-bold text-white">List Of {/*{location.state.gender}*/} Live Classes</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="tableBlackDashboard table-bordered text-center"  width="100%" cellSpacing={0}>
          <thead>
                            <tr>
                              <th>Serial Number</th>
                              <th>Teacher Name</th>
                              <th>Course</th>
                              <th>Grade</th>
                              <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            items.map(links => (
                                <tr key={links._id}>
                                 {handlingSerialNumber()}
                                <td>
                                    {links.teacherName}
                                </td>
                                <td>
                                    {links.subject}
                                </td>
                                <td>
                                    {links.grade}
                                </td>
                                <td>
                                  <div className="buttonNewTheme mt-3 mb-3 text-center">
                                    <button className="btnSass play-pause buttonSass" style = {{fontWeight : 'bold', height:"108px", width: "108px"}}  onClick={() => handleJoinClass(links)}>Join Class</button>
                                  </div>
                                </td>
                              
                                </tr>
                            ))
                            }
                        </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {/* /.containerBlackDashboard-fluid */}
</div>
{/* End of Main Content */}
{/* Footer */}
<footer className="sticky-footer bg-white">
  <div className="containerBlackDashboard my-auto">
    <div className="copyright text-center my-auto">
      <span></span>
    </div>
  </div>
</footer>
{/* End of Footer */}
</div>
{/* End of Content Wrapper */}
{/* End of Page Wrapper */}
        </div>
      </>
    )
}

export default ListOfLinksForLiveClass
