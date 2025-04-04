import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { HeaderProps } from '../models/note';

const Header: React.FC<HeaderProps> = ({ onClearAll, noteCount = 0 }) => {
    return (
        <AppBar sx={{ backgroundColor: 'orange' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuBookIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyNote {noteCount > 0 && `(${noteCount})`}
                </Typography>
                {noteCount > 0 && onClearAll && (
                    <Tooltip title="Clear all notes">
                        <IconButton 
                            color="inherit"
                            aria-label="clear all notes"
                            onClick={onClearAll}
                        >
                            <DeleteSweepIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;
