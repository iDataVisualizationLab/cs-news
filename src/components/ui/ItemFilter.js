import React, {useMemo, useState} from "react";
import Stack from "@mui/material/Stack";
import {uniq} from "lodash"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Grow from '@mui/material/Grow';
import "./itemFilter.css"
const example = [{title: 'title1', content: "contentttttttttttttttt", topic: "achievement"}, {
    title: 'title2',
    content: "contentttttttttttttttt",
    topic: "news"
}, {title: 'title3', content: "contentttttttttttttttt", topic: "news"}, {title: 'title3', content: "contentttttttttttttttt", topic: "research"}]

const ItemFilter = function ({data = example}) {
    const [value,setVal] = useState('All');
    const cards = useMemo(()=>{
        if (value!=='All')
        return data.filter(d=>d.topic===value);
        return data
    },[data,value])
    const category=useMemo(()=>{
        const obj = {'All':true};
        const list = ['All'];
        data.map(d=>{
            if(!obj[d.topic]){
                obj[d.topic] = true;
                list.push(d.topic);
            }
        });
        return list
    },[data])
    const [currentIndex, set] = useState(0);
    const renderCard = (d)=>{
        return <CardContent style={{textAlign:"left"}}>
            <Typography variant={"subtitle1"}>{(d.Date??new Date()).toLocaleString()}</Typography>
            <h2 >{d.title}</h2>
            <Typography variant={"boday2"}>{d.content}</Typography>

            <Divider style={{marginTop:10,marginBottom:10}}/>
            <Chip label={d.topic}/>
        </CardContent>
    }
    return <div style={{position: 'relative', width: '100%', marginTop:30}}>
        <Grid container spacing={6}>
        <Grid item xs={12}>
        <ToggleButtonGroup value={value} size="small"  exclusive={"true"} onChange={(e,newV)=>setVal(newV)}>
            {category.map((d,i)=><ToggleButton value={d} key={d} variant={"contained"}
                                               style={{marginLeft:10,marginRight:10,
                borderRadius:30,borderLeft:'unset',background: d===value?'#9ea7ff':''}}>
                {d}
            </ToggleButton>)}
        </ToggleButtonGroup>
        </Grid>
        <Grid container item xs={12} spacing={6}>
            {cards.map((d,i)=>i%2?<Grow in={true} ><Grid item xs={12}>
                    <Card key={i} sx={{ display: 'flex'}} elevation={10} className={"newCard"}>
                <Box sx={{ display: 'flex', flexDirection: 'column',flexGrow:2 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        {renderCard(d)}
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: '40%' }}
                    image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                    alt="Live from space album cover"
                />
                </Card></Grid></Grow>:
                <Grow in={true} ><Grid item xs={12}><Card key={i} sx={{ display: 'flex'}} className={"newCard"} elevation={10}>
                    <CardMedia
                        component="img"
                        sx={{ width: '40%' }}
                        image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column',flexGrow:2  }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            {renderCard(d)}
                        </CardContent>
                    </Box>
                </Card></Grid></Grow>)}
        </Grid>
        </Grid>
    </div>
}
export default ItemFilter
