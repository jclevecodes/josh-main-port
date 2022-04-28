import styled from "styled-components";

export const Wrapper = styled.div `
    .header-main {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: auto;
        z-index: 10;
        display: flex;
        padding: 50px 60px;
        justify-content: space-between;
        align-items: center;
    }

    .header-logo {
        color: black;
        text-decoration: none;
    }

    .header-navbar {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .nav-link {
        margin-left: 25px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        text-decoration: none;
        color: black;
    }

    .nav-button {
        font-size: 16px;
        color: black;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border: 2px solid black;
        border-radius: 12px;
        margin-left: 25px;
        line-height: 20px;
        text-decoration: none;
        cursor: pointer;
    }
`;