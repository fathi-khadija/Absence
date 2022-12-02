/* eslint-disable camelcase */
import absenceJsonData from '../json/absences.json';

const MAX_CHAR = 15;
export const PAGE_SIZE = 10;

export const STATUS = {
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED',
  REQUESTED: 'REQUESTED',
};

export const TYPE = {
  SICKNESS: 'sickness',
  VACATION: 'vacation',
};

export const loadData = (jsonData) => JSON.parse(JSON.stringify(jsonData)).payload;

export const AllAbsencesData = loadData(absenceJsonData);

export const reduceSizeNoteToString = (note) => {
  if (note.length < MAX_CHAR) {
    return note;
  }
  return (note.substring(0, MAX_CHAR)).concat('...');
};
