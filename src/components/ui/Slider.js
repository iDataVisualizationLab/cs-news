import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import React, {useState} from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const example = [{title: 'title1', content: "contentttttttttttttttt", topic: "news"}, {
    title: 'title2',
    content: "contentttttttttttttttt",
    topic: "news"
}, {title: 'title3', content: "contentttttttttttttttt", topic: "news"}]
const Slider = function ({data = example}) {
    const [currentIndex, set] = useState(0);
    return <div style={{position: 'relative', width: '100wh'}}>
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            bullets={false}
            fillParent={false}
            style={{height: '60vh'}}
            organicArrows={false}
            onTransitionStart={(e) => set(e.currentIndex)}
        >
            {example.map((d, i) => <div
                data-slug="this-is-two"
                style={{ backgroundColor: '#f33d42' }}
                data-src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
            />)}

        </AutoplaySlider>
        <div style={{backgroundColor:'rgba(0, 0, 0, 0.35)',position:'absolute',top:0,left:0, zIndex:20,width:'100%',height:'100%' }}></div>
        <div style={{
            position: 'absolute',
            float: 'left',
            top: 0,
            height: '100%',
            color: 'white',
            paddingTop: 80,
            zIndex: 1000,
            width: '100%'
        }}>
            <Container style={{textAlign: "left", margin: 'auto'}}>
                <Grid container direction={"column"} style={{height: '100%',width:'50%'}}>
                    <Grid item>
                        <Typography variant="caption">{data[currentIndex].topic}</Typography>
                    </Grid>
                    <Grid item>
                        <h1>{data[currentIndex].title}</h1>
                    </Grid>
                    <Grid item style={{flexGrow:2}}>
                        <Typography variant="body2">{data[currentIndex].content}</Typography>
                    </Grid>
                    <Grid item style={{marginTop:30}}>
                        <Button variant="contained">Learn more</Button>
                    </Grid>
                </Grid>
                <Grid container direction={"column"} style={{height: '100%',float:'right',width:'30%',position:'absolute',top:80,right:0}}>
                    <List sx={{ width: '100%'}}>
                        {data.slice(0,3).map((d,i)=><ListItem key={i} style={{opacity:d===data[currentIndex]?1:0.5}}>
                            <Stack>
                                <Typography variant="caption" >{d.topic}</Typography>
                                <h1 style={{marginTop:0, fontWeight:'normal'}}>{d.title}</h1>
                            </Stack>
                        </ListItem>)}
                    </List>
                </Grid>
            </Container>
        </div>
    </div>
};
export default Slider
