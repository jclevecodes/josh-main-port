import styled from "styled-components";

export const Wrapper = styled.div `
    padding: 0px 150px;
    // max-width: 900px;
    position: absolute;
    justify-content: center;

    .intro-heading {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 0px 40px;
        width: 100%;
        font-size: 30px;
        white-space: nowrap;
    }

    .intro {
        display: grid;
        grid-template-columns: 3fr 2fr;
        gap: 50px;
        max-width: 900px;
    }

    .intro-text {
        margin: 0px 0px 15px;
    }

    .skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        gap: 0px 10px;
        padding: 0px;
        margin: 20px 0px 0px;
        overflow: hidden;
        list-style: none;
    }

    .skills-list li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        font-size: 15px;
    }

    .styled-pic {
        position: relative;
        max-width: 300px;
    }

    .wrapper {
        box-shadow: 0 10px 30px -15px blue;
        display: block;
        position: relative;
        width: 100%;
        border-radius: 4px;
        background-color: black;
    }

    &.hover, &.focus {
        background: transparent;
        outline: 0;

        &:after {
            top: 15px;
            left: 15px;
        }
        .img {
            filter: none;
            mix-blend-mode: normal;
        }
    }

    .image {
        position: relative;
        border-radius: 12px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        width: 100%
        object-fit: cover
    }

`;