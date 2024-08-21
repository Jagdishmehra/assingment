import React from 'react';
import Widget from './Widget';
import AddWidget from './AddWidget';
import { useDispatch } from 'react-redux';
import { removeWidgetFromCategory } from '../store';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidgetFromCategory({ categoryId: category.id, widgetId }));
  };

  return (
    <div className="my-4 p-4 bg-white border border-gray-300 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">{category.name}</h2>
      <AddWidget categoryId={category.id} />
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} onRemove={handleRemoveWidget} />
      ))}
    </div>
  );
};

export default Category;
