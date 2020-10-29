import React, { Component } from "react";
import TableHeader from "../TableHeader/TableHeader";
import Button from "../../Components/Button/Button";
import Search  from "../../Components/Input/Search";
import { Checkbox, Dropdown,  Menu,  Table } from "antd";
import Highlighter from "react-highlight-words";
import SubMenu from "antd/lib/menu/SubMenu";


export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: [
        {
          key: "1",
          name: "Mike",
          age: 32,
          address: "10 Downing Street",
        },
        {
          key: "2",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "3",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "4",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "5",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "6",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "7",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "8",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "9",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "10",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "11",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "12",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "13",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "14",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "15",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "15",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "16",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "17",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "18",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "19",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "20",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "21",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "22",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
        {
          key: "23",
          name: "John",
          age: 42,
          address: "10 Downing Street",
        },
      ],

      searchResult: null,
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

  componentDidMount() {
    this.setState({ isLoading: false, searchResult: this.state.dataSource });
  }

  handleFilterClick = (e) => {
    this.setState({ visibleDropdown: !this.state.visibleDropdown });
  };


  render() {
    const columns = [
      {
        title: "NAME",
        dataIndex: "name",
        key: "name",
        render: (text) => (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ""}
          />
        ),
      },
      {
        title: "STATUS",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
      },
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
              <Button
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
          <Button type="primary" icon="add">
            Add Custumer
          </Button>
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
        />
      </div>
    );
  }
}
