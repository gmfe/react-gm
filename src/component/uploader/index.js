import React from 'react';
import PropTypes from 'prop-types';
import {is} from 'gm-util';
import classNames from 'classnames';

class Uploader extends React.Component {
    handleUpload = (e) => {
        e.preventDefault();

        const {multiple, onUpload} = this.props;
        const uploadedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        const max = multiple ? uploadedFiles.length : 1;
        let files = [];
        
        for (let i = 0; i < max; i++) {
            const file = uploadedFiles[i];
            file.preview = window.URL.createObjectURL(file);
            files.push(file);
        }
        onUpload(files,e);
    };

    handleClick = () => {
        this.refInput.value = null;
        this.refInput.click();
    };

    render() {
        const {
            children,
            accept,
            multiple
        } = this.props;

        const cn = classNames({'gm-uploader-warp': !!children ,'gm-uploader-default': !children });
        return (
            <div className="gm-uploader">   
                <div 
                    className={cn} 
                    onClick={this.handleClick}
                >
               {
                   children ? children
                            : <div className="gm-uploader-icon-wrap">
                                <i className="gm-uploader-icon xfont xfont-plus"></i>
                              </div>       
                }
                </div>
                <input
                    type="file"
                    ref={ref => this.refInput = ref}
                    className="gm-uploader-input"
                    multiple={!is.weixin() && multiple}
                    accept={accept}
                    onChange={this.handleUpload}
                />
            </div>
        );
    }
}

Uploader.defaultProps = {
    multiple: false
};

Uploader.propTypes = {
    multiple: PropTypes.bool,
    onUpload: PropTypes.func.isRequired,
    accept: PropTypes.string
};

export default Uploader;
