import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

function Home () {

   return(
       <div>
        <MenuSistema tela={'home'} />
           <div style={{marginTop: '5%'}}>
               <Container>
                   <Grid columns={2} divided>
                       <Grid.Row>
                           <Grid.Column>
                               <Image src='/logoprovisorio.png' size='small' />
                           </Grid.Column>
                           <Grid.Column>
                              
                               Bem vindo à Barbearia Chefe <br/>
                               Este sistema foi desenvolvido na disciplina de Projeto e Prática II. <br/> <br/>
                            

                           </Grid.Column>
                       </Grid.Row>
                   </Grid>
               </Container>
           </div>
       </div>
   )
}
export default Home;