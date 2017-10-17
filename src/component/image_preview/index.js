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
            background: "rgba(0, 0, 0, 1)",
            margin: '0',
            width: "100%",
            height: "100%"
        }
    });
};

export default ImagePreview;
