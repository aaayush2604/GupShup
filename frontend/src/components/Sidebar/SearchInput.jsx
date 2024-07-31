import React,{useState} from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search,setSearch]=useState('');
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversations();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!search)return;
    if(search.length<3){
      toast.error('Search term must be at least 3 characters long');
      return;
    }


    const conversation= conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else return toast.error("No Such User Found");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='search' className='input input-bordered rounded-full'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp/>
      </button>
    </form>
  )
}

export default SearchInput
