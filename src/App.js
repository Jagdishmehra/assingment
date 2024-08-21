import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategories, setAllWidgets } from './store';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    
    const initialData = {
      categories: [
        {
          id: 'c1',
          name: 'CSPM Executive Dashboard',
          widgets: [
            { id: 'w1', name: 'Widget 1', text: 'Text 1' },
            { id: 'w2', name: 'Widget 2', text: 'Text 2' }
          ]
        },
        {
          id: 'c2',
          name: 'CWPP Dashboard',
          widgets: [
            { id: 'w3', name: 'Widget 3', text: 'Text 3' }
          ]
        },
        {
          id: 'c3',
          name: 'Registry Scan',
          widgets: [
            { id: 'w4', name: 'Widget 4', text: 'Text 4' }
          ]
        }
      ],
      allWidgets: [
        { id: 'w1', name: 'Widget 1', text: 'Text 1' },
        { id: 'w2', name: 'Widget 2', text: 'Text 2' },
        { id: 'w3', name: 'Widget 3', text: 'Text 3' },
        { id: 'w4', name: 'Widget 4', text: 'Text 4' }
      ]
    };
    dispatch(setCategories(initialData.categories));
    dispatch(setAllWidgets(initialData.allWidgets));
  }, [dispatch]);

  return (
    <div className="bg-slate-300 min-h-screen">
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
