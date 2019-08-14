import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../uploader/index'
import Tip from '../tip/index'

import SvgCloseCircle from '../../../svg/close-circle.svg'
import SvgPlus from '../../../svg/plus.svg'

function ImgUploader(props) {
  const {
    data,
    onUploader,
    onChange,

    contentSize,
    size,
    accept,
    multiple,

    desc
  } = props

  const handleImgAdd = (img, e) => {
    const arr = []
    for (const i of img) {
      if (i.size > 1024 * size) {
        Tip.warning('其中有图片大小超出限制')
        return
      }
      arr.push(i.preview)
    }
    onUploader(arr, e)
  }

  const handleImgRemove = i => {
    onChange(data[i])
  }

  return (
    <div className='gm-picWall-container'>
      <div className='gm-picWall-box'>
        {data
          ? data.map((imgUrl, index) => (
              <div className='gm-picWall-imgbox' key={index}>
                <img
                  src={imgUrl}
                  style={{
                    width: contentSize.width,
                    height: contentSize.height
                  }}
                />
                <span
                  className='gm-picWall-icon'
                  data-index={index}
                  onClick={() => handleImgRemove(index)}
                >
                  <SvgCloseCircle
                    style={{ background: '#fff', borderRadius: '50%' }}
                  />
                </span>
              </div>
            ))
          : null}
        <Uploader
          accept={accept || 'image/*'}
          onUpload={img => handleImgAdd(img)}
          multiple={multiple}
        >
          <span>
            <SvgPlus />
            加图
          </span>
        </Uploader>
      </div>

      {desc ? (
        <div className='gm-picWall-state'>
          <p>{desc}</p>
        </div>
      ) : null}
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
  /** 上传图片的数据，以一个数组传进，形式 [url,url,url] */
  data: PropTypes.array.isRequired,
  /** 增加、删除操作触发的事件 */
  onChange: PropTypes.func.isRequired,
  /** 上传操作触发的事件 */
  onUploader: PropTypes.func.isRequired,

  /** 上传接受的图片类型 */
  accept: PropTypes.string,
  /** 是否可以多选 */
  multiple: PropTypes.bool,
  /** 图片的尺寸 */
  contentSize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  }),
  /** 上传图片的大小，单位为：kb */
  size: PropTypes.number,

  /** 描述 */
  desc: PropTypes.string
}

export default ImgUploader
