import React from 'react';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import AddWidget from './AddWidget';

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);
  const searchTerm = useSelector(state => state.dashboard.searchTerm);

  // Filter widgets based on search term
  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="p-4">
      {filteredCategories.map(category => (
        <div key={category.id} className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            {category.widgets.map(widget => (
              <div key={widget.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <Widget widget={widget} />
              </div>
            ))}
          </div>
          <AddWidget categoryId={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
