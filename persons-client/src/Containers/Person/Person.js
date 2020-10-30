import {
  Input,
  Form,
  Card,
  PageHeader,
  Select,
  Button,
  Skeleton,
  message,
} from "antd";
import "./Person.css";
import { Link } from "react-router-dom";
import * as api from "../../libs/api-lib";

import React, { Component } from "react";

const FORM_LAYOUT = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      personData: null,
    };
  }

  formRef = React.createRef();
  
  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id !== "new" && id) {
      const data = await api.getPerson(id);
      this.setState({ isLoading: false, personData: data.data });
      this.nameInput.focus()
    }else{
        this.setState({isLoading: false})
    }

    
  }

  handleSave = () => {
    this.formRef.current.submit();
  };

  fillFormFields = () => {
    this.formRef.current.setFieldsValue(this.state.personData)
  }

  saveData = async (values) => {
    values.weight = Number(values.weight);
    values.height = Number(values.height);
    let result;

    this.state.personData
      ? (result = await api.editPerson(this.state.personData._id, values))
      : (result = await api.addPerson(values));
    console.log(result)
    result
      ? message.success("Salvo com sucesso")
      : message.info("Ops! algo deu errado. Tente novamente mais tarde.");
  };

  render() {
      const cancel = (
          <Link to="/">
        <Button type="link" danger>
          Cancelar
        </Button>
      </Link>
    );
    const save = (
      <Button
        type="link"
        disabled={this.state.isLoading}
        onClick={this.handleSave}
        htmlType="submit"
      >
        Salvar
      </Button>
    );

    return (
      <div className="form">
        <Card
          style={{ marginTop: 16, width: "70%" }}
          actions={[cancel, save]}
          title={
            <PageHeader
              title={
                this.state.personData ? "Alterar Usuário" : "Cadastrar Usuário"
              }
            />
          }
        >
          {this.state.isLoading && <Skeleton />}
          {this.state.isLoading || (
            <Form
              {...FORM_LAYOUT}
              ref={this.formRef}
              name="person"
              onFinish={this.saveData}
              onFocus={this.fillFormFields}
            >
              <Form.Item
                label="Nome:"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Este é um campo obrigatório!",
                  },
                ]}
              >
                <Input ref={(input) => this.nameInput = input}/>
              </Form.Item>
              <Form.Item
                label="Altura:"
                name="height"
                rules={[
                  {
                    required: true,
                    message: "Este é um campo obrigatório!",
                  },
                ]}
              >
                <Input type="number" suffix="CM" />
              </Form.Item>
              <Form.Item
                label="Peso:"
                name="weight"
                rules={[
                  {
                    required: true,
                    message: "Este é um campo obrigatório!",
                  },
                ]}
              >
                <Input type="number" suffix="KG" />
              </Form.Item>
              <Form.Item
                label="Atleta:"
                name="athlete"
                rules={[
                  {
                    required: true,
                    message: "Este é um campo obrigatório!",
                  },
                ]}
              >
                <Select>
                  <Select.Option value={true}>Sim</Select.Option>
                  <Select.Option value={false}>Não</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Lactose:"
                name="lactose"
                rules={[
                  {
                    required: true,
                    message: "Este é um campo obrigatório!",
                  },
                ]}
              >
                <Select>
                  <Select.Option value={true}>Sim</Select.Option>
                  <Select.Option value={false}>Não</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          )}
        </Card>
      </div>
    );
  }
}
