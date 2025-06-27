import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const CustomSelect = ({ label, placeholder, options = [], noResultsMessage = "No results found" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState('');
  const wrapperRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (option) => {
    setSelected(option);
    setFilter('');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div ref={wrapperRef} className="relative w-full min-w-[160px] flex flex-col gap-1">
      
      <div
        className="mt-1 w-full border-none bg-transparent focus:outline-none font-medium text-sm text-gray-400  cursor-pointer flex items-center gap-2 border-b border-gray-100"
        onClick={toggleDropdown}
      >
        {selected || <span className="text-gray-400">{placeholder}</span>}
        <MdOutlineKeyboardArrowDown className='text-primary'/>
      </div>

      <label className="text-xs text-dark block">{label}</label>


      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white text-sm border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <input
            type="text"
            autoFocus
            placeholder="Search..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full px-3 py-2 border-b border-gray-100 outline-none text-sm"
          />
          <ul>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, i) => (
                <li
                  key={i}
                  className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-sm text-gray-400">{noResultsMessage}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
