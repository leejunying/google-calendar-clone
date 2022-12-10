import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  margin: 5px;
`;

export const SevenColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 10px;
  p {
    font-size: 12px;
    display: flex;
    justify-content: center;
    cursor: pointer;

    //active
  }
  .active {
    
     background-color: lightblue ;
    border-radius: 50%;
    color:white;
    
     
  }
  .today{
    background-color: darkblue;
    border-radius :50%;
    color:white;
    
  }

  .oldday{
    
    color:gray;
  

  }

  
`;
