import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ShopItem from "./Components/ShopItem";

const Shop = (props) => {
  let items = [
    { id: 1, name: "item 1", price: "75", image: "../Images/profile.png", description: "this is a desc 1" },
    { id: 2, name: "item 2", price: "55", image: "../Snowy.svg", description: "this is a desc 2" },
  ];
  
  let i = 0;
  return (
    <div className={"height-100"}>
      <Grid container justify="center" spacing={4}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <ShopItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shop;
