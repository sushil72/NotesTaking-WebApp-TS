import { Typography, Container, Box } from '@mui/material';
import { INotesProps, NoteObject } from '../models/note';
import Note from './Note';

const Notes: React.FC<INotesProps> = ({ notes = [], onDelete, onEdit }) => {
    if (!Array.isArray(notes)) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography 
                    variant="body1" 
                    color="error"
                    sx={{ textAlign: 'center' }}
                >
                    Error: Invalid notes data
                </Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography 
                variant="h4" 
                component="h1" 
                sx={{ 
                    mb: 4,
                    fontWeight: 'bold',
                    color: 'text.primary'
                }}
            >
                My Notes
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {notes.map((note: NoteObject) => (
                    <Box 
                        key={note.id}
                        sx={{
                            width: {
                                xs: '100%',
                                sm: 'calc(50% - 16px)',
                                md: 'calc(33.333% - 16px)',
                                lg: 'calc(25% - 16px)'
                            },
                            minHeight: '200px'
                        }}
                    >
                        <Note 
                            note={note} 
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    </Box>
                ))}
            </Box>
            {notes.length === 0 && (
                <Typography 
                    variant="body1" 
                    sx={{ 
                        textAlign: 'center',
                        color: 'text.secondary',
                        mt: 4
                    }}
                >
                    No notes yet. Create your first note!
                </Typography>
            )}
        </Container>
    );
};

export default Notes;