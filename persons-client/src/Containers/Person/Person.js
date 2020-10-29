import { Input, Form, Card, PageHeader, Select, Button, Spin, Skeleton } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons'
import './Person.css'

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
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({isLoading: false}, )
    }, 5000)
  }

  formRef = React.createRef();

  render() {
    return (
      <div className="form">
        <Card
          style={{ marginTop: 16, width: "70%"}}
          actions={[<Button type="link" danger disabled={this.state.isLoading}>Cancelar</Button>, <Button type="link" disabled={this.state.isLoading}>Salvar</Button>]}
          title={(<PageHeader title="Cadastrar Usuário" onBack={() => null} backIcon={<ArrowLeftOutlined />} />)}
        >
            {this.state.isLoading && <Skeleton />}
          {this.state.isLoading || <Form
            {...FORM_LAYOUT}
            ref={this.formRef}
            name="person"
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
              <Input />
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
              <Input type="number" suffix="CM"/>
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
              <Input type="number" suffix="KG"/>
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
          </Form>}
        </Card>
      </div>
    );
  }
}
