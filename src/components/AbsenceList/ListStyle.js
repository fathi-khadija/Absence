import styled from 'styled-components';

export const ContainerWrapper = styled.div`
    padding: 0 32px 0
`;

export const Row = styled.div`
    padding: 10px;
    font-size: 14px;
    width: 140px;
    font-family: "Roboto"
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between
`;




export const RowHeader = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
    color: #fcbd71;
    box-shadow: rgb(149 157 165 / 20%) 0px 4px 12px;
    border-radius: 5px;
    
`;
export const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const FilterWrap = styled.div`
    display: flex;
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const TotalNumber = styled.div`
    display: flex;
    margin-top: 40px;
    margin-bottom: 10px;
    color: #fc9c23;
    font-family: "Roboto";
    padding: 12px 32px;
    border: solid 2px #fc9c23;
    border-radius: 5px;

`;

export const EmptyList = styled.div`
    font-family:"Roboto";
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-top: 120px;
    color: #585858
`;
