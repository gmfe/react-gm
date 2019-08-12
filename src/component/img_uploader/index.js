import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Uploader from '../uploader/index'
import Tip from '../tip/index'

import SvgCloseCircle from '../../../svg/close-circle.svg'
import SvgPlus from '../../../svg/plus.svg'

function ImgUploader(props) {
  const {
    data,
    contentSize,
    size,
    accept,
    multiple,
    statement,
    onUpload,
    onRemove
  } = props

  const [imgData, setImgData] = useState(data)

  const handleImgAdd = (img, e) => {
    const arr = []
    for (const i of img) {
      if (i.size > 1024 * size) {
        Tip.warning('其中有图片大小超出限制')
        return
      }
      arr.push(i.preview)
      const arrTotal = [...imgData, ...arr]
      setImgData(arrTotal)
    }
    onUpload(arr, e)
  }

  const handleImgRemove = (i, e) => {
    const arr = [...imgData]
    arr.splice(i, 1)
    setImgData(arr)
    onRemove(arr)
  }

  return (
    <div className='gm-picWall-container'>
      <div className='gm-picWall-box'>
        {imgData
          ? imgData.map((imgUrl, index) => (
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
                  onClick={e => handleImgRemove(index, e)}
                >
                  <SvgCloseCircle
                    style={{ background: '#fff', borderRadius: '50%' }}
                  />
                </span>
              </div>
            ))
          : null}
        <Uploader
          accept={accept}
          onUpload={(img, e) => handleImgAdd(img, e)}
          multiple={multiple}
        >
          <span>
            <SvgPlus />
            加图
          </span>
        </Uploader>
      </div>

      {statement ? (
        <div className='gm-picWall-state'>
          <p>{statement}</p>
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
  /** 上传图片的数据，以一个对象数组传进 */
  data: PropTypes.array.isRequired,
  /** 增加操作触发的事件 */
  onUpload: PropTypes.func.isRequired,
  /** 删除操作触发的事件 */
  onRemove: PropTypes.func.isRequired,
  /** 上传接受的图片类型 */
  accept: PropTypes.string.isRequired,
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
  statement: PropTypes.string
}

export default ImgUploader
