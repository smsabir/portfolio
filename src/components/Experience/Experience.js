import { Typography } from '@material-ui/core';
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const Experience = () => {
    return (
        <div className="container">
            {/* <h1>Hello World</h1> */}
            <div className="row d-flex justify-content-between">
            <div className="half col-md-6 bg-light">
                <Timeline style={{paddingLeft: ""}} align="left">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" component="h1">
                                Tallinn University of Technology
                            </Typography>
                            <Typography variant="p" component="h6">
                                BSc in Integrated Engineering <br />
                                <LocationOnIcon></LocationOnIcon>Tallinn, Estonia
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector variant="outlined" />
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>Repeat</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className="half col-md-6 bg-light">
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
            </Timeline>
            </div>
            </div>
            
            
        </div>
    );
};

export default Experience;