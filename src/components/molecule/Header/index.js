import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../../Shared/Routes";
import ExploreIcon from '@mui/icons-material/Explore';
import "./style.css";
import { TAB_MINT } from "../../../Shared/Constants";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="shadow-sm p-3 mb-5 bg-body rounded">
      <div className="d-flex justify-content-between align-items-center px-5 my-3">
        <div>
          <ExploreIcon />
        </div>
        <div>
          Pro
        </div>
        <div>
          Action
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between my-3 px-5 subheading">
        {TAB_MINT.map((item) => {
          return (
            <div className="mx-2">
              {item?.label}
            </div>
          )
        })}
      </div>
      </div>
    </>
  );
};

export default Header;
