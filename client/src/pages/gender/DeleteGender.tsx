import { useState } from "react";
import AlertMessage from "../../components/AlertMessage";
import DeleterGenderForm from "../../components/forms/gender/DeleterGenderForm";
import MainLayout from "../layout/MainLayout";

const DeleteGender = () => {
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
  const content = (
    <>
      <AlertMessage
        message={message}
        isSuccess={isSuccess}
        isVisible={isVisible}
        onClose={handleCloseAlertMessage}
      />
      <div className="d-flex justify-content-center">
        <div className="col-md-3">
          <DeleterGenderForm
            onDeleteGender={(message) =>
              handleShowAlertMessage(message, true, true)
            }
          />
        </div>
      </div>
    </>
  );
  return <MainLayout content={content} />;
};

export default DeleteGender;
