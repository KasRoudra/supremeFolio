import React from "react";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import AddressImg from "./AddressImg";
import { contactPageData } from "../../portfolio.js";
import "./AddressSection.css";

const AddressSection = (props) => {
  const theme = props.theme;
  const addressSection = contactPageData.addressSection;
  const phoneSection = contactPageData.phoneSection;
  return (
    <div className="basic-contact">
      <Fade bottom duration={1000} distance="40px">
        <div className="address-heading-div">
          <div className="contact-heading-img-div">
            {/* <img
											src={require(`../../assests/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
            <AddressImg theme={theme} />
          </div>
          <div className="address-heading-text-div">
            <h1 className="address-heading-text" style={{ color: theme.text }}>
              {addressSection["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {addressSection["subtitle"]}
            </p>
            <h1 className="address-heading-text" style={{ color: theme.text }}>
              {phoneSection["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {phoneSection["subtitle"]}
            </p>
            <div className="address-btn-div">
              <Button
                text="Visit on Google Maps"
                newTab={true}
                href={addressSection.location_map_link}
                theme={theme}
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default AddressSection;
