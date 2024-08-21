import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, setSearchTerm } from '../store';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.dashboard.searchTerm);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="bg-white border-b border-gray-300 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CNAPP Dashboard</h1>
      <div className="flex items-center space-x-4">
        
        <input
          type="text"
          placeholder="Search Widgets"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 p-2 rounded"
        /><button onClick={handleToggleSidebar} className="p-2">
          <AiOutlineMenu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
