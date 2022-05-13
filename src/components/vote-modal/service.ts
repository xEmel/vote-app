import { useEffect, useState } from "react";
import { TableTypes, useVoteContext } from "../../context";

type UseVoteModal = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  type: TableTypes | null;
  handleSubmit: () => void;
  handleClose: () => void;
};

export const useVoteModal = (): UseVoteModal => {
  const [name, setName] = useState("");
  const { isModalOpen, type, setCandidates, setVoters, setIsModalOpen } =
    useVoteContext();

  useEffect(() => {
    if (isModalOpen) {
      setName("");
    }
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addVoter = () => {
    setVoters((voters) => [
      ...voters,
      { name, votedFor: null, id: voters.length },
    ]);
    closeModal();
  };

  const addCandidate = () => {
    setCandidates((candidates) => [
      ...candidates,
      { name, id: candidates.length, voteCount: 0 },
    ]);
    closeModal();
  };

  const handleSubmit = () => {
    if (type === "candidates") {
      addCandidate();
    } else {
      addVoter();
    }
  };

  return {
    name,
    setName,
    isModalOpen,
    type,
    handleSubmit,
    handleClose: closeModal,
  };
};
