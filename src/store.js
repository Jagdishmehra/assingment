import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 'c1',
      name: 'CSPM Executive Dashboard',
      widgets: []
    },
    {
      id: 'c2',
      name: 'CWPP Dashboard',
      widgets: []
    },
    {
      id: 'c3',
      name: 'Registry Scan',
      widgets: []
    }
  ],
  allWidgets: [],
  searchTerm: '',
  isSidebarVisible: false
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidgetToCategory: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidgetFromCategory: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    addWidget: (state, action) => {
      state.allWidgets.push(action.payload);
    },
    removeWidget: (state, action) => {
      const { widgetId } = action.payload;
      state.allWidgets = state.allWidgets.filter(widget => widget.id !== widgetId);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setAllWidgets: (state, action) => {
      state.allWidgets = action.payload;
    }
  }
});

export const { addWidgetToCategory, removeWidgetFromCategory, addWidget, removeWidget, setSearchTerm, toggleSidebar, setCategories, setAllWidgets } = dashboardSlice.actions;

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer
  }
});
