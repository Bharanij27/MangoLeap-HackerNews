import React, { useEffect, useState } from 'react';
import { fetchStories, fetchStory } from '../../common/helperFunctions';
import Loading from '../Loading/Loading';
import Story from '../Story/Story';
import './ListStories.css';

const ListStories = ({ type }) => {
    const [pageNum, setPageNum] = useState(0);
    const [storiesIds, setStoriesIds] = useState([]);
    const [stories, setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function fetchdata(){
            let fetchResult = await fetchStories(type);
            setStoriesIds(fetchResult);
            setPageNum(1);
        }
        fetchdata();
    }, [type]);

    useEffect(()=>{
        async function fetchdata(){
            let storyToShow  = storiesIds.slice(pageNum, pageNum * 20 + 1);
            let results = await fetchStory(storyToShow);
            setStories(results);
            setIsLoading(false)
        }
        setIsLoading(true);
        fetchdata();
    }, [pageNum])
    
    return (
        <>
            { isLoading || stories.length === 0 ?
                <Loading/>
                :
                <> 
                <div className="nav-btn mt-3">
                    <button className="btn btn-dark mr-3" type="button" disabled={pageNum === 1} onClick={() => setPageNum(pageNum - 1)}>Prev</button>
                    <div className="show">{pageNum} / {storiesIds.length / 20}</div>
                    <button className="btn btn-dark ml-3" type="button" disabled={pageNum * 20 === storiesIds} onClick={() => setPageNum(pageNum + 1)}>Next</button>
                </div>
                <div className="story-conatiner">
                    <div className="stories">
                        <ul>
                            {stories.map((story) => {
                                if(story) return <Story key={story.id} story = {story}/>}
                            )}
                        </ul>
                    </div>
                </div>
                </>
            }
        </>
    )
}

export default ListStories;