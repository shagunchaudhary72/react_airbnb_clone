import React from "react";
import Available from "../../Components/Available/Available";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="exploreMainDiv">
      <p className="exploreInfo">43 stays | 26 july to 1 august | 7 guest</p>
      <h2 className="exploreTitle">Stays Nearby</h2>
      <div className="exploreFilters">
        <button>Cancellation Flexibility</button>
        <button>Type of place</button>
        <button>Price</button>
        <button>Rooms and Beds</button>
        <button>More Filters</button>
      </div>
      <div className="exploreAvailables">
        <Available
          imgSrc="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
          location="Independant luxury studio apartment"
          features="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
          ratings="3.6"
          cost="36"
          totalCost="163"
        />
        <Available
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
          location="Stay at this spacious Edwardian House"
          features="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
          ratings="4.73"
          cost="30 "
          totalCost="117 "
        />
        <Available
          imgSrc="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
          location="London Studio Apartments"
          features="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
          ratings="3.8"
          cost="35"
          totalCost="207"
        />
        <Available
          imgSrc="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
          location="30 mins to Oxford Street, Excel London"
          features="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
          ratings="4.1"
          cost="55"
          totalCost="320 "
        />
        <Available
          imgSrc="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
          location="Spacious Peaceful Modern Bedroom"
          features="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
          ratings="5.0"
          cost="60"
          totalCost="450"
        />
        <Available
          imgSrc="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
          location="The Blue Room In London"
          features="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
          ratings="4.23"
          cost="65 "
          totalCost="480"
        />
      </div>
    </div>
  );
};

export default Explore;
