import { styled } from '@mui/material/styles';
import { Paper, InputBase, Box } from '@mui/material';
import { ColorResult } from 'react-color';
import { useState, useRef, useEffect } from 'react';

// Styled Components for CreateNote
export const StyledPaper = styled(Paper)({
    padding: '2px 4px',
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    margin: '10rem auto',
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
});

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    margin: theme.spacing(1),
    padding: '8px',
    borderBottom: '1px solid #e0e0e0',
    '&:last-child': {
        borderBottom: 'none',
    },
}));

export const ColorPickerContainer = styled(Box)({
    position: 'relative',
    display: 'inline-block',
});

export const ColorPickerPopover = styled(Box)({
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 1,
    marginTop: '8px',
});

// Supporting Methods
export const handleColorChange = (color: ColorResult, setNoteColor: (color: string) => void) => {
    setNoteColor(color.hex);
};

export const useColorPicker = () => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [noteColor, setNoteColor] = useState('#ffffff');
    const colorPickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
                setShowColorPicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    /* styled Components  for Notes  */

    return {
        showColorPicker,
        setShowColorPicker,
        noteColor,
        setNoteColor,
        colorPickerRef
    };
};
