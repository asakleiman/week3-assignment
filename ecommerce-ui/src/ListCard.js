import React from 'react';

class Listing extends React.Component{
    render(){
        console.log(this.props.listingDetail);
        return (     
            <div>
             {this.props.listingDetail.map((item, idx) => {
                return <div key={idx} >
                        <img src={item['image']} alt={item.title}></img>
                        <div>{item.title}</div>
                        <div >Type:<br></br> {item.houseType}</div>
                        <div >Location:<br></br> {item.location.city}, {item.location.country}</div>

                        <div >Cost: {item.payment.cost}</div>
                        <div>Stars: {item.rating.stars} </div>
                        <div >Host: {item.host.name}</div>

                </div>
                })};
            </div>
        );       
    }
}

export default Listing;