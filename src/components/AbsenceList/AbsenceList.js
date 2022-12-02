// @flow

import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import './List.scss';
import AbsenceItem from '../AbsenceItem/AbsenceItem';
import { AllAbsencesData, TYPE, PAGE_SIZE } from '../../utils/util';
import {
  FilterWrap, PaginationWrap, TotalNumber, Row, RowHeader, EmptyList, ContainerWrapper, Header
} from './ListStyle';
import Loading from '../Loading/Loading';

export default function AbsenceList() {
  const [data, setData] = useState(AllAbsencesData);
  const [type, setType] = useState('');
  const [page, setPage] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []); 

  useEffect(() => {
    if (type || selectedDate) {
      if (selectedDate !== null) {
        setData(
          AllAbsencesData.filter(
            (item) => item.type === type && item.startDate === selectedDate,
          ).slice(
            page * PAGE_SIZE,
            (page + 1) * PAGE_SIZE,
          ),
        );
      } else {
        setData(
          AllAbsencesData.filter((item) => item.type === type).slice(
            page * PAGE_SIZE,
            (page + 1) * PAGE_SIZE,
          ),
        );
      }
    } else {
      setData(
        AllAbsencesData.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE),
      );
    }
  }, [type, page, selectedDate]);

  const lengthDataByType = () => AllAbsencesData.filter(
    (item) => (type ? item.type === type : true),
  ).length;

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ): (
        <ContainerWrapper>
        <Header>
          <FilterWrap>
            <div className='filter-wrapper__typeContainer'>
              <select
                className='filter-wrapper__typeContainer__type'
                onChange={(e) => {
                  setType(e.target.value);
                  setPage(0);
                }}
              >
                <option value={""}>{"All"}</option>
                <option value={TYPE.SICKNESS}>{TYPE.SICKNESS}</option>
                <option value={TYPE.VACATION}>{TYPE.VACATION}</option>
              </select>
            </div>
            <div className='filter-wrapper__dateContainer'>
              <input  className='filter-wrapper__dateContainer__date'
              type="date" onChange={(e) => {
                  setSelectedDate(e.target.value);
                  setPage(0);
                }}/>
            </div>
          </FilterWrap>
          <TotalNumber>
            {`Total absence: ${AllAbsencesData.length}`}
          </TotalNumber>
        </Header>
        {AllAbsencesData.length == 0 
        ? (<EmptyList>
          {"Absence list is empty"}
          </EmptyList>) 
        : <div>
        <RowHeader>
            <Row>Name</Row>
            <Row>Type</Row>
            <Row>Duration</Row>
            <Row>Note</Row>
            <Row>Status</Row>
            <Row>Note</Row>
          </RowHeader>
          {data.map((item) => (
            <AbsenceItem key={item.id} member={item} />
          ))}
          <PaginationWrap>
            <Pagination
              count={parseInt(lengthDataByType() / 10, 10) + 1}
              variant="outlined"
              color="warning"
              onChange={(e, p) => setPage(p - 1)}
            />
          </PaginationWrap>
          </div>
          }
          
        </ContainerWrapper>
      )}
    
    </React.Fragment>
  );
}
