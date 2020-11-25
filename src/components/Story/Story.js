import React from 'react';
import { formatTime } from '../../common/helperFunctions';
import { formatHost } from '../../common/helperFunctions';
import './Story.css';

const Story = ({ story }) => {
    const time = formatTime(story.time);
    const host = ''  || (story.url && formatHost(story.url));
    return (
        <li className="story">
            <span className="score">{story.score}</span>
            <span className="title ">
                <a href = {'' || story.url}>{story.title}</a>
            </span>
            <span className="host ml-2 meta-data">{host && (host)}</span>
            <br/>
            <span className="author meta-data">by {story.by}</span>
            <span className="time meta-data ml-2">{time} ago</span>
            <span className="comment meta-data ml-2">{story.descendants} comments</span>
        </li>
    )
}

export default Story;