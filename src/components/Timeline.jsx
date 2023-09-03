import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Face3Icon from '@mui/icons-material/Face3';
import { Typography } from '@mui/material';
import './timeline.css'

const getTimelineDotStyles = (header) => ({
    backgroundColor: header ? 'var(--primary)' : 'transparent',
    color: header ? 'var(--on-primary)' : 'var(--on-surface-heading)',
    borderColor: 'var(--on-surface-heading)'
});


const CustomTimeline = ({ children, icon, title }) => {


    return (
        <Timeline sx={{
            marginTop: '-2.5rem',
            [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
            },
        }}  >
            <TimelineItem className='timeline-header-icon'>
                <TimelineSeparator sx={{ minHeight: '100px' }}>
                    <TimelineDot sx={getTimelineDotStyles(true)}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography sx={{ marginTop: '0.5rem' }} className='timeline-header-title' variant='h6'>{title}</Typography>
                </TimelineContent>
            </TimelineItem>
            {children}
        </Timeline >
    );
}

export const CustomTimelineSeparator = () => (
    <TimelineSeparator sx={{ paddingLeft: '1.1rem' }}>
        <TimelineDot variant='outlined' sx={getTimelineDotStyles(false)} /* color='var(--on-primary)' */ />
        <TimelineConnector />
    </TimelineSeparator>
)

export default CustomTimeline;