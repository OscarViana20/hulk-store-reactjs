import { useEffect, useState } from "react";
import { Card } from 'primereact/card';
import { FilterMatchMode } from 'primereact/api';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { DataTable } from 'primereact/datatable';

import PropTypes from 'prop-types';
import './styles.css';

export const CategoriesPage = (props) => {
  const {
    categoriesRequest,
    categories,
  } = props;

  const columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
    { field: 'categoryType', header: 'Type' },
  ];
  const [globalFilterValue, setGlobalFilterValue] = useState('');

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    categoryType: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    categoriesRequest();
  }, [categoriesRequest]);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const header = () => {
    return (
      <div className="datatable-header">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Filter" />
        </IconField>
      </div>
    );
  };

  return (
    <>
      <Card className="card-categories">
        <DataTable header={header} value={categories} size="small"
          emptyMessage="No categories found."
          filters={filters} globalFilterFields={['name', 'description', 'categoryType']}>
          {columns.map((col) => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
        </DataTable>
      </Card>
    </>
  )
}

CategoriesPage.propTypes = {
  categoriesRequest: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}
