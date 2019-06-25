import React from 'react';
import Listings from './ListCard'
import RentalListings from './airbnbs.json';


class RentalsAvailable extends React.Component {
    
    constructor(){
        super();
        this.state = {
          listing: RentalListings,
        }
      }
    
    render(){
        return(
            <Listings 
            listingDetail={this.state.listing} 
           />
        );
    }

}

export default RentalsAvailable;