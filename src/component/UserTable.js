import React, { Fragment, useEffect } from "react";
import { fetchTableData } from "../action/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./ProductList.css";

const UserTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const deleteUserHendeler = (id) => {
    alert("User Deleted Successfull!");
  };

  useEffect(() => {
    dispatch(fetchTableData());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", minWidth: 250, flex: 0.5 },
    { field: "firstName", headerName: "First Name", minWidth: 150, flex: 0.5 },
    { field: "lastName", headerName: "Last Name", minWidth: 150, flex: 0.5 },
    {
      field: "email",
      headerName: "Email",
      minWidth: 250,
      flex: 0.5,
    },
    {
      field: "phone",
      type: Number,
      number: "Phone",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "age",
      age: "Age",
      type: Number,
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "role",
      role: "Role",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "action",
      headerName: "Action",
      type: "number",
      minWidth: 180,
      flex: 0.3,
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.id}`}>
              <EditIcon />
            </Link>
            <button
              className="deleteProductBtn"
              onClick={() => deleteUserHendeler(params.id)}
            >
              <DeleteIcon />
            </button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((user) => {
      rows.push({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        age: user.age,
        phone: user.phone
      });
    });

  return (
    <Fragment>
      <div>
        <div className="mobileTopBarContainer"></div>
        <div className="mainCont">
          <div className="rightContAdmin"></div>
          <div className="leftContAdmin">
            <div className="AdminProductCont">
              <div>
                <h2>All Users</h2>
              </div>
            </div>
            <div className="DataGIrd">
              <DataGrid rows={rows} columns={columns} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserTable;
