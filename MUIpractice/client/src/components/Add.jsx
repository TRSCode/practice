import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: "20px",
})

const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)}
                title="Add"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: {
                        xs: "calc(50% - 25px)", md: 30
                    }
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://media.licdn.com/dms/image/sync/D5627AQGtY-UI92Bwxg/articleshare-shrink_800/0/1688691430361?e=1689296400&v=beta&t=9sno-MqxYqxI4PTmPDC5zYDEqgLiO_FXZhn7tNXoxTY" alt="avatar"
                        />
                        <Typography variant="span" fontWeight={500}>John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup 
                        variant="contained" 
                        aria-label="outlined primary button group"
                        fullWidth
                    >
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRangeIcon/>
                        </Button>
                    </ButtonGroup>

                </Box>
            </StyledModal>
        </>
    )
}

export default Add