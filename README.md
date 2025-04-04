# MyNotes - A React Material UI Notes Application

A modern, responsive notes application built with React, TypeScript, and Material UI. This application allows users to create, view, and delete notes with a beautiful and intuitive user interface.

## Features

- Create notes with title and content
- Customize note colors
- Delete individual notes
- Clear all notes with confirmation
- Responsive design for all screen sizes
- Data persistence using localStorage
- Modern UI with Material UI components

## Technologies Used

- React 19
- TypeScript
- Material UI 7
- Vite
- UUID for unique IDs
- LocalStorage for data persistence

## Project Structure

```
mui-learning/
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components like Header
│   │   ├── layouts/        # Layout components like Notes, CreateNote
│   │   ├── models/         # TypeScript interfaces and types
│   │   └── index.tsx       # Component exports
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
└── package.json            # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/mui-learning.git
cd mui-learning
```

2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- **Create a Note**: Fill in the title and content fields, select a color, and click "Add Note"
- **Delete a Note**: Click the delete icon on any note
- **Clear All Notes**: Click the clear all icon in the header
- **Change Note Color**: Click the color picker icon when creating a note

## Best Practices Implemented

- **TypeScript**: Strong typing throughout the application
- **Component Structure**: Modular, reusable components
- **Error Handling**: Proper error handling for localStorage operations
- **Loading States**: Loading indicators for async operations
- **Accessibility**: ARIA labels and semantic HTML
- **Responsive Design**: Works on all screen sizes
- **Code Organization**: Clean folder structure and separation of concerns
- **Performance**: Optimized rendering with proper key usage

## Acknowledgments

- Material UI for the beautiful components
- React team for the amazing framework
- Vite for the fast development experience
