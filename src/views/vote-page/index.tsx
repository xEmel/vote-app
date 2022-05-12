import { Grid } from "@mui/material"
import { ReactElement } from "react"
import { Candidates } from "./components/candidates"
import { Voters } from "./components/voters"
import { useVotePage } from "./service"

export const VotePage = (): ReactElement => {
    const { voters, candidates } = useVotePage();
    return (
        <Grid container spacing={5}>
            <Voters data={voters} />
            <Candidates data={candidates} />
        </Grid>
    )
}