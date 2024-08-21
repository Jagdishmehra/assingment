import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWidgetFromCategory, toggleSidebar } from '../store';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(state => state.dashboard.isSidebarVisible);
  const categories = useSelector(state => state.dashboard.categories);

  const handleCheckboxChange = (categoryId, widgetId, checked) => {
    if (!checked) {
      dispatch(removeWidgetFromCategory({ categoryId, widgetId }));
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 w-64 bg-white border-l border-gray-300 h-full p-4 transition-transform transform ${isSidebarVisible ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <button onClick={() => dispatch(toggleSidebar())} className="absolute top-4 right-4 text-gray-500">
        &times;
      </button>
      <h2 className="text-xl font-bold mb-4">Widgets</h2>
      <div>
        {categories.map(category => (
          <div key={category.id} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            {category.widgets.map(widget => (
              <div key={widget.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(category.id, widget.id, e.target.checked)}
                  className="mr-2"
                />
                <label>{widget.name}</label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
