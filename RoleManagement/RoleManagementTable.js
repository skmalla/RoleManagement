import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export class RoleManagementTable extends Component {
  state = {
    roleTable: [
      {
        id: "1",
        role_name: "Admin",
        description: "This the description field",
      },
      {
        id: "2",
        role_name: "Manager",
        description: "This the another description field",
      },
    ],
    bankName: [
      {
        financial_institution: "Bank Name",
      },
    ],
  };

  render() {
    return (
      <div>
        <div className='text-right'>
          <Link to='/addRole'>
            <button className='other-button'>New</button>
          </Link>
        </div>
        <div className='taskShadow'>
          <table className='table table-responsive'>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Role Name</th>
                <th>Description</th>
                <th>Financial Institution</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.roleTable.map((data) => {
                return (
                  <tr>
                    <td>{data.id}</td>
                    <td>{data.role_name}</td>
                    <td>{data.description}</td>
                    {this.state.bankName.map((bank) => {
                      return <td>{bank.financial_institution}</td>;
                    })}

                    <td>
                      <Link to={`/edit-role/${data["id"]}`}>
                        <FontAwesomeIcon
                          icon={faEdit}
                          className='editIcon sedit'
                          title='Edit'
                        />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RoleManagementTable;
