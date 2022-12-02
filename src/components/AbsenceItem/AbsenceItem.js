// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import membersJsonData from '../../json/members.json';
import { loadData, STATUS, reduceSizeNoteToString } from '../../utils/util';
import { Row, RowContainer } from './ItemStyle';

const statusIs = (empl) => {
  if (!empl.confirmedAt && !empl.rejectedAt) return STATUS.REQUESTED;
  if (empl.confirmedAt) return STATUS.CONFIRMED;
  return STATUS.REJECTED;
};

const getDuration = (startDate, endDate) => {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const DifferenceInTime = date2.getTime() - date1.getTime();
  return DifferenceInTime / (1000 * 3600 * 24) + 1;
};

const name = (userId) => {
  const members = loadData(membersJsonData);
  return members.find((item) => item.userId === userId).name;
};


export default function AbsenceItem({member}) {
  return (
    <RowContainer key={member.id}>
      <Row>{name(member.userId)}</Row>
      <Row>{member.type}</Row>
      <Row>{`${getDuration(member.startDate, member.endDate)} days`}</Row>
      <Tooltip title={member.memberNote} placement="bottom">
        <Row>{reduceSizeNoteToString(member.memberNote)}</Row>
      </Tooltip>
      <Row>{statusIs(member)}</Row>
      <Tooltip title={member.admitterNote} placement="bottom">
        <Row>
          {reduceSizeNoteToString(member.admitterNote)}
        </Row>
      </Tooltip>
    </RowContainer>
  );
}

AbsenceItem.propTypes = {
  member: PropTypes.object
};
