import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//include images into your bundle


//create your first component
const Home = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row d-flex justify-content-center m-0">
        <div className="col-12 p-0">
          <Navbar />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-10">
            <Jumbotron />
            <div className="d-flex flex-column flex-lg-row gap-3">
              <Card title={"First card"} image={"https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_640.jpg"} 
                description={"This is a puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam."}
                buttonText={"First button"} />
              <Card title={"Second card"} image={"https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_640.jpg"} 
              description={"This is another puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam."} 
              buttonText={"Second button"} />
              <Card title={"Third card"} image={"https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255_640.jpg"} 
              description={"Yet another puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam."} 
              buttonText={"Third button"} />
              <Card title={"Fourth card"} image={"https://cdn.pixabay.com/photo/2019/05/28/05/47/puppy-4234435_640.jpg"} 
              description={"The last puppy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis varius quam."} 
              buttonText={"Fourth button"} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;