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
import {styled} from "@mui/material/styles";
import parse from "html-react-parser"
import Link from "@mui/material/Link";
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
            {/*<Typography variant={"subtitle1"}>{(d.time??new Date()).toLocaleString()}</Typography>*/}
            <h2><Link className={"title"} href={d.url} target={'_blank'} variant={"div"} underline="none" color="inherit"
                  sx={{'&:hover':{color:'primary.main'}}}
            >{parse(d.title)}</Link></h2>
            <Typography variant={"body2"} className={"post-content"} >
                {parse(d.content)}
            </Typography>

            <Divider style={{marginTop:10,marginBottom:10}}/>
            <Chip label={d.topic}/>
        </CardContent>
    }
    return <div style={{position: 'relative', width: '100%', marginTop:30}}>
        <Grid container spacing={6}>
        <Grid item xs={12}>
        <ToggleButtonGroup color={"primary"} value={value} size="small"  exclusive={"true"} onChange={(e,newV)=>setVal(newV)}>
            {category.map((d,i)=><ToggleButton value={d} key={d} variant={"contained"}
                                               style={{marginLeft:10,marginRight:10,
                borderRadius:30,borderLeft:'unset'}}>
                {d}
            </ToggleButton>)}
        </ToggleButtonGroup>
        </Grid>
        <Grid container item xs={12} spacing={6}>
            {cards.map((d,i)=>i%2?<Grow in={true} ><Grid item xs={12}>
                    <Card key={i} sx={{ display: 'flex'}} elevation={10} className={"newCard"}>
                <Box sx={{ display: 'flex', flexDirection: 'column',width:'60%' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        {renderCard(d)}
                    </CardContent>
                </Box>
                <Box sx={{ width: '40%',maxHeight:'400px', position:'relative'}}>
                    <CardMedia
                        component="div"
                        image={d.image}
                        sx={{height:'100%'}}
                    />
                </Box>
                </Card></Grid></Grow>:
                <Grow in={true} ><Grid item xs={12}><Card key={i} sx={{ display: 'flex'}} className={"newCard"} elevation={10}>
                    <Box sx={{ width: '40%',maxHeight:'400px', position:'relative' }}>
                        <CardMedia
                            component="div"
                            image={d.image}
                            sx={{height:'100%'}}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column',width:'60%' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            {renderCard(d)}
                        </CardContent>
                    </Box>
                </Card></Grid></Grow>)}
        </Grid>
        </Grid>
    </div>
}

export default styled(ItemFilter)(
    ({ theme }) =>(
   {
       '& .title': {
            backgroundColor: theme.palette.primary.main
       }
   }),
);
