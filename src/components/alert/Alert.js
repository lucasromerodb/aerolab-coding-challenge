import React, { useState, useEffect } from "react";
import { AlertBox } from "./Styles";

function Alert({ msg, resetMsg }) {
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (!!msg) {
      setShowMsg(true);
    } else {
      setShowMsg(false);
    }

    setTimeout(() => {
      resetMsg();
    }, 3000);
  }, [msg, resetMsg]);

  return !!msg && showMsg && <AlertBox>{msg}</AlertBox>;
  // return <AlertBox>You've redeem the product successfully</AlertBox>;
}
export default Alert;
