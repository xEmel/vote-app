import { Grid, Typography } from "@mui/material"
import { ReactElement } from "react"
import { VoteForm } from "../../components/vote-form"
import { VoteModal } from "../../components/vote-modal"
import { VoteTable } from "../../components/vote-table"

export const VotePage = (): ReactElement => {
    return (
        <Grid container spacing={5} p={5}>
            <Grid item xs={12}>
                <Typography variant='h4'>Voting APP</Typography>
            </Grid>
            <VoteTable type={'voters'} />
            <VoteTable type={'candidates'} />
            <VoteModal />
            <VoteForm />
        </Grid>
    )
}