import { Box, Button, IconButton, Typography } from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { SketchPicker } from 'react-color';
import { NoteObject } from '../models/note';
import { 
    StyledPaper, 
    StyledInputBase, 
    ColorPickerContainer, 
    ColorPickerPopover,
    handleColorChange,
    useColorPicker
} from './index';
import { useState } from 'react';
import { red } from '@mui/material/colors';
import { v4 as uuid } from 'uuid';

const defaultObject: NoteObject = {
    id: '',
    title: '',
    details: '',
    color: '#ffffff',
    date: new Date().toLocaleString(),
};

interface CreateNoteProps {
    addNote: (note: NoteObject) => void;
}

const CreateNote: React.FC<CreateNoteProps> = ({ addNote }) => {
    const {
        showColorPicker,
        setShowColorPicker,
        noteColor,
        setNoteColor,
        colorPickerRef
    } = useColorPicker();

    const [note, setNote] = useState<NoteObject>(defaultObject);
    const [error, setError] = useState<string>('');

    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const validateNote = (): boolean => {
        if (!note.title.trim() && !note.details.trim()) {
            setError('Please add a title or note content');
            return false;
        }
        return true;
    };

    const handleAddNote = () => {
        if (!validateNote()) return;

        const newNote: NoteObject = {
            ...note,
            id: uuid(),
            date: new Date().toLocaleString(),
            color: noteColor
        };

        addNote(newNote);
        // Reset form after adding note
        setNote(defaultObject);
        setError('');
    };

    return (
        <Box 
            component="section"
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: 2,
                maxWidth: '600px',
                margin: '0 auto',
                padding: '1rem'
            }}
        >
            <StyledPaper elevation={3} sx={{ backgroundColor: noteColor }}>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                    <StyledInputBase
                        placeholder="Title"
                        fullWidth
                        sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                        onChange={handleValueChange}
                        name="title"
                        value={note.title}
                        aria-label="Note title"
                    />
                    <IconButton 
                        onClick={() => setShowColorPicker(!showColorPicker)}
                        aria-label="change note color"
                        sx={{ ml: 1 }}
                    >
                        <ColorLensIcon />
                    </IconButton>
                </Box>
                <StyledInputBase
                    placeholder="Take a note..."
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ fontSize: '1rem', px: 1 }}
                    onChange={handleValueChange}
                    name="details"
                    value={note.details}
                    aria-label="Note content"
                />
                {showColorPicker && (
                    <ColorPickerContainer ref={colorPickerRef}>
                        <ColorPickerPopover>
                            <SketchPicker
                                color={noteColor}
                                onChange={(color) => handleColorChange(color, setNoteColor)}
                            />
                        </ColorPickerPopover>
                    </ColorPickerContainer>
                )}
                {error && (
                    <Typography 
                        color="error" 
                        sx={{ 
                            mt: 1, 
                            px: 2,
                            fontSize: '0.875rem'
                        }}
                        role="alert"
                    >
                        {error}
                    </Typography>
                )}
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button 
                        variant="contained" 
                        onClick={handleAddNote}
                        disabled={!note.title.trim() && !note.details.trim()}
                        sx={{ 
                            backgroundColor: red[500],
                            '&:hover': {
                                backgroundColor: red[600],
                            },
                            minWidth: '120px'
                        }}
                    >
                        Add Note
                    </Button>
                </Box>
            </StyledPaper>
        </Box>
    );
}

export default CreateNote;
// https://www.youtube.com/watch?v=cZn7g-oLPEw