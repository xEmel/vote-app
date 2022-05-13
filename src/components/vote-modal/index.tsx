import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useVoteModal } from "./service";
import { MODAL_TITLES } from "./utils";


export const VoteModal = () => {
  const { isModalOpen, name, setName, type, handleClose, handleSubmit } = useVoteModal();

  return (
    <Dialog
      {...{
        open: isModalOpen,
        fullWidth: true,
        maxWidth: "sm",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <DialogTitle>{type ? MODAL_TITLES[type] : ""}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="standard"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            type="submit"
            disabled={!name.length}
          >
            Confirm
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
