import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../uploader/index'
import _ from 'lodash'
import Flex from '../flex'
import classNames from 'classnames'
import SvgCloseCircle from '../../../svg/close-circle.svg'

const { DefaultImage } = Uploader

function ImgUploader(props) {
  const {
    data,
    onChange,
    onUpload,
    disabled,
    accept,
    multiple,
    contentSize,
    desc,
    className,
    ...rest
  } = props

  const handleRemove = (e, index) => {
    e.stopPropagation()

    const newData = _.filter(data, (v, i) => i !== index)
    onChange(newData)
  }

  const handleUploader = files => {
    const result = onUpload(files)
    if (result.then) {
      result.then(urls => {
        onChange(data.concat(urls))
      })
    }
  }

  const handleReplace = (files, index) => {
    const result = onUpload(files)
    if (result.then) {
      result.then(urls => {
        const newData = [...data]
        newData[index] = urls[0]

        onChange(newData)
      })
    }
  }

  return (
    <div {...rest} className={classNames('gm-img-uploader', className)}>
      <Flex wrap>
        {_.map(data, (item, index) => (
          <Uploader
            key={index}
            accept={accept}
            disabled={disabled}
            onUpload={files => handleReplace(files, index)}
            className='gm-img-uploader-item'
            style={{
              width: contentSize.width,
              height: contentSize.height
            }}
          >
            <DefaultImage>
              <img
                src={item}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </DefaultImage>
            {!disabled && (
              <SvgCloseCircle
                className='gm-img-uploader-close'
                onClick={e => handleRemove(e, index)}
              />
            )}
          </Uploader>
        ))}
        <Uploader
          disabled={disabled}
          accept={accept}
          onUpload={handleUploader}
          multiple={multiple}
        >
          <DefaultImage
            style={{
              width: contentSize.width,
              height: contentSize.height
            }}
          />
        </Uploader>
      </Flex>

      {desc && <div className='gm-text-desc gm-margin-5'>{desc}</div>}
    </div>
  )
}

ImgUploader.propTypes = {
  /** [url, url] */
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  /** 上传按钮回调，参数是 files，返回 promise resolve 回 [url] */
  onUpload: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  /** 上传接受的图片类型 */
  accept: PropTypes.string,
  /** 注意，这是添加按钮选择单图还是多图 */
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

ImgUploader.defaultProps = {
  contentSize: {
    width: '64px',
    height: '64px'
  },
  accept: 'image/*',
  size: 1024
}

export default ImgUploader
