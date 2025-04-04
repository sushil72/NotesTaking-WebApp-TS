import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, TextField } from '@mui/material';
import { NoteObject } from '../models/note';
import { useState, useEffect } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { IconButton } from '@mui/material';

import {EditNoteDialogProps} from '../models/note'

const EditNoteDialog: React.FC<EditNoteDialogProps> = ({ open, note, onClose, onSave }) => {
    const [editedNote, setEditedNote] = useState<NoteObject | null>(null);
    const [showColorPicker, setShowColorPicker] = useState(false);

    useEffect(() => {
        if (note) {
            setEditedNote({ ...note });
        }
    }, [note]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (editedNote) {
            setEditedNote({
                ...editedNote,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleColorChange = (color: ColorResult) => {
        if (editedNote) {
            setEditedNote({
                ...editedNote,
                color: color.hex
            });
        }
    };

    const handleSave = () => {
        if (editedNote) {
            onSave(editedNote);
        }
        onClose();
    };

    if (!editedNote) return null;

    return (
        <Dialog 
            open={open} 
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 2,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                    backgroundColor :  editedNote.color
                }
            }}
        >
            <DialogTitle sx={{ 
                fontWeight: 'bold',
                fontSize: '1.5rem',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                pb: 2,
                
            }}>
                Edit Note
            </DialogTitle>
            <DialogContent sx={{ pt: 3 }}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2, 
                    backgroundColor: editedNote.color,
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TextField
                            name="title"
                            label="Title"
                            value={editedNote.title}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
                                    borderRadius: 1,
                                    '& fieldset': {
                                        borderColor: 'rgba(0,0,0,0.1)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'primary.main',
                                    }
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'rgba(0,0,0,0.7)',
                                },
                                '& .MuiInputBase-input': {
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                }
                            }}
                        />
                        <IconButton 
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            sx={{ 
                                backgroundColor: 'white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                '&:hover': { 
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    transform: 'scale(1.05)'
                                },
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <ColorLensIcon />
                        </IconButton>
                    </Box>
                    <TextField
                        name="details"
                        label="Details"
                        value={editedNote.details}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                                borderRadius: 1,
                                '& fieldset': {
                                    borderColor: 'rgba(0,0,0,0.1)',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'rgba(0,0,0,0.2)',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                }
                            },
                            '& .MuiInputLabel-root': {
                                color: 'rgba(0,0,0,0.7)',
                            },
                            '& .MuiInputBase-input': {
                                fontSize: '1rem',
                                lineHeight: 1.5,
                            }
                        }}
                    />
                    {showColorPicker && (
                        <Box sx={{ 
                            position: 'absolute', 
                            zIndex: 2,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            borderRadius: 1,
                            overflow: 'hidden'
                        }}>
                            <Box
                                sx={{
                                    position: 'fixed',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                }}
                                onClick={() => setShowColorPicker(false)}
                            />
                            <SketchPicker
                                color={editedNote.color}
                                onChangeComplete={handleColorChange}
                            />
                        </Box>
                    )}
                </Box>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <Button 
                    onClick={onClose} 
                    variant="outlined"
                    sx={{ 
                        borderRadius: 1,
                        textTransform: 'none',
                        fontWeight: 500
                    }}
                >
                    Cancel
                </Button>
                <Button 
                    onClick={handleSave} 
                    variant="contained" 
                    color="primary"
                    sx={{ 
                        borderRadius: 1,
                        textTransform: 'none',
                        fontWeight: 500,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        '&:hover': {
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        }
                    }}
                >
                    Save Changes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditNoteDialog; 