import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import React, {useCallback, useEffect, useState} from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import parse from "html-react-parser"
import Chip from "@mui/material/Chip";
import "./slider.css"

const example = [{title: 'title1', content: "contentttttttttttttttt", topic: "news"}, {
    title: 'title2',
    content: "contentttttttttttttttt",
    topic: "news"
}, {title: 'title3', content: "contentttttttttttttttt", topic: "news"}]
const Slider = function ({data = example,interval=6000}) {
    const [currentIndex, set] = useState(0);
    const [timer,setTimer] = useState();


    useEffect(()=>{
        const timer = setInterval(
            ()=>{
                let selected = (currentIndex + 1) % data.length;
                set( selected );
            }   ,
            interval
        );
        setTimer(timer);
        return ()=>clearInterval(timer);
    },[currentIndex,data]);

    return <div style={{position: 'relative', width: '100wh'}}>
        <AwesomeSlider
            cancelOnInteraction={false} // should stop playing on user interaction
            bullets={false}
            fillParent={false}
            style={{height: '60vh'}}
            organicArrows={false}
            selected={currentIndex}
        >
            {data.map((d, i) => <div
                key={i}
                data-slug="this-is-two"
                style={{ backgroundColor: '#f33d42' }}
                data-src={d.imageLanscape??d.image}
            />)}

        </AwesomeSlider>
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.35)',position:'absolute',top:0,left:0, zIndex:3,width:'100%',height:'100%' }}></div>
        <div style={{
            position: 'absolute',
            float: 'left',
            top: 0,
            height: '100%',
            color: 'white',
            paddingTop: 80,
            zIndex: 4,
            width: '100%'
        }}>
            <Container style={{textAlign: "left", margin: 'auto'}}>
                {data[currentIndex]&&<Grid container direction={"column"} style={{height: '100%',width:'50%'}}>
                    <Grid item>
                        <Typography variant="caption">{data[currentIndex].topic} {data[currentIndex].mention&&<Chip label={data[currentIndex].mention}/>}</Typography>
                    </Grid>
                    <Grid item>
                        <h2 className={"limit3"}>{data[currentIndex].titleShort??parse(data[currentIndex].title)}</h2>
                    </Grid>
                    <Grid item style={{flexGrow:2, maxHeight:'20vh', overflowY:'hidden'}}>
                        <Typography variant="body2" className={"limit4"}>{parse(data[currentIndex].content)}</Typography>
                    </Grid>
                    <Grid item style={{marginTop:30}}>
                        <Button variant="contained" href={data[currentIndex].url} target="_blank">Learn more</Button>
                    </Grid>
                </Grid>}
                <Grid container direction={"column"} style={{height: '100%',float:'right',width:'30%',position:'absolute',top:80,right:0}}>
                    <List sx={{ width: '100%'}}>
                        {data.slice(0,3).map((d,i)=><ListItem key={i} style={{opacity:d===data[currentIndex]?1:0.5}} onClick={()=>set(i)}>
                            <Stack>
                                <Typography variant="caption" >{d.topic}</Typography>
                                <h3 className={"limit2"} style={{marginTop:0, fontWeight:'normal',marginBottom:2}}>{d.titleShort??parse(d.title)}</h3>
                            </Stack>
                        </ListItem>)}
                    </List>
                </Grid>
            </Container>
        </div>
    </div>
};
export default Slider
