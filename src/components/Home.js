import React from "react"
import LayoutAlternative from "./layout/LayoutAlternative";
import Slider from "./ui/Slider";
import Container from "@mui/material/Container";
import ItemFilter from "./ui/ItemFilter";
import ShowNumber from "./ui/ShowNumber";

export default function Home ({data=[]}){
    return <LayoutAlternative>
       <Slider data={data.slice(0,3)}></Slider>
        <ShowNumber/>
        <Container style={{position:'relative'}}>
            <ItemFilter data={data}/>
        </Container>
    </LayoutAlternative>
}
