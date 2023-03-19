import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ProductCard = ({
  ProdutcName,
  ProductDetails,
  ProductCant,
  ProductImg,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={ProductImg} alt={ProductDetails} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ProdutcName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ProductDetails}
          </Typography>
          <Typography>Quantities Available: {ProductCant}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
