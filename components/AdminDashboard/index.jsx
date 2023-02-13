import React from 'react'
import Layout from '../Layout'
import Booking from './booking'
// import Dashboard from './dash'
import Services from './cancelled/bookingservices'
import Review from './reviews/reviews'

function UserDashoard() {
  return (
    <div>
        <Layout>
           <Booking/>
          {/* <Services/>  */}
          {/* <Review/> */}
          
        </Layout>
    </div>
  )
}

export default UserDashoard