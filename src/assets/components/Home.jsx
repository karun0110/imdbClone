import React, { useState } from 'react';
import Banner from './Banner';
import Movies from './Movies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
    const [pageNo, setPageNo] = useState(1);

    const handlePrev = () => {
        if (pageNo === 1) return;
        setPageNo(pageNo - 1);
    };

    const handleNext = () => {
        setPageNo(pageNo + 1);
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
