import React from 'react';

import { BrowserRouter as Link } from "react-router-dom";
import {axiosWithAuth} from '../Utils/axiosWithAuth'


const Dashboard = ()=> {



    const signOut = () => {
        axiosWithAuth().post('/logout')
        .then(res=> {
          localStorage.removeItem("token");
          window.location.href = "/";
        })
        .catch(err=> {
          console.log(err);
        })
      };
    return(
        <>
       <div className="container">
            <div className="row">
                <div className="col-md-8 dashboard_header">   
                  <Link href="#" className="list-group-item-sm list-group-item-action-sm p-3">My Dashboard</Link>
                  <Link href="#" className="list-group-item-sm list-group-item-action-sm p-3">My Profile</Link>
                  <Link  onClick={signOut} className="list-group-item-sm list-group-item-action-sm p-3">Sign Out</Link> </div>
            </div>
            <div className="row">
                <div className="col-md-8 p-4"> Welcome to the Dashboard of Seye Onigbinde  </div>
                <div className="col-6 col-md-4">
                    hhhhh
                 </div>
            </div>

            <div className="row">
                <div className="col-6 col-md-4 dashboard_section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio nibh, molestie ut sem non, fermentum imperdiet nisl. Duis ut metus ipsum. Etiam ac placerat tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse auctor sollicitudin metus venenatis semper. Quisque elementum tortor ut metus sodales, vitae pellentesque enim accumsan. Praesent efficitur lorem et elementum varius. </div>
                <div className="col-6 col-md-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio nibh, molestie ut sem non, fermentum imperdiet nisl. Duis ut metus ipsum. Etiam ac placerat tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse auctor sollicitudin metus venenatis semper. Quisque elementum tortor ut metus sodales, vitae pellentesque enim accumsan. Praesent efficitur lorem et elementum varius. </div>
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
            </div>

            <div class="row">
                <div className="col-6 dashboard_section">.col-6</div>
                <div className="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse odio nibh, molestie ut sem non, fermentum imperdiet nisl. Duis ut metus ipsum. Etiam ac placerat tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse auctor sollicitudin metus venenatis semper. Quisque elementum tortor ut metus sodales, vitae pellentesque enim accumsan. Praesent efficitur lorem et elementum varius. </div>
            </div>
        </div>

    </>
   );
}

export default Dashboard;