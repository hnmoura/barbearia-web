import { useState } from 'react';
import { Form, Button, TextArea, Select, Grid } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';



function CadastroCliente() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    observacoes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Agendamento enviado:', formData);
    // Enviar para API aqui
  };

  return (
    <div className="ui container">
      <MenuSistema tela={'cliente'} />
      <Grid stackable centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Form className="ui form" onSubmit={handleSubmit}>
              <Form.Field>
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome do Cliente"
                />
              </Form.Field>
              <Form.Field>
                <label>Endereço</label>
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  placeholder="Endereço"
                />
              </Form.Field>
              <Form.Field>
                <label>Telefone</label>
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="Número de telefone"
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field>
                <label>Senha</label>
                <input
                  type="text"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Escolha uma senha"
                />
              </Form.Field>
              <Form.Field>
                <input
                   type="text"
                   name="confirmarSenha"
                   value={formData.confirmarSenha}
                   onChange={handleChange}
                   placeholder="Confirme a senha"
                />
              </Form.Field>
              <Form.Field>
                <label>Alergias</label>
                <TextArea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                  placeholder="Observações adicionais"
                />
              </Form.Field>

              <Button className="ui button" type="submit" primary>
                Agendar
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default CadastroCliente;
