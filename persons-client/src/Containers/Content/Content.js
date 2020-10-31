import React, { Component } from "react";
import TableHeader from "../TableHeader/TableHeader";
import ButtonComponent from "../../Components/Button/Button";
import { Button, Popconfirm } from "antd";
import Search from "../../Components/Input/Search";
import {
  message,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { Link } from "react-router-dom";
import * as api from "../../libs/api-lib";
import Icon from "@ant-design/icons";
import Icons from '../../Components/Icons/Icons'
const { Text } = Typography;

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      searchResult: null,
      dataSource: [],
      searchText: "",
    };
  }

  handleInputChange = async (e) => {
    let search = e.target.value;

    const searchResult = await this.state.dataSource.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setState({ searchResult });
  };

  async componentDidMount() {
    const response = await api.getAllPersons();
    response.data
      ? this.setState({ isLoading: false, dataSource: response.data })
      : message.error(
          "Ops, parece que algo deu errado. Tente novamente mais tarde."
        );
  }


  handleDeleteConfirm = async (id) => {
    const result = await api.deletePerson(id);

    result
      ? message.success("Deletado com sucesso.")
      : message.info("Ops, algo deu errado, tente novamente mais tarde");
    const newDataSource = this.state.dataSource.filter((x) => x._id !== id);
    this.setState({ dataSource: newDataSource });
  };


  render() {
    const columns = [
      {
        title: () => <Text ellipsis>Nome</Text>,
        dataIndex: "name",
        key: "name",
        render: (text, record) => (
          <Link to={`/person/${record._id}`}>{text}</Link>
        ),
      },
      {
        title: () => <Text ellipsis>Altura</Text>,
        dataIndex: "height",
        key: "height",
        filters: [
          {
            text: "Baixos",
            value: 0,
          },
          {
            text: "Medianos",
            value: 1,
          },
          {
            text: "Altos",
            value: 2,
          },
        ],
        filterMultiple: false,
        filterIcon: (
          <Icon component={() => Icons["filter"]} />
        ),
        onFilter:  (value, record) => {
          switch (value) {
            case 0:
              return record.height <= 159;
            case 1:
              return record.height >= 160 && record.height <= 179;
            case 2:
              return record.height >= 180;
            default:
              break;
          }
        },
      },
      {
        title: () => <Text ellipsis>Peso</Text>,
        dataIndex: "weight",
        key: "weight",
        filters: [
          {
            text: "Abaixo do Peso",
            value: 0,
          },
          {
            text: "Peso Ideal",
            value: 1,
          },
          {
            text: "Acima do Peso",
            value: 2,
          },
        ],
        filterMultiple: false,
        filterIcon: (
          <Icon component={() => Icons["filter"]} />
        ),
        onFilter: (value, record) => {
          switch (value) {
            case 0:
              return record.weight <= 69;
            case 1:
              return record.weight >= 70 && record.weight <= 89;
            case 2:
              return record.weight >= 90;
            default:
              break;
          }
        },
      },
      {
        title: () => <Text ellipsis>Atleta</Text>,
        dataIndex: "athlete",
        key: "athlete",
        render: (isAthlete) => (isAthlete ? "Sim" : "Não"),
        filters: [
          {text: 'Sim', value: true},
          {text: 'Não', value: false}
        ],
        filterMultiple: false,
        filterIcon: (
          <Icon component={() => Icons["filter"]} />
        ),
        onFilter: (value, record) => record.athlete === value 
      },
      {
        title: () => (
          <Tooltip title="Pessoa possui intolerância à lactose">
            <Text ellipsis>Lactose</Text>
          </Tooltip>
        ),
        dataIndex: "lactose",
        key: "lactose",
        render: (isLactose) => (isLactose ? "Sim" : "Não"),
        filters: [
          {text: 'Sim', value: true},
          {text: 'Não', value: false}
        ],
        filterMultiple: false,
        filterIcon: (
          <Icon component={() => Icons["filter"]} />
        ),
        onFilter: (value, record) => record.lactose === value 
      },
      {
        title: "",
        render: (d, record) => (
          <Link to={`/person/${record._id}`}>
            <Button type="link">Editar</Button>
          </Link>
        ),
        width: 100,
      },
      {
        title: "",
        render: (d, record) => (
          <Popconfirm
            title="Deseja mesmo excluir este registro?"
            okText="Sim"
            cancelText="Não"
            onConfirm={() => this.handleDeleteConfirm(record._id)}
          >
            <Button type="link" danger>
              Excluir
            </Button>
          </Popconfirm>
        ),
        width: 100,
      },
    ];

    

    return (
      <div className="app-body">
        <TableHeader>
          <div className="table-options">
            <Search
              type="text"
              icon="search"
              placeholder="Pesquisar"
              onChange={this.handleInputChange}
            />
          </div>
          <Link to="/person/new">
            <ButtonComponent type="primary" icon="add">
              Adicionar Pessoa
            </ButtonComponent>
          </Link>
        </TableHeader>
        <Table
          dataSource={
            this.state.searchResult == null
              ? this.state.dataSource
              : this.state.searchResult
          }
          columns={columns}
          pagination={{
            size: "small",
            showSizeChanger: true,
            defaultPageSize: 10,
            total: this.state.dataSource.length,
            showTotal: (total, range) =>
              `Mostrando ${range[0]}-${range[1]} de ${total} registros`,
          }}
          loading={this.state.isLoading}
          tableLayout="fixed"
          scroll={{ x: 1000, y: 500 }}
        />
      </div>
    );
  }
}
