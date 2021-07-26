import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
`
export const Container = styled.div`
    height: 100%;
    max-width: 100vw;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: firebrick;
`
export const ContentNav = styled.nav`
    height: 50px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    top: 0;
    position: fixed;
    border-bottom: 3px solid black;
    margin: 0;
`
export const Input = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    padding: 3px;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`
export const ButtonLogin = styled.button`
    width: 200px;
    height: 35px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    padding: 3px;
    background-color: firebrick;
    color: white;
    font-size: 17px;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`
export const ImgDestaque = styled.img`
    display: flex;
    max-width: 100%;
    margin-top: 50px;
`
export const Content = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-flow: row wrap;
`
export const Card = styled.div`
    width: 300px;
    align-items: center;
    justify-content: center;
    height: 420px;
    border: 1px solid black;
    box-shadow: 1px 5px 5px 5px black;
    margin: 15px;
    border-radius: 5px;
    background-color: white;

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 22%;
        margin-bottom: 0;
    }

    p{
        text-align: center;
        font-size: 20px;
        margin: 2px;
    }
`
export const ButtonComprar = styled.button`
    height: 40px;
    width: 100%;
    border: 1px solid black;
    background-color: black;
    color: white;
    font-size: 18px;

    &:hover{
        background-color: orange;
        border-radius: 5px;
        border: none;
    }
`
export const Footer = styled.footer`
    width: 100%;
    height: 40px;
    background-color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: relative;
`
export const NomeFooter = styled.p`
    color: white;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    margin: 5px;
`