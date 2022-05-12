import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from "@mui/material";
  import { ReactElement } from "react";
  import { VoteCard } from "../../../../components/vote-card";
  
  export type Candidate = {
    name: string;
    voteCount: number;
  };
  
  type CandidatesProps = {
    data: Candidate[];
  };
  
  export const Candidates = ({ data }: CandidatesProps): ReactElement => {
    return (
      <VoteCard title="Candidates" onAddClick={() => {}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Votes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length ? (
              data.map((candidate) => (
                <TableRow key={candidate.name}>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.voteCount}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>No candidates found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </VoteCard>
    );
  };
  