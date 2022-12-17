import React from 'react'
import styled from 'styled-components'
import Project from './Project'



export default function Projects() {
    
    const projectData = [
        {
            id: "1", name: "Groww.com - clone", img: "groww-main1.png", gh: "https://github.com/kishankumar2021/project_grow", url: "https://groww-22kwt0qlk-kishanmasai2021-gmailcom.vercel.app/", url1: "https://groww.in/",
            des1: "DESCRIPTION", l1: "Users can buy and sells the stocks anytime", l2: "Users can register and then login", l3: "Add stocks to the cart", l4: "Add Money to the wallet"
        },
        // { id: "2", name: "Groww.com - clone", img:"des.png", gh: "https://github.com/kishankumar2021/project_grow", url: "https://groww-22kwt0qlk-kishanmasai2021-gmailcom.vercel.app/", url1: "https://groww.in/" },
    
        {
            id: "2", name: "Netmeds - clone", img: "netmed1.png", gh: "https://github.com/kishankumar2021/Netmeds-clone", url: "https://netmeds-clone-master.vercel.app/", url1: "https://www.netmeds.com/",
           des2:"DESCRIPTION", a1:"Users can register and then login", a2:"Users can scroll through the products and view the product details", a3:"Add Money to the wallet"},
        // { id: "2", name: "Netmeds - clone", img: "des1.png", gh:"https://github.com/kishankumar2021/Netmeds-clone", url:"https://netmeds-clone-master.vercel.app/", url1:"https://www.netmeds.com/" },
    ];

    return (
        
        <Cont id='projects'>
            <Heading>Projects</Heading>
            <ProjectsCont>
                <Project data={projectData} />
            </ProjectsCont> 
        </Cont>
    )
}


const Cont = styled.div`
    background-color: #cce8ffb8;
    position: relative;
`
const Heading = styled.div`
    padding-top: 5rem;
    text-align:center;
    font-size: 2rem;
    font-weight: 300;
`
const ProjectsCont = styled.div`
    margin: 5rem auto 0;
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: 1264px) {
        margin: 2rem auto 0;
        width: 80vw;
    }
    @media (max-width: 768px) {
        margin: 2rem auto 0;
        width: 90vw;
        padding-bottom: 3rem;
    }
    @media (max-width: 400px) {
        margin: auto;
        width: 100vw;
        padding-bottom: 3rem;
    }
    
`