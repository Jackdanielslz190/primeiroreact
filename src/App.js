import React from 'react'

import People from './assets/people.svg'

import Arrow from './assets/arrow.svg'

import {
    MeuContainer,
    MeuH1,
    IMG,
    Containeritens,
    InputLabel,
    Input,
    Button
} from "./styles";

const App = () => {



    return (
        <MeuContainer>

            <IMG alt='logo-imagem' src={People} ></IMG>

    <Containeritens>
            
            
            <MeuH1>Olá</MeuH1>

            <InputLabel>Nome</InputLabel>
            <Input placeholder='Nome'></Input>
            
            <InputLabel>Idade</InputLabel>
            <Input placeholder='Idade'></Input>

            <Button>Cadastrar <img src={Arrow}></img></Button>

     </Containeritens>


        </MeuContainer>
 


    )
}

export default App