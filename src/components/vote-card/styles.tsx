import { Grid, styled, Typography } from "@mui/material";

export const Card = styled(Grid)(({ theme }) => ({
    background: theme.palette.grey[800],
}))

export const CardHeader = styled('div')({
    height: '50px',
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Title = styled(Typography)({
    margin: '0 auto',
})