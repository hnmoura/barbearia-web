
import React from "react";
import { Container, Grid, Image, Step } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import '../../theme.css'; 



function Home() {
  return (
    <div>
      <MenuSistema tela={'home'} />
      
      <div style={{ marginTop: '5%' }}>
        <Container>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Image src='/logoprovisorio.png' size='medium' />
              </Grid.Column>
              <Grid.Column>
                <h2>Bem-vindo à Barbearia, <strong> Chefe! </strong> </h2>
                <p> Por onde começar? </p>
                
                <Step.Group vertical ordered>
                  <Step>
                    <Step.Content>
                      <Step.Title>Realize seu cadastro</Step.Title>
                      <Step.Description>
                        Informe seus dados num formulário simples.
                      </Step.Description>
                    </Step.Content>
                  </Step>
                  <Step>
                    <Step.Content>
                      <Step.Title>Agende um atendimento </Step.Title>
                      <Step.Description>
                        Oferecemos diversos serviços de beleza e estética.
                      </Step.Description>
                    </Step.Content>
                  </Step>

                  <Step>
                    <Step.Content>
                      <Step.Title> Faça-nos uma visita </Step.Title>
                      <Step.Description>
                        Aproveite nossos serviços como um verdadeiro <strong> Chefe </strong>.
                      </Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Home;
