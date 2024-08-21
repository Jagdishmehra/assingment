import React from 'react';

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="bg-white border border-gray-300 p-8 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{widget.name}</h3>
        {onRemove && (
          <button className="text-red-500 rounded-xl" onClick={() => onRemove(widget.id)}>
            &times;
          </button>
        )}
      </div>
      <p className="mt-4 font-thin">{widget.text}</p>
    </div>
  );
};

export default Widget;
