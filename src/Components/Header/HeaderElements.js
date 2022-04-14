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

    .header-logo a{
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
        margin-left: 30px;
        font-size: 16px;
        line-height: 30px;
        font-weight: 600;
        text-decoration: none;
    }
`;