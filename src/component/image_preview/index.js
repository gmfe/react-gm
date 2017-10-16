import React from "react";
import PreviewModal from "./preview_modal";
import Modal from "../modal";

const ImagePreview = props => {
    Modal.render({
        children: <PreviewModal {...props} onHide={Modal.hide} />,
        clean: true,
        show: true,
        onHide: Modal.hide,
        disableMaskClose: true,
        style: {
            width: "auto",
            background: "rgba(0, 0, 0, .5)",
            margin: "80px",
            height: "calc(100% - 160px)"
        }
    });
};

export default ImagePreview;
