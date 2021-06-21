import React from "react";
import styled from "styled-components";
import time from "../utils/time";
import Loader from "../components/Loader";
//For Routing
import { Link } from "react-router-dom";
const Items = ({ items }) => {
  console.log(items);
  return (
    <StyledItems>
      <div className="row">
        {items.length !== 0 && items !== null ? (
          items.map((item) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={item._id}>
              <Card>
                <Link to={`/item/${item._id}`}>
                  <CardImg>
                    <img
                      src={`${
                        item.files && items.files.length > 1 ? item.files[1] : item.files
                      }`}
                      alt={item.title}
                    />
                  </CardImg>
                  <CardDesc>
                    <h3>{item.title}</h3>
                    <p className="model">{item.option}</p>
                    <p className="price">
                      <span>$ </span>
                      {item.cost}
                    </p>
                    <CardFooter>
                      <span>{item.city}</span>
                      <span>{time(item.createdAt)}</span>
                    </CardFooter>
                  </CardDesc>
                </Link>
              </Card>
            </div>
          ))
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </div>
    </StyledItems>
  );
};

const StyledItems = styled.div`
  margin: 0 3em;
  a {
    text-decoration: none;
    color: inherit;
  }
  .row {
    justify-content: center;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 6px 12px 0 rgb(171 171 171);
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1.5em;
`;
const CardImg = styled.div`
  padding: 1em 0;
  img {
    width: 100%;
    height: 130px;
    object-fit: contain;
  }
`;
const CardDesc = styled.div`
  padding: 1em 1.5em 0;
  h3 {
    font-size: var(--lengthMd3);
  }
  .model {
    font-size: var(--lengthMd1);
  }
  .price {
    font-size: var(--lengthMd1);
  }
`;

const CardFooter = styled.div`
  font-size: 0.825rem;
  padding-top: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Items;
