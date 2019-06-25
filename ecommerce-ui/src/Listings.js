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
        console.log(this.state.listing);
        return(
            <Listings 
            key={this.state.idx} 
            listingDetail={this.state.listing} 
           />
        );
    }

}

export default RentalsAvailable;