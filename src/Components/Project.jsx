import React from 'react'
import styled from 'styled-components'
import styles from './Project.module.css'

export default function Project({ data }) {
    
    return (
        <>
            {data.map((el) => (
            <Cont key={el.id}>
                <ImgCont>
                    <img src={el.img} alt="" />
                </ImgCont>
                
                
                <Description>
                   <div className={styles.des2}>
                        {el.des2} {el.des1}<br />
                        {el.a3} {el.l3} <br />
                        {el.a1} {el.l2} <br />
                        {el.a2} {el.l1}
                   </div>
                </Description>
               
                
                    
                    
                <Name>
                    <div className="name"><a href={el.url} target="_blank" rel="noopener noreferrer">{el.name}</a></div>
                    <div className="btn">
                        <Code><a href={el.gh} target="_blank" rel="noopener noreferrer">Code</a></Code>
                        <Site><a href={el.url1} target="_blank" rel="noopener noreferrer">Site</a></Site>
                    </div>
                </Name>   
            </Cont>
            ))}
        </>
    )
}

const Description = styled.div`
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
`

const Cont = styled.div`
    padding-bottom: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    width: 65%;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: transform 250ms;
    :hover {
    transform: translateY(-2px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 6px -1px, rgba(0, 0, 0, 0.3) 0px 2px 6px -1px;
    }
    @media (max-width: 1264px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 95%;
        margin: 1rem;
    }
    @media (max-width: 500px) {
        width: 100%;
        margin: 0.8rem;
    }
`
const ImgCont = styled.div`
    cursor: pointer;
    align-self: center;
    max-width: 100%;
    border-bottom: 2px solid gray;
    img{
        width: 100%;
    }
    /* @media (max-width: 300px) {
        width: auto;
        padding: 0em;
    } */
`
const Name = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    margin-top: 0.5rem;
    @media (max-width: 768px) {
        padding: 0 1.5rem;
    }
    @media (max-width: 500px) {
        padding: 0 0.5rem;
    }
        .name{
            text-align: center;
            cursor: pointer;    
            padding: 0.5rem 0.5rem;
            font-size: 1rem;
            box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
            :hover{
            box-shadow: rgba(62, 62, 105, 0.15) 0px 3px 6px 0px, rgba(37, 37, 37, 0.05) 0px 1px 3px 0px;
            background-color: #d6ffe0;
            }
            a{
                text-decoration: none;
                color: #1f1f1f;
            }
        }
        .btn{
            display: flex;
            justify-content: space-between;
        }
`
const Code = styled.div`
    padding: 0.5rem 0.6rem 0 0.5rem;
    border-right: 1px solid gray;
    cursor: pointer;
    a{
        text-decoration: none;
        color: #1f1f1f;
        box-shadow: rgba(62, 62, 105, 0.15) 0px 3px 6px 0px, rgba(37, 37, 37, 0.05) 0px 1px 3px 0px;
    }

    :hover{
        background-image: linear-gradient(to right, #fff,#fafafa,#f7f7f7, #eeeeee);
    }
`
const Site = styled.div`
    padding: 0.5rem 0.5rem 0 0.5rem;
    cursor: pointer;
    a{
        text-decoration: none;
        color: #1f1f1f;
        box-shadow: rgba(62, 62, 105, 0.15) 0px 3px 6px 0px, rgba(37, 37, 37, 0.05) 0px 1px 3px 0px;
    }
    :hover{
        background-image: linear-gradient(to right, #eeeeee,#fafafa,#f7f7f7, #fff);
    }
`

