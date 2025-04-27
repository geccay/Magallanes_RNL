import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import UsersTable from "../../components/tables/user/UsersTable";
import AddUserModal from "../../components/modals/user/AddUserModal";

const Users = () => {
  const [refreshUsers, setRefreshUsers] = useState(false);
  const [openAddUserModal, setOpenAddUserModal] = useState(false);

  const content = (
    <>
      <AddUserModal
        showModal={openAddUserModal}
        onRefreshUsers={() => setRefreshUsers(!refreshUsers)}
        onClose={() => setOpenAddUserModal(false)}
      />
      <div className="d-flex justify-content-end mt-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setOpenAddUserModal(true)}
        >
          Add User
        </button>
      </div>
      <UsersTable refreshUsers={refreshUsers} />
    </>
  );

  return <MainLayout content={content} />;
};

export default Users;
