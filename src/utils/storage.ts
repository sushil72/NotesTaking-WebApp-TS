import { NoteObject } from '../components/models/note';

const NOTES_STORAGE_KEY = 'myNotes';

/**
 * Saves notes to localStorage
 * @param notes - Array of notes to save
 */
export const saveNotesToStorage = (notes: NoteObject[]): void => {
  try {
    localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes to localStorage:', error);
  }
};

/**
 * Retrieves notes from localStorage
 * @returns Array of notes or empty array if none found
 */
export const getNotesFromStorage = (): NoteObject[] => {
  try {
    const savedNotes = localStorage.getItem(NOTES_STORAGE_KEY);
    return savedNotes ? JSON.parse(savedNotes) : [];
  } catch (error) {
    console.error('Error retrieving notes from localStorage:', error);
    return [];
  }
};

/**
 * Clears all notes from localStorage
 */
export const clearNotesFromStorage = (): void => {
  try {
    localStorage.removeItem(NOTES_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing notes from localStorage:', error);
  }
}; 