import { TableTypes } from "../../context"

export const TABLE_NAMES: {[type in TableTypes]: string} = {
    candidates: 'Candidates',
    voters: 'Voters'
}

export const COLUMN_HEADERS: {[type in TableTypes]: string[]} = {
    candidates: ['Name', 'Votes'],
    voters: ['Name', 'Has voted']
}

export const NO_DATA_FOUND: {[type in TableTypes]: string} = {
    candidates: 'No candidates found',
    voters: 'No voters found'
}

