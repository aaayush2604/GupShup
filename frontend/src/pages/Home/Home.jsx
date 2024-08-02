import React,{useState, useEffect} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'
import {Routes, Route, Link} from 'react-router-dom';
import { useWidthContext } from '../../context/WidthContext';
import Message from '../../components/MessageContainer/Message';

const Home = () => {

  const [width, setWidth]=useState('');
  const {showUsers, setShowUsers}=useWidthContext();

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className='flex sm:h-[450px] md:h-[550px] h-[550px] rounded-g overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      {!(width<440)?
        <>
          <Sidebar/>
          <MessageContainer/>
        </>
        :
        <>
          {showUsers?
            <Sidebar/>:<MessageContainer/>
          }
        </>
      }
      
    </div>
  )
}

export default Home
