import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../uploader/index'
import _ from 'lodash'
import Flex from '../flex'
import classNames from 'classnames'

import SvgCloseCircle from '../../../svg/close-circle.svg'
import SvgPlus from '../../../svg/plus.svg'

function ImgUploader(props) {
  const {
    data,
    onChange,
    onUpload,
    accept,
    multiple,
    contentSize,
    desc,
    className,
    ...rest
  } = props

  const handleRemove = index => {
    const newData = _.filter(data, (v, i) => i !== index)
    onChange(newData)
  }

  return (
    <div {...rest} className={classNames('gm-img-uploader', className)}>
      <Flex wrap>
        {_.map(data, (item, index) => (
          <div
            key={index}
            className='gm-img-uploader-item'
            style={{
              width: contentSize.width,
              height: contentSize.height
            }}
          >
            <img src={item} />
            <div
              className='gm-img-uploader-close'
              onClick={() => handleRemove(index)}
            >
              <SvgCloseCircle />
            </div>
          </div>
        ))}
        <Uploader accept={accept} onUpload={onUpload} multiple={multiple}>
          <Flex
            alignCenter
            justifyCenter
            style={{
              width: contentSize.width,
              height: contentSize.height
            }}
            className='gm-img-uploader-add'
          >
            <SvgPlus />
            加图
          </Flex>
        </Uploader>
      </Flex>

      {desc && <div className='gm-text-desc gm-margin-5'>{desc}</div>}
    </div>
  )
}

ImgUploader.defaultProps = {
  contentSize: {
    width: '60px',
    height: '60px'
  },
  size: 1024
}

ImgUploader.propTypes = {
  /** [url, url] */
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  /** 上传按钮回调，参数是 files */
  onUpload: PropTypes.func.isRequired,
  /** 上传接受的图片类型 */
  accept: PropTypes.string.isRequired,
  /** 上传选择是否可以多选 */
  multiple: PropTypes.bool,
  /** 图片的尺寸 */
  contentSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  }),
  /** 描述 */
  desc: PropTypes.string,

  className: PropTypes.string,
  style: PropTypes.object
}

export default ImgUploader
