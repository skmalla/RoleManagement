import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

const RoleManagement = () => {
  const [roleFields, setRoleFields] = useState([]);

  const [appSettingsMenu, setAppSettingsMenu] = useState([]);

  const [moduleSettings, setModuleSettings] = useState([]);

  const [adminTableHeader, setAdminTableHeader] = useState([
    {
      adminheader: "Create",
    },
    {
      adminheader: "View",
    },
    {
      adminheader: "Edit",
    },
    {
      adminheader: "Delete",
    },
  ]);

  const [adminmenu, setAdminMenu] = useState([
    {
      adminsettingsLabel: "Application Manager",
    },
    {
      adminsettingsLabel: "Form Builder",
    },
    {
      adminsettingsLabel: "User Management",
    },
    {
      adminsettingsLabel: "Role Management",
    },
    {
      adminsettingsLabel: "Configuration",
    },
    {
      adminsettingsLabel: "Scheduler",
    },
    {
      adminsettingsLabel: "Mail Configuration",
    },
  ]);

  const [formNames, setFormNames] = useState([]);

  const [tableFields, setTableFields] = useState([
    {
      id: 0,
      tableheader: "Create",
    },
    { id: 1, tableheader: "View" },
    { id: 2, tableheader: "Edit" },
    {
      id: 3,
      tableheader: "Delete",
    },
    {
      id: 4,
      tableheader: "View All",
    },
    {
      id: 5,
      tableheader: "Edit All",
    },
    {
      id: 6,
      tableheader: "Approve",
    },
    {
      id: 8,
      tableheader: "Delegate",
    },
    {
      id: 9,
      tableheader: "Delegate All",
    },
  ]);

  useEffect(() => {
    let requestOptions = {
      method: "GET",
      credentials: "include",
    };
    fetch(
      localStorage.getItem("apiURL") + "GRCNextBPMN/getAppDefinitions",
      requestOptions
    )
      .then((results) => results.json())
      .then((response) => {
        const defaultAppSettingMenu = response.data.map((data) => {
          var obj = { applicationName: data.applicationName };
          return obj;
        });
        const defaultModuleSettingMenu = response.data.flatMap((nestedObj) => {
          const arr = nestedObj.data.map((data) => {
            var moduleobj = { name: data.name, id: data.appDefinitionId };
            return moduleobj;
          });
          return arr;
        });
        console.log(defaultModuleSettingMenu);
        setAppSettingsMenu(defaultAppSettingMenu);
        setModuleSettings(defaultModuleSettingMenu);
      })
      .catch((error) => {
        alert("Error Occured");
      });

    fetch(
      localStorage.getItem("apiURL") +
        "flowable-modeler/app/rest/models?filter=forms&modelType=2&sort=modifiedDesc",
      requestOptions
    )
      .then((results) => results.json())
      .then((response) => {
        const defaultFormName = response.data.map((formName) => {
          var formObj = { formName: formName.name };
          return formObj;
        });
        console.log(defaultFormName);
        setFormNames(defaultFormName);
      })
      .catch((error) => {
        alert("Error Occured");
      });
  }, []);

  const onInputChangeHandler = (e) => {
    setRoleFields({ ...roleFields, [e.target.name]: e.target.value });
    console.log(roleFields);
  };

  const appSettingsCheckboxHandler = (event) => {
    appSettingsMenu.forEach((app) => {
      if (app.applicationName === event.target.name)
        app.appSettings = event.target.checked;
    });
    setAppSettingsMenu(appSettingsMenu);
    setRoleFields({
      ...roleFields,
      appSettingsMenu,
    });
    console.log(roleFields);
  };

  const appModulesCheckboxHandler = (event) => {
    moduleSettings.forEach((app) => {
      if (app.name === event.target.name)
        app.moduleSettings = event.target.checked;
    });
    setModuleSettings(moduleSettings);
    setRoleFields({
      ...roleFields,
      moduleSettings,
    });
    console.log(roleFields);
  };

  const createFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isCreate = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const viewFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isView = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const editFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isEdit = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const deleteFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isDelete = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const viewAllFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isViewAll = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const editAllFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isEditAll = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const approveFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isApprove = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const delegateFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isDelegate = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const delegateAllFormSettingsHandler = (event) => {
    formNames.forEach((formName) => {
      if (formName.formName === event.target.name)
        formName.isDelegateAll = event.target.checked;
    });
    setFormNames(formNames);
    setRoleFields({
      ...roleFields,
      formNames,
    });
    console.log(roleFields);
  };

  const adminSettingsCreateHandler = (event) => {
    adminmenu.forEach((adminName) => {
      if (adminName.adminsettingsLabel === event.target.name)
        adminName.isCreate = event.target.checked;
    });
    setAdminMenu(adminmenu);
    setRoleFields({
      ...roleFields,
      adminmenu,
    });
    console.log(roleFields);
  };

  const adminSettingsViewHandler = (event) => {
    adminmenu.forEach((adminName) => {
      if (adminName.adminsettingsLabel === event.target.name)
        adminName.isView = event.target.checked;
    });
    setAdminMenu(adminmenu);
    setRoleFields({
      ...roleFields,
      adminmenu,
    });
    console.log(roleFields);
  };

  const adminSettingsEditHandler = (event) => {
    adminmenu.forEach((adminName) => {
      if (adminName.adminsettingsLabel === event.target.name)
        adminName.isEdit = event.target.checked;
    });
    setAdminMenu(adminmenu);
    setRoleFields({
      ...roleFields,
      adminmenu,
    });
    console.log(roleFields);
  };

  const adminSettingsDeleteHandler = (event) => {
    adminmenu.forEach((adminName) => {
      if (adminName.adminsettingsLabel === event.target.name)
        adminName.isDelete = event.target.checked;
    });
    setAdminMenu(adminmenu);
    setRoleFields({
      ...roleFields,
      adminmenu,
    });
    console.log(roleFields);
  };

  let history = useHistory();

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(roleFields);
    history.push("/role-management");
  };

  return (
    <div className='roleManagement'>
      <form onSubmit={handleUpdate}>
        <div className='text-right'>
          <Link to='/role-management'>
            <button className='other-button mt-4 mr-3'>Back</button>
          </Link>
        </div>
        <div className='formFields'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='form-group'>
                <label for='roleName'>Role Name</label>
                <span className='mand'>*</span>
                <input
                  type='text'
                  className='form-control'
                  name='roleName'
                  onChange={onInputChangeHandler}
                />
              </div>
            </div>
            <div className='col-md-1' />
            <div className='col-md-4'>
              <div className='form-group'>
                <label for='roleName'>Financial Institution</label>
                <input
                  type='text'
                  className='form-control'
                  name='financialinstitution'
                  onChange={onInputChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-9'>
              <div className='form-group'>
                <label for='description'>Description</label>
                <textarea
                  className='form-control'
                  name='description'
                  onChange={onInputChangeHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className='panel-heading ml-2'>Custom App Setttings</p>
        <div className='formFields'>
          <div className='row'>
            <div className='col-md-4'>
              <label>
                <b>App Settings</b>
              </label>
            </div>
            <div className='col-md-4'>
              <label>
                <b>Show / Hide</b>
              </label>
            </div>
          </div>
          {appSettingsMenu.map((appList) => {
            return (
              <div className='row'>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <label>{appList.applicationName}</label>
                  </div>
                </div>
                <div className='col-md-3 text-left'>
                  <div class='form-group'>
                    <input
                      type='checkbox'
                      className='ml-3'
                      name={appList.applicationName}
                      onChange={appSettingsCheckboxHandler}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className='formFields'>
          <div className='row'>
            <div className='col-md-4'>
              <label>
                <b>Modules Settings</b>
              </label>
            </div>
            <div className='col-md-4'>
              <label>
                <b>Show/Hide</b>
              </label>
            </div>
          </div>
          {moduleSettings.map((item) => {
            return (
              <div className='row'>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <label>{item.name}</label>
                  </div>
                </div>
                <div className='col-md-3 text-left'>
                  <div class='form-group'>
                    <input
                      type='checkbox'
                      className='ml-3'
                      key={item.appDefinitionId}
                      name={item.name}
                      onChange={appModulesCheckboxHandler}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <p className='panel-heading ml-2'>Admin Settings</p>
        <div>
          <table className='table table-responsive datagrid-table appSettings'>
            <thead>
              <tr>
                <th>Admin Menu</th>
                {adminTableHeader.map((admin) => {
                  return <th className='text-center'>{admin.adminheader}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {adminmenu.map((label) => {
                return (
                  <tr>
                    <td>{label.adminsettingsLabel}</td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={label.adminsettingsLabel}
                        onChange={adminSettingsCreateHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={label.adminsettingsLabel}
                        onChange={adminSettingsViewHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={label.adminsettingsLabel}
                        onChange={adminSettingsEditHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={label.adminsettingsLabel}
                        onChange={adminSettingsDeleteHandler}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <hr />
        <div>
          <p className='panel-heading ml-2'>Form Settings</p>
          <table className='table table-responsive datagrid-table'>
            <thead>
              <tr>
                <th>Form Name</th>
                {tableFields.map((headers) => {
                  return <th className='text-center'>{headers.tableheader}</th>;
                })}
              </tr>
            </thead>

            {formNames.map((formname, i) => {
              return (
                <tbody>
                  <tr>
                    <td>{formname.formName}</td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={createFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={viewFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={editFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={deleteFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={viewAllFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={editAllFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={approveFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={delegateFormSettingsHandler}
                      />
                    </td>
                    <td className='text-center'>
                      <input
                        type='checkbox'
                        className='ml-3'
                        name={formname.formName}
                        onChange={delegateAllFormSettingsHandler}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div className='py-3'>
          <button className='other-white-button ml-3' type='submit'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoleManagement;
