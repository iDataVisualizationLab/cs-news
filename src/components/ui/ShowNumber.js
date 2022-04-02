import React from "react";
import Paper from "@mui/material/Paper";
import AnimatedNumbers from "react-animated-numbers";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import Divider from "@mui/material/Divider";
const RunNumber = styled(AnimatedNumbers)(
    ({ theme }) => `
  margin: auto;
  color: ${theme.palette.primary.main};
`);
function ShowNumber () {
    return<Grid container justifyContent={"center"} spacing={2}>
        <Paper elevation={3} style={{padding:10,zIndex:3}}>
            <Typography variant={"h5"}>Student Numbers</Typography>
            <Stack spacing={4} direction={"row"} >
                <Grid container justifyContent={"center"} direction={"column"} adjust>
                    <Typography variant={"caption"}>Undergraduate Student Enrollment</Typography>
                    <div style={{margin:'auto'}}>
                        <RunNumber
                            includeComma
                            animateToNumber={845}
                            fontStyle={{ fontSize: 40 }}
                            configs={[
                                { mass: 1, tension: 220, friction: 100 },
                                { mass: 1, tension: 180, friction: 130 },
                                { mass: 1, tension: 280, friction: 90 },
                                { mass: 1, tension: 180, friction: 135 },
                                { mass: 1, tension: 260, friction: 100 },
                                { mass: 1, tension: 210, friction: 180 },
                            ]}
                        ></RunNumber>
                    </div>
                </Grid>
                <Grid container justifyContent={"center"} direction={"column"} adjust>
                    <Typography variant={"caption"}>Graduate Student Enrollment</Typography>
                    <div style={{margin:'auto'}}>
                        <RunNumber
                            includeComma
                            animateToNumber={268}
                            fontStyle={{ fontSize: 40 }}
                            configs={[
                                { mass: 1, tension: 220, friction: 100 },
                                { mass: 1, tension: 180, friction: 130 },
                                { mass: 1, tension: 280, friction: 90 },
                                { mass: 1, tension: 180, friction: 135 },
                                { mass: 1, tension: 260, friction: 100 },
                                { mass: 1, tension: 210, friction: 180 },
                            ]}
                        ></RunNumber>
                    </div>
                </Grid>
                <Grid container justifyContent={"center"} direction={"column"} adjust>
                    <Typography variant={"caption"}>Undergraduate Degree Awarded</Typography>
                    <div style={{margin:'auto'}}>
                        <RunNumber
                            includeComma
                            animateToNumber={167}
                            fontStyle={{ fontSize: 40 }}
                            configs={[
                                { mass: 1, tension: 220, friction: 100 },
                                { mass: 1, tension: 180, friction: 130 },
                                { mass: 1, tension: 280, friction: 90 },
                                { mass: 1, tension: 180, friction: 135 },
                                { mass: 1, tension: 260, friction: 100 },
                                { mass: 1, tension: 210, friction: 180 },
                            ]}
                        ></RunNumber>
                    </div>
                </Grid>
                <Grid container justifyContent={"center"} direction={"column"} adjust>
                    <Typography variant={"caption"}>Graduate Degree Awarded</Typography>
                    <div style={{margin:'auto'}}>
                        <RunNumber
                            includeComma
                            animateToNumber={64}
                            fontStyle={{ fontSize: 40 }}
                            configs={[
                                { mass: 1, tension: 220, friction: 100 },
                                { mass: 1, tension: 180, friction: 130 },
                                { mass: 1, tension: 280, friction: 90 },
                                { mass: 1, tension: 180, friction: 135 },
                                { mass: 1, tension: 260, friction: 100 },
                                { mass: 1, tension: 210, friction: 180 },
                            ]}
                        ></RunNumber>
                    </div>
                </Grid>
            </Stack>
            <Divider style={{marginTop:5}}></Divider>
            <Typography variant={"body2"} style={{margin:'auto',marginTop:-10,background:'white',width:'fit-content'}}>Last year</Typography>
            <Stack spacing={4} direction={"row"} >
                <Grid container justifyContent={"center"} direction={"column"} adjust>

                    <div style={{margin:'auto',opacity:0.5}}>
                        <RunNumber
                            includeComma
                            animateToNumber={765}
                        ></RunNumber>
                    </div>
                </Grid>
                <Grid container justifyContent={"center"} direction={"column"} adjust>

                    <div style={{margin:'auto',opacity:0.5}}>
                        <RunNumber
                            includeComma
                            animateToNumber={161}

                        ></RunNumber>
                    </div>
                </Grid>
                <Grid container justifyContent={"center"} direction={"column"} adjust>
                    <div style={{margin:'auto',opacity:0.5}}>
                        <RunNumber
                            includeComma
                            animateToNumber={109}
                        ></RunNumber>
                    </div>
                </Grid>
                <Grid container justifyContent={"center"} direction={"column"} adjust>
                    <div style={{margin:'auto',opacity:0.5}}>
                        <RunNumber
                            includeComma
                            animateToNumber={24}
                        ></RunNumber>
                    </div>
                </Grid>
            </Stack>
        </Paper>
    </Grid>
}

export default ShowNumber
