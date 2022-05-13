import React, { ReactElement, createContext, useState } from "react";

export type Candidate = {
  id: number;
  name: string;
};

export type Voter = {
  id: number;
  name: string;
  votedFor: number | null;
};

export type TableTypes = "candidates" | "voters";

type VoteContextType = {
  voters: Voter[];
  setVoters: React.Dispatch<React.SetStateAction<Voter[]>>;
  candidates: Candidate[];
  setCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: TableTypes | null;
  setType: React.Dispatch<React.SetStateAction<TableTypes | null>>;
};

const defaultInitialContext: VoteContextType = {
  voters: [],
  setVoters: () => {},
  candidates: [],
  setCandidates: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  type: null,
  setType: () => {},
};

export const VoteContext = createContext<VoteContextType>(
  defaultInitialContext
);

type ContextProviderProps = {
  children: ReactElement;
};

export const ContextProvider = ({
  children,
}: ContextProviderProps): ReactElement => {
  const [voters, setVoters] = useState<Voter[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [type, setType] = useState<TableTypes | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValue: VoteContextType = {
    voters,
    setVoters,
    candidates,
    setCandidates,
    isModalOpen,
    setIsModalOpen,
    type,
    setType,
  };

  return (
    <VoteContext.Provider value={initialValue}>{children}</VoteContext.Provider>
  );
};
