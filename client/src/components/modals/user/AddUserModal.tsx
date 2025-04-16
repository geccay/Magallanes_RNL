import { useRef, useState } from "react";
import AddUserForm from "../../forms/user/AddUserForm";
import SpinnerSmall from "../../SpinnerSmall";
import AlertMessage from "../../AlertMessage";

interface AddUserModalProps {
  showModal: boolean;
  onClose: () => void;
}

const AddUserModal = ({ showModal, onClose }: AddUserModalProps) => {
  const SubmitFormRef = useRef<() => void | null>(null);
  const [loadingStore, setloadingStore] = useState(false);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleShowAlertMessage = (
    message: string,
    isSuccess: boolean,
    isVisible: boolean
  ) => {
    setMessage(message);
    setIsSuccess(isSuccess);
    setIsVisible(isVisible);
  };

  const handleCloseAlertMessage = () => {
    setMessage("");
    setIsSuccess(false);
    setIsVisible(false);
  };

  return (
    <>
      <AlertMessage
        message={message}
        isSuccess={isSuccess}
        isVisible={isVisible}
        onClose={handleCloseAlertMessage}
      />
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Add User</h1>
            </div>
            <div className="modal-body">
              <AddUserForm
                setSubmitForm={SubmitFormRef}
                setloadingStore={setloadingStore}
                onUserAdded={(message) => {
                  handleShowAlertMessage(message, true, true);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={loadingStore}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loadingStore}
                onClick={() => SubmitFormRef.current?.()}
              >
                {loadingStore ? (
                  <>
                    <SpinnerSmall /> Saving User...
                  </>
                ) : (
                  "Save User"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUserModal;
