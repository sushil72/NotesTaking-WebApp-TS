# MyNotes - A React Material UI Notes Application

A modern, responsive notes application built with React, TypeScript, and Material UI. Create, edit, and manage your notes with a beautiful and intuitive interface.

## Live Demo

Visit the live demo at: [Note-Taking-WebApp](https://sushil72.github.io/NotesTaking-WebApp-TS/)

## Features

- **Create Notes**: Add new notes with titles and content
- **Edit Notes**: Modify existing notes with the edit functionality
- **Customize Colors**: Choose from a wide range of colors for your notes
- **Delete Notes**: Remove individual notes or clear all notes at once
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Data Persistence**: Notes are saved to localStorage for persistence
- **Modern UI**: Clean, intuitive interface with Material UI components

## Technologies Used

- **React 19**: For building the user interface
- **TypeScript**: For type safety and better developer experience
- **Material UI 5**: For beautiful, responsive UI components
- **Vite**: For fast development and optimized builds
- **UUID**: For generating unique IDs for notes
- **LocalStorage**: For data persistence
- **GitHub Pages**: For hosting the application

## Project Structure

```
mui-learning/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── common/      # Reusable components
│   │   ├── layouts/     # Layout components
│   │   └── models/      # TypeScript interfaces
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── .env                 # Environment variables
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/sushil72/NotesTaking-WebApp-TS.git
   cd NotesTaking-WebApp-TS
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Best Practices Implemented

- **Strong Typing**: TypeScript interfaces for all components and data structures
- **Modular Component Structure**: Components are organized by functionality
- **Error Handling**: Proper error handling for data operations
- **Accessibility**: ARIA attributes and semantic HTML for better accessibility
- **Performance Optimization**: Efficient rendering and state management
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Code Quality**: ESLint and Prettier for consistent code style

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Material UI](https://mui.com/) for the beautiful UI components
- [React](https://reactjs.org/) for the amazing frontend library
- [TypeScript](https://www.typescriptlang.org/) for the type safety
- [Vite](https://vitejs.dev/) for the fast development experience
