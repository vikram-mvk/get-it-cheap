import React, { useEffect } from "react";
import styled from "styled-components";
//Components
import Search from "../components/Search";
import Items from "../components/Items";
import Sidebar from "../components/Sidebar";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../redux/actions/items";
const Home = () => {
  const dispatch = useDispatch();
  const { allItems } = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  console.log(allItems);
  return (
    <>
      <Search />
      <MainContent>
        <Sidebar />
        <Container>
          <h2>Items</h2>
          <Items items={allItems} />
        </Container>
      </MainContent>
    </>
  );
};

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  padding: 4em 0;
`;
const Container = styled.div`
  h2 {
    font-size: var(--lengthLg1);
    margin-bottom: 0.5em;
    padding-left: 1.5em;
  }
`;
export default Home;
