import React, { useState } from 'react';
import Banner from './Banner';
import Movies from './Movies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import paginationSlice from '../../redux/paginationSlice';
import { useSelector, useDispatch} from 'react-redux'


const actions = paginationSlice.actions;
function Home() {
    const {pageNo} = useSelector((state)=>state.paginationState);
      const dispatch = useDispatch();
    const handlePrev = () => {
       dispatch(actions.handlePrev());
    };

    const handleNext = () => {
         dispatch(actions.handleNext());
    };

    return (
        <div>
            <Banner />
            <Movies pageNo={pageNo}/>
            <div className='bg-gray-400 p-4 h-[50px] flex justify-center gap-4'>
            <div onClick={handlePrev} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div>{pageNo}</div>
            <div onClick={handleNext} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            </div>
        </div>
    );
}

export default Home;
