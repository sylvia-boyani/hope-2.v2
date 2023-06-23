import React from "react";
import { Container, Row, Col } from "reactstrap";
import tumatiL from '../../assets/tumati-learn.jpg'
import '../../routes/tumati/heroSection.css'


const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className="sm_container">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
               Empowering the<br /> boy child too<br /> <h6>Discover
                 talents develop skills</h6>
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={tumatiL} alt="" className="hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;


