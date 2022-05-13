import React, { useContext, useState } from "react";
import { VoteContext } from "../../context";

type UseVoteForm = {
  selectedVoter: string | number;
  setSelectedVoter: React.Dispatch<React.SetStateAction<string | number>>;
  selectedCandidate: string | number;
  setSelectedCandidate: React.Dispatch<React.SetStateAction<string | number>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const useVoteForm = (): UseVoteForm => {
  const [selectedVoter, setSelectedVoter] = useState<string | number>('');
  const [selectedCandidate, setSelectedCandidate] = useState<string | number>('');
  const { setCandidates, setVoters } = useContext(VoteContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const voterId: number | null = selectedVoter === '' ? null : Number(selectedVoter);
    const candidateId: number | null = selectedCandidate === '' ? null : Number(selectedCandidate);

    setVoters((voters) => voters.map((voter) => {
        if(voter.id === voterId) {
            return {
                ...voter,
                votedFor: candidateId,
            }
        }
        return voter;
    }));
    setCandidates((candidates) => candidates.map((candidate => {
        if(candidate.id === selectedCandidate) {
            return {
                ...candidate,
            }
        }
        return candidate
    })))
    }

  return {
    selectedVoter,
    setSelectedVoter,
    selectedCandidate,
    setSelectedCandidate,
    handleSubmit,
  };
};
