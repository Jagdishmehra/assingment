import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidgetToCategory, addWidget } from '../store';

const AddWidget = ({ categoryId }) => {
  const dispatch = useDispatch();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    if (widgetName.trim() && widgetText.trim()) {
      const newWidget = { id: Date.now().toString(), name: widgetName, text: widgetText };
      dispatch(addWidget(newWidget));
      dispatch(addWidgetToCategory({ categoryId, widget: newWidget }));
      setWidgetName('');
      setWidgetText('');
      setIsFormVisible(false);
    }
  };

  return (
    <div className="bg-white border border-gray-300 p-4 rounded-xl shadow-md w-3/12 mb-4">
      {isFormVisible ? (
        <div>
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-2 w-full"
          />
          <button
            className="border border-gray-300 px-4 py-2 rounded mt-2"
            onClick={handleAddWidget}
          >
            Add Widget
          </button>
          <button
            className="border border-gray-300 px-4 py-2 rounded mt-2 ml-2"
            onClick={() => setIsFormVisible(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="border border-gray-300 px-4 py-2 rounded"
          onClick={() => setIsFormVisible(true)}
        >
          + Add Widget
        </button>
      )}
    </div>
  );
};

export default AddWidget;
