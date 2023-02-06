import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import Category from "../../components/Category/Category";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Featured />
        <Category />
      </>
    );
  }
}

export default Homepage;