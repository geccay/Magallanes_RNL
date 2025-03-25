import { Link } from "react-router-dom";

const GendersTable = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Male</td>
            <td>
              <Link to={"/gender/edit"} className="btn btn-success me-1">
                Edit
              </Link>
              <Link to={"/gender/delete"} className="btn btn-danger me-1">
                Delete
              </Link>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Female</td>
            <td>
              <Link to={"/gender/edit"} className="btn btn-success me-1">
                Edit
              </Link>
              <Link to={"/gender/delete"} className="btn btn-danger me-1">
                Delete
              </Link>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Others</td>
            <td>
              <Link to={"/gender/edit"} className="btn btn-success me-1">
                Edit
              </Link>
              <Link to={"/gender/delete"} className="btn btn-danger me-1">
                Delete
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
