import { useState } from "react"
import { Candidate } from "./components/candidates";
import { Voter } from "./components/voters"

type UseVotePage = {
    voters: Voter[];
    candidates: Candidate[];
}

export const useVotePage = (): UseVotePage => {
    const [voters, setVoters] = useState<Voter[]>([]);
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    return {
        voters,
        candidates
    }
}