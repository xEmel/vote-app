import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { useVoteContext } from "../../context";
import { useVoteForm } from "./service";

export const VoteForm = (): ReactElement => {
  const {
    selectedCandidate,
    setSelectedCandidate,
    selectedVoter,
    setSelectedVoter,
    handleSubmit,
  } = useVoteForm();
  const { candidates, voters } = useVoteContext();

  return (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12}>
            <Typography variant="h6">Vote!</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>I am</InputLabel>
              <Select
                value={selectedVoter}
                label="I am"
                onChange={(ev) => setSelectedVoter(ev.target.value)}
              >
                <MenuItem value={""}>None</MenuItem>
                {voters.map((voter) => (
                  <MenuItem key={voter.name} value={voter.id}>
                    {voter.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>I vote for</InputLabel>
              <Select
                value={selectedCandidate}
                label="I vote for"
                onChange={(ev) => setSelectedCandidate(ev.target.value)}
              >
                <MenuItem value={""}>None</MenuItem>
                {candidates.map((candidate) => (
                  <MenuItem key={candidate.name} value={candidate.id}>
                    {candidate.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={1}>
            <Button
              type="submit"
              disabled={!selectedVoter && selectedVoter !== 0}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};
