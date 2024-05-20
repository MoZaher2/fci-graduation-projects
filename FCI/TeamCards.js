"use client"
import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from "./logo.png"
import FCI from "./Fci.js";

import Image from "next/image";

let ExpandMore;

export default function TeamCards() {
  const [expanded, setExpanded] = React.useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
      transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }));
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Card sx={{ maxWidth: 345 }} style={{maxWidth: "none",}}>
      <CardHeader
        title="Gym Genius"
      />
      <div style={{
    display: "flex",
    justifyContent: "center",width: "100%",overflow:"hidden",}}>
      {/* <CardMedia
        component="img"
        height="194"
        // image="./logo.png"
        image={Logo}
        alt="GymGenius"
      style={{width:"auto",}}
      /> */}


       <Image src={Logo} alt="Logo" width={350} height={350} />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        نظام كامل مصمم لتبسيط إجراءات التمرين وتسهيل اختيار خطط التدريب المصممة خصيصًا للمستويات الرياضية والمالية للفرد. يمكّن هذا النظام المستخدمين من أداء التمارين براحة في منازلهم إذا اختاروا ذلك، مما يوفر المرونة والراحة
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <p>المزيد...</p>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <FCI />
        </CardContent>
      </Collapse>
    </Card>
  );
}
