import styled, {createGlobalStyle} from "styled-components";
import BGImage from "./img/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #FFF;
    }

    .score {
        color: #FFF;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, sans-serif;
        color: #CCC;
        font-size: 70px;
        text-align: center;
        margin: 20px;
        font-weight: 400;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #FFF, #FFCC91);
        border: 2px solid #D38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`;