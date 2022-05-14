import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactElement } from "react";
import { COLUMN_HEADERS, NO_DATA_FOUND, TABLE_NAMES } from "./utils";
import { VoteCard } from "../vote-card";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { TableTypes, useVoteContext, Voter } from "../../context";

type TableProps = {
  type: TableTypes;
};

const isVoter = (voter: any): voter is Voter => {
  return Object.keys(voter).some((key) => key === "votedFor");
};

export const VoteTable = ({ type }: TableProps): ReactElement => {
  const { candidates, voters, setIsModalOpen, setType } = useVoteContext();

  const data = type === "candidates" ? candidates : voters;

  const handleAdd = () => {
    setType(type);
    setIsModalOpen(true);
  };

  const getCandidateVoteCount = (candidateId: number) =>
    voters.filter((voter) => voter.votedFor === candidateId)?.length || 0;

  return (
    <VoteCard title={TABLE_NAMES[type]} onAddClick={() => handleAdd()}>
      <Table>
        <TableHead>
          <TableRow>
            {COLUMN_HEADERS[type].map((header) => (
              <TableCell key={`${type}-${header}`}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map((element) => (
              <TableRow key={`${type}-${element.id}`}>
                <TableCell>{element.name}</TableCell>
                {isVoter(element) ? (
                  <TableCell sx={{ paddingY: 0 }}>
                    {element.votedFor || element.votedFor === 0 ? (
                      <CheckIcon />
                    ) : (
                      <CloseIcon />
                    )}
                  </TableCell>
                ) : (
                  <TableCell>{getCandidateVoteCount(element.id)}</TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>{NO_DATA_FOUND[type]}</TableCell>
              <TableCell />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </VoteCard>
  );
};
