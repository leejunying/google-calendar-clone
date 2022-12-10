import styled from "@emotion/styled";



export const SevenColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
   .head {
    min-height: 50px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-right: 1px solid lightblue;
    border-bottom: 1px solid lightblue;

 

    //active
  }
  .content{ 
    border-right: 1px solid lightblue;
    border-bottom: 1px solid lightblue;
     border-top:none;
    border-left: none;
    background-color: white;
    min-height: 178px;
    margin-top: -14px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .active {
    
     background-color: lightblue ;
    border-radius: 50%;
    color:white;
    
     
  }
  .today{
    height: 24px;
    width: 24px;
    display: flex;
    justify-content: center;
    background-color: darkblue;
    border-radius:50%;
    color:white;
  }
 

 `
