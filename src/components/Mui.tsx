
import { DataGrid } from "@mui/x-data-grid";


const rows = [
    { id: 1, firstName: "Javier", lastName: "Obrien" },
    { id: 2, firstName: "Kate", lastName: "Miles" },
    { id: 3, firstName: "Kim", lastName: "Jimenez" },
    { id: 4, firstName: "Juana", lastName: "Thornton" },
    { id: 5, firstName: "Prashant", lastName: "Jangam" }
];


const columns = [
    {
      field: "id",
      headerName: "ID"
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150
    }
  ];


const Mui = () => {

    return (
        <div className="App">
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
          />
        </div>
      );
}


export default Mui ;