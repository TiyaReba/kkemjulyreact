import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const ViewAll = () => {
    const cardData = [
      {
        id: 1,
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://th.bing.com/th?id=OIP.hqgXmy-r13g-63xcvlz6AwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2 ",
      },
      {
        id: 2,
        title: "Card 2",
        description: "Description for Card 2",
        imageUrl: "https://th.bing.com/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      },
      {
        id: 3,
        title: "Card 3",
        description: "Description for Card 2",
        imageUrl: "https://th.bing.com/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2 ",
      },
      // Add more data objects as needed
    ];
  
    return (
      <div style={{ margin: "7%" }}>
        <Grid container spacing={2}>
          {cardData.map((val, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={val.imageUrl}  // Specify the image source
                  title={val.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title:{val.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description:{val.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Last updated:
                  </Typography>
                </CardContent>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default ViewAll;
  