import { useState } from 'react';
import { Form, Button, TextArea, Select, Grid } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


function FormAgendamento() {
  const [formData, setFormData] = useState({
    cliente: '',
    barbeiro: '',
    servico: '',
    data: '',
    hora: '',
    observacoes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSelectChange = (e, { name, value }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Agendamento enviado:', formData);
    // Enviar para API aqui
  };

  const barbeiros = [
    { key: 'joao', value: 'joao', text: 'João' },
    { key: 'pedro', value: 'pedro', text: 'Pedro' },
    { key: 'rafael', value: 'rafael', text: 'Rafael' },
  ];

  const servicos = [
    { key: 'corte', value: 'corte', text: 'Corte' },
    { key: 'barba', value: 'barba', text: 'Barba' },
    { key: 'sobrancelha', value: 'sobrancelha', text: 'Sobrancelha' },
  ];

  return (
    <div className="ui container">
      <MenuSistema tela={'agendamento'} />
      <Grid stackable centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Form className="ui form" onSubmit={handleSubmit}>
              <Form.Field>
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="cliente"
                  value={formData.cliente}
                  onChange={handleChange}
                  placeholder="Nome do Cliente"
                />
              </Form.Field>

              <Form.Field>
                <label>Serviço disponível</label>
                <Select
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  options={servicos}
                  placeholder="Selecione o serviço"
                />
              </Form.Field>

              <Form.Field>
                <label>Barbeiro</label>
                <Select
                  name="servico"
                  value={formData.servico}
                  onChange={handleSelectChange}
                  options={servicos}
                  placeholder="Selecione o serviço"
                />
              </Form.Field>

              <Form.Field>
                <label>Data</label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>Hora</label>
                <input
                  type="time"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                />
              </Form.Field>

              <Form.Field>
                <label>Observações</label>
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

export default FormAgendamento;
