export interface NoteObject {
    id: string;
    title: string;
    details: string;
    color: string;
    date: string;
}

export interface INoteProps {
    note: NoteObject;
    onDelete: (id: string) => void;
    onEdit: (note: NoteObject) => void;
}

export interface INotesProps {
    notes: NoteObject[];
    onDelete: (id: string) => void;
    onEdit: (note: NoteObject) => void;
}

export interface HeaderProps {
    onClearAll?: () => void;
    noteCount?: number;
}

export interface EditNoteDialogProps {
    open: boolean;
    note: NoteObject | null;
    onClose: () => void;
    onSave: (note: NoteObject) => void;
}