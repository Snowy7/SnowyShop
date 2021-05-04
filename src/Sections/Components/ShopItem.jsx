import React, { Component } from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import useStyles from './styles';


const ShopItem = (props) => {
    const { item } = props;
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={item.image} title={item.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            ${item.price}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: item.description }} variant="body2" color="textSecondary" component="p" />
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart" onClick="">

                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default ShopItem;