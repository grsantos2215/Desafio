import React, { Component } from "react";
import FixedMenu from "./components/FixedMenu";
import TopContent from "./components/TopContent";
import LateralSelector from "./components/LateralSelector";
import PageContent from "./components/PageContent";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      lateralFilter: [],
      pageContentFilter: [],
      filteredContent: [],
      filter: "",
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api-d1-test.herokuapp.com/api/filter");
    const resContent = await fetch(
      "https://api-d1-test.herokuapp.com/api/journey"
    );

    const json = await res.json();

    const jsonContent = await resContent.json();

    const allFilters = json.map(({ id, name, quantity }) => {
      return {
        id,
        nameStatus: name,
        quantity,
      };
    });

    const allContent = jsonContent.map(
      ({ id, name, status, recipients, success }) => {
        return {
          id,
          name,
          filteredName: name.toLowerCase(),
          recipients,
          success,
          status,
          statusName: allFilters.filter((lateral) => {
            return lateral.id === status;
          }),
        };
      }
    );

    this.setState({
      lateralFilter: allFilters,
      pageContentFilter: allContent,
      filteredContent: Object.assign([], allContent),
    });
  }

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const filteredTextLower = newText.toLowerCase();

    const filteredContent = this.state.pageContentFilter.filter((obj) => {
      return obj.filteredName.includes(filteredTextLower);
    });

    this.setState({
      filteredContent,
    });
  };

  render() {
    const { lateralFilter, filter, filteredContent } = this.state;
    return (
      <div
        className=" raised padded justify container segment"
        style={{
          border: "0.1px solid",
          width: "100%",
          height: "969px",
          background: "#FAFBFF",
        }}
      >
        <FixedMenu />
        <TopContent filter={filter} onChangeFilter={this.handleChangeFilter} />
        <LateralSelector filters={lateralFilter} />
        <PageContent content={filteredContent} />
      </div>
    );
  }
}
