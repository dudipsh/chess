import { Box, Modal, Typography } from "@mui/material";

interface GameOverModalProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

export const GameOverModal = ({
  show,
  message,
  onClose,
}: GameOverModalProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Game Over
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </Box>
    </Modal>
  );
};
