import React from "react"
import LayoutAlternative from "./layout/LayoutAlternative";
import Slider from "./ui/Slider";
import Container from "@mui/material/Container";
import ItemFilter from "./ui/ItemFilter";

export default function Home (){
    return <LayoutAlternative>
       <Slider></Slider>
        <Container style={{position:'relative'}}>
            <ItemFilter/>
        </Container>
    </LayoutAlternative>
}
