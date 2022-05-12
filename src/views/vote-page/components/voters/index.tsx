import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactElement } from "react";
import { VoteCard } from "../../../../components/vote-card";

export type Voter = {
  name: string;
  hasVoted: boolean;
};

type VotersProps = {
  data: Voter[];
};

export const Voters = ({ data }: VotersProps): ReactElement => {
  return (
    <VoteCard title="Voters" onAddClick={() => {}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Has voted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map((voter) => (
              <TableRow key={voter.name}>
                <TableCell>{voter.name}</TableCell>
                <TableCell>{voter.hasVoted}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No voters found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </VoteCard>
  );
};
