import { useState, useEffect } from 'react';
import { Header, CreateNote, Notes } from './components';
import { NoteObject } from './components/models/note';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, CircularProgress, Box } from '@mui/material';
import { getNotesFromStorage, saveNotesToStorage, clearNotesFromStorage } from './utils/storage';
import EditNoteDialog from './components/layouts/EditNoteDialog';

function App() {
  // Initialize state with data from localStorage if available
  const [notes, setNotes] = useState<NoteObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // State for confirmation dialog
  const [openDialog, setOpenDialog] = useState(false);
  
  // State for edit dialog
  const [editNote, setEditNote] = useState<NoteObject | null>(null);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  
  // Load notes from localStorage on initial render
  useEffect(() => {
    const loadNotes = () => {
      try {
        const savedNotes = getNotesFromStorage();
        setNotes(savedNotes);
      } catch (error) {
        console.error('Error loading notes:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadNotes();
  }, []);
  
  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveNotesToStorage(notes);
    }
  }, [notes, isLoading]);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };
  
  const handleClearAll = () => {
    setOpenDialog(true);
  };
  
  const confirmClearAll = () => {
    setNotes([]);
    clearNotesFromStorage();
    setOpenDialog(false);
  };
  
  const cancelClearAll = () => {
    setOpenDialog(false);
  };

  const handleEditNote = (note: NoteObject) => {
    setEditNote(note);
    setOpenEditDialog(true);
  };

  const handleSaveEdit = (editedNote: NoteObject) => {
    setNotes(notes.map(note => 
      note.id === editedNote.id ? { ...editedNote, date: new Date().toLocaleString() } : note
    ));
    setOpenEditDialog(false);
    setEditNote(null);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setEditNote(null);
  };

  return (
    <>
      <Header onClearAll={handleClearAll} noteCount={notes.length} />
      
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <CreateNote addNote={addNotes} />
          <Notes notes={notes} onDelete={deleteNote} onEdit={handleEditNote} />
        </>
      )}
      
      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={cancelClearAll}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Clear All Notes
        </DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete all notes? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelClearAll} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmClearAll} color="error" autoFocus>
            Delete All
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Note Dialog */}
      <EditNoteDialog
        open={openEditDialog}
        note={editNote}
        onClose={handleCloseEditDialog}
        onSave={handleSaveEdit}
      />
    </>
  );
}

export default App;
