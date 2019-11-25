import React, { Component } from "react";
import MUIDataTable from "mui-datatables";

export default class Main extends Component {
    state = {
        colonneTri: {    
            nom: 'name',
            tri: 'desc',
        },
        colonneFilter: {
            name: ['John Walsh']
        },
    }

    getTriColumn (column) {    
        const { colonneTri } = this.state;
        
        return colonneTri.nom === column ? colonneTri.tri : 'none';
    }
    
    getFilterColumn (column) {
        const {colonneFilter } = this.state;

        return colonneFilter[column] === undefined ? [] : colonneFilter[column];
    }

    render() {
        const { colonneFilter,colonneTri } = this.state;
        console.log(colonneTri);

        const columns = [
            {
             name: "name",
             label: "Name",
             options: {
                filterList: this.getFilterColumn('name'),
                sortDirection: this.getTriColumn('name'),
              filter: true,
              sort: true,
             }
            },
            {
             name: "company",
             label: "Company",
             options: {
                filterList: this.getFilterColumn('company'),
                sortDirection: this.getTriColumn('company'),
                filter: true,
                sort: true,
             }
            },
            {
             name: "city",
             label: "City",     
             options: {
                filterList: this.getFilterColumn('city'),
                sortDirection: this.getTriColumn('city'),
              filter: true,
              sort: true,
             }
            },
            {
             name: "state",
             label: "State",
             options: {
                filterList: this.getFilterColumn('state'),
                sortDirection: this.getTriColumn('state'),
              filter: true,
              sort: true,
             }
            },
           ];
        
           const data = [
            { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
            { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
            { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
            { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
           ];
        
            const options = {                
                filterType: 'multiselect',
                onColumnSortChange: (column, direction) => {                    
                    this.setState({colonneTri: {
                            nom: column,
                            tri: direction === 'ascending' ? 'asc' : 'desc',
                        }                    
                    });
                },
                onFilterChange: (column, filter) => {
                    const index = columns.findIndex(col => col.name === column && col.options.filter === true);

                    colonneFilter[column] = filter[index];
                },
              };
        

        return(
            <MUIDataTable 
                title={"Employee List"} 
                data={data} 
                columns={columns} 
                options={options} 
            />
        );
    }
}