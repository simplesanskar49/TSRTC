
import styled from "styled-components";

const StyledNavigation = styled.div`
    .text-center{
        text-align: center !important;
    }
    .padding-1{
        padding: 10px;
    }
    .nav-bg{
        background-color: #19bc9c;
        padding: 10px 20px;
    }
    .nav-ul{
        list-style-type: none;
        justify-content: space-between;
        display: flex;
        height: auto;
        margin: 0px !important;
        li{
          a {
           color: #FFF ;
          }
        }
    }
`;

export default StyledNavigation;