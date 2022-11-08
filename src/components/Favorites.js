import styled from "styled-components";

export const StyledFavorites = styled.div`
    padding: 16px;
    width: 100%;
    background-color: #F9F9F9;

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    section {
        padding: 0 16px 16px 16px;
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    div a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    div a img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    div a span {
        width: 110px;
        text-align: center;
        font-size: 14px;
        font-weight: 400;
    }
`