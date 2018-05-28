import React from 'react';
import PropTypes from 'prop-types';
import {is} from 'gm-util';

class Uploader extends React.Component {
    handleDrop = (e) => {
        e.preventDefault();

        const {multiple, onDrop} = this.props;
        const droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        const max = multiple ? droppedFiles.length : 1;
        let files = [];
        
        for (let i = 0; i < max; i++) {
            const file = droppedFiles[i];
            file.preview = window.URL.createObjectURL(file);
            files.push(file);
        }
        onDrop(files, e);
    };

    handleClick = () => {
        this.refInput.value = null;
        this.refInput.click();
    };

    render() {
        const {
            className,
            children,
            accept,
            multiple
        } = this.props;
        return (
            <div className="gm-uploader">
                {
                    
                    children ? <div className={className} 
                                    onClick={this.handleClick}
                                >{children}</div>
                             : <button className="btn btn-default"
                                    onClick={this.handleClick}
                               >上传文件</button>
                }
               
                <input
                    type="file"
                    ref={ref => this.refInput = ref}
                    className="gm-uploader-input"
                    multiple={!is.weixin() && multiple}
                    accept={accept}
                    onChange={this.handleDrop}
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
    onDrop: PropTypes.func.isRequired,
    accept: PropTypes.string,
    className: PropTypes.string
};

export default Uploader;
