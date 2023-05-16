import { Box, Typography, useTheme } from "@mui/material";
import { Note, User } from "@sematic/common/src/Models";
import RunId from "src/components/RunId";
import TimeAgo from "src/components/TimeAgo";
import UserAvatar from "src/components/UserAvatar";

export function NoteView(props: {
    note: Note;
    author: User;
}) {
    const { note, author } = props;
    const theme = useTheme();

    return (
        <Box
            sx={{
                borderTop: 1,
                borderColor: theme.palette.grey[200],
                color: theme.palette.grey[800],
                px: 2,
                py: 2,
            }}
            key={note.id}
        >
            <Typography
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
            >
                <UserAvatar user={author} sx={{ width: 24, height: 24 }} />
                <Typography
                    sx={{
                        fontSize: "small",
                        ml: 1,
                        color: theme.palette.grey[500],
                        fontWeight: 500,
                    }}
                >
                    {author.first_name}:
                </Typography>
            </Typography>
            <Box sx={{ my: 4 }}>
                <Typography fontSize="small" sx={{ overflowWrap: "anywhere" }}>
                    {note.note}
                </Typography>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr auto" }}>
                <Box sx={{ gridColumn: 1, color: theme.palette.grey[300] }}>
                    {/*<DeleteIcon style={{ fontSize: 16 }} />*/}
                </Box>
                <Typography
                    sx={{
                        gridColumn: 3,
                        fontSize: "small",
                        color: theme.palette.grey[500],
                        textAlign: "right",
                    }}
                >
                    <TimeAgo date={note.created_at} /> on run{" "}
                    <RunId runId={note.root_id} trim />
                </Typography>
            </Box>
        </Box>
    );
}

