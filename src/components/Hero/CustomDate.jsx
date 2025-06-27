import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const CustomDate = ({ label = "Start Date", placeholder = "When will it start?" }) => {
  const [date, setDate] = useState('');
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  // Convert date to readable format
  const formatDate = (value) => {
    if (!value) return '';
    const dateObj = new Date(value);
    return dateObj.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleOpen = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Works in modern browsers
    }
  };

  // Optional: Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        inputRef.current?.blur();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full min-w-[160px] flex flex-col gap-1">
      {/* Visible Trigger */}
      <div
        className="mt-1 w-full border-none bg-transparent focus:outline-none font-medium text-sm text-gray-400 cursor-pointer flex items-center gap-2 border-b border-gray-100"
        onClick={handleOpen}
      >
        {date ? (
          <span className="text-dark">{formatDate(date)}</span>
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <MdOutlineKeyboardArrowDown className="text-primary" />
      </div>

      {/* Label */}
      <label className="text-xs text-dark block">{label}</label>

      {/* Hidden Native Input */}
      <input
        type="date"
        ref={inputRef}
        className="absolute opacity-0 pointer-events-none"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default CustomDate;
