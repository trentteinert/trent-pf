import css from 'styled-jsx/css';

export default css.global`
  .container {
    padding-top: 50px;
    padding-left: 50px;
    display: block;
    width: fit-content;
    height: fit-content;
  }
  .title {
    margin: 0;
    margin-bottom: 1px;
    font-size: 18px;
  }
  .contact {
    margin: 0;
    font-size: 14px;
    margin-bottom: 1px;
    cursor: pointer;
  }
  .navContainer {
    display: flex;
    justify-content: left;
    position: relative;
    width: 100%;
  }
  .navBtn {
    display: block;
    padding: 2px;
    margin-right: 7px;
    font-size: 14px;
    cursor: pointer;
  }
`;
