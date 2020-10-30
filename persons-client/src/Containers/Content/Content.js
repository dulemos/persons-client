import React, { Component } from "react";
import TableHeader from "../TableHeader/TableHeader";
import ButtonComponent from "../../Components/Button/Button";
import {Button, Popconfirm} from 'antd';
import Search from "../../Components/Input/Search";
import {
  Checkbox,
  Dropdown,
  Menu,
  message,
  Table,
  Tooltip,
  Typography,
} from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
import * as api from "../../libs/api-lib";
const { Text } = Typography;

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      searchResult: null,
      dataSource: [],
      searchText: "",
      visibleDropdown: false,
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

  handleFilterClick = (e) => {
    this.setState({ visibleDropdown: !this.state.visibleDropdown });
  };

  handleDeleteConfirm = async (id) => {
    const result = await api.deletePerson(id); 

    result ? message.success("Deletado com sucesso.") : message.info("Ops, algo deu errado, tente novamente mais tarde")
    const newDataSource = this.state.dataSource.filter((x) => x._id !== id);
    this.setState({dataSource: newDataSource})
  }

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
      },
      {
        title: () => <Text ellipsis>Peso</Text>,
        dataIndex: "weight",
        key: "weight",
      },
      {
        title: () => <Text ellipsis>Atleta</Text>,
        dataIndex: "athlete",
        key: "athlete",
        render: (isAthlete) => (isAthlete ? "Sim" : "Não"),
      },
      {
        title: () => (
          <Tooltip title="Pessoa possui intolerância à lactose">
            <Text ellipsis>Lactose</Text>
          </Tooltip>
        ),
        dataIndex: "lactose",
        key: "lactose",
        render: (isLactose) => (
          isLactose ? "Sim" : "Não"
        ),
      },
      {
        title: "",
        render: (d, record) => (
            <Link to={`/person/${record._id}`}><Button type="link">Editar</Button></Link>

        ),
        width: 100
      },
      {
        title: "",
        render: (d, record) => <Popconfirm title="Deseja mesmo excluir este registro?" okText="Sim" cancelText="Não" onConfirm={() => this.handleDeleteConfirm(record._id)}><Button type="link" danger>Excluir</Button></Popconfirm>,
        width: 100
      }
    ];

    const filterMenu = (
      <Menu onClick={""}>
        <SubMenu title="Peso">
          <Menu.Item key="1">
            <Checkbox onChange={"handleChange"}>
              Pessoas abaixo do Peso.
            </Checkbox>
          </Menu.Item>
          <Menu.Item key="2">
            <Checkbox onChange={"handleChange"}>
              Pessoas no peso ideal.
            </Checkbox>
          </Menu.Item>
          <Menu.Item key="3">
            <Checkbox onChange={"handleChange"}>
              Pessoas acima do Peso.
            </Checkbox>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Altura">
          <Menu.Item key="4">
            <Checkbox onChange={"handleChange"}>Pessoas baixas.</Checkbox>
          </Menu.Item>
          <Menu.Item key="5">
            <Checkbox onChange={"handleChange"}>Pessoas medianas.</Checkbox>
          </Menu.Item>
          <Menu.Item key="6">
            <Checkbox onChange={"handleChange"} />
            Pessoas altas.
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Lactose">
          <Menu.Item key="7">
            <Checkbox onChange={"handleChange"}>
              Pessoas Intolerantes à lactose
            </Checkbox>
          </Menu.Item>
          <Menu.Item key="8">
            <Checkbox onChange={"handleChange"}>
              Pessoas Tolerantes à lactose
            </Checkbox>
          </Menu.Item>
        </SubMenu>
        <SubMenu title="Atletas">
          <Menu.Item key="9">
            <Checkbox onChange={"handleChange"}>Pessoas Atletas</Checkbox>
          </Menu.Item>
          <Menu.Item key="10">
            <Checkbox onChange={"handleChange"}>Pessoas não atletas</Checkbox>
          </Menu.Item>
        </SubMenu>
        <Menu.Divider />
        <Menu.Item>Remover Filtros</Menu.Item>
      </Menu>
    );

    return (
      <div className="app-body">
        <TableHeader>
          <div className="table-options">
            <Dropdown
              overlay={filterMenu}
              arrow
              visible={this.state.visibleDropdown}
            >
              <ButtonComponent
                type="secundary"
                icon="filter"
                onClick={this.handleFilterClick}
              />
            </Dropdown>
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
