import './App.css';
import Header from './Design/Organism/Header'
import Data from './Design/Organism/Data'
import React, { Component } from 'react';
import axios from "axios"
import Pagination from './Design/Molecules/Pagination'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      nameValue: "",
      filterValue: "",
      showPeople: [],
      people: [],
      page: 1,
      totalPages: 0,
      pageStart: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  nextPage = () => {
    const {page, totalPages, pageStart} = this.state
    if (page < Math.ceil(totalPages / 10)) {
      this.setState({ page: page + 1, pageStart: (pageStart + 10) })
    }
  }

  prevPage = () => {
    const { page, pageStart } = this.state
    if (page > 1) {
      this.setState({ page: page - 1, pageStart: pageStart - 10 })
    }
  }

  setPage = () => {
    const { page } = this.state
    axios.get('http://swapi.dev/api/people/?page=' + page)
    .then(data => this.setState({ showPeople: data.data.results, totalPages: data.data.count}))
  }

  componentDidMount() {
    this.setPage()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.page !== prevState.page) {
      this.setPage()
    }
  }

  render() { 
    const { showPeople, filterValue, nameValue, page, totalPages, pageStart } = this.state
    return (  
      <>
        <Header />
        <Data 
          showPeople={showPeople}
          filterValue={filterValue}
          filterName={this.filterName}
          filterPeople={this.filterPeople}
          nameValue={nameValue}
          inputName={this.inputName}
          addPerson={this.addPerson}
          pageStart={pageStart}
        />
        <Pagination 
          onClickNext={this.nextPage}
          onClickPrev={this.prevPage}
          page={page}
          disabledPrev={page === 1}
          disabledNext={page >= Math.ceil(totalPages / 10 )}
        />
      </>
    );
  }
}
 
export default App;
