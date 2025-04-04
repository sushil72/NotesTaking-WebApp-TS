import { Card, CardContent, Box, Typography, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { INoteProps } from "../models/note";

const Note: React.FC<INoteProps> = ({ note, onDelete, onEdit }) => {
    return (
        <Card 
            sx={{ 
                backgroundColor: note.color,
                minHeight: '200px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography 
                        variant="h6" 
                        component="h2"
                        sx={{ 
                            fontWeight: 'bold',
                            color: note.color === '#ffffff' ? 'text.primary' : 'white',
                            wordBreak: 'break-word',
                            flex: 1
                        }}
                    >
                        {note.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="Edit note">
                            <IconButton 
                                onClick={() => onEdit(note)}
                                size="small"
                                sx={{ 
                                    color: note.color === '#ffffff' ? 'text.secondary' : 'white',
                                    '&:hover': {
                                        color: 'primary.main',
                                    }
                                }}
                            >
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete note">
                            <IconButton 
                                onClick={() => onDelete(note.id)}
                                size="small"
                                sx={{ 
                                    color: note.color === '#ffffff' ? 'text.secondary' : 'white',
                                    '&:hover': {
                                        color: 'error.main',
                                    }
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        color: note.color === '#ffffff' ? 'text.primary' : 'white',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word'
                    }}
                >
                    {note.details}
                </Typography>
                <Typography 
                    variant="caption" 
                    sx={{ 
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        color: note.color === '#ffffff' ? 'text.secondary' : 'rgba(255,255,255,0.7)'
                    }}
                >
                    {note.date}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Note;