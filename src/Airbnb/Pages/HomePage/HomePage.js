import React from "react";
import Banner from "../../Components/Banner/Banner";
import CardFirst from "../../Components/CardFirst/CardFirst";
import CardSecond from "../../Components/CardSecond/CardSecond";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeMainDiv">
      <Banner />
      <div className="homeCardSection">
        <CardFirst
          imgSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          heading="Unique stays"
          paragraph="Spaces that are more than just a place to sleep."
        />
        <CardFirst
          imgSrc="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          heading="Online Experiences"
          paragraph="Unique activities we can do together, led by a world of hosts."
        />
        <CardFirst
          imgSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          heading="Entire homes"
          paragraph="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="homeCardSectionSecond">
        <CardSecond
          imgSrc="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          heading="1 Bedroom apartment"
          paragraph="Superhost with great amenities and a fabolous shopping complex nearby"
          money="85"
        />
        <CardSecond
          imgSrc="https://media.nomadicmatt.com/2018/apartment.jpg"
          heading="3 Bedroom Flat in Miami"
          paragraph="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          money="200"
        />
        <CardSecond
          imgSrc="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          heading="Penthouse in NewYork"
          paragraph="Enjoy the amazing sights of London with this stunning penthouse"
          money="480"
        />
      </div>
    </div>
  );
};

export default HomePage;
