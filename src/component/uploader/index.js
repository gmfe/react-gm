import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { is } from 'gm-util'
import classNames from 'classnames'
import SVGPlus from '../../../svg/plus.svg'
import Flex from '../flex'

const Uploader = ({
  onUpload,
  accept,
  multiple,
  className,
  children,
  disabled,
  ...rest
}) => {
  const refInput = useRef(null)
  const handleUpload = e => {
    e.preventDefault()

    const uploadedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files

    const max = multiple ? uploadedFiles.length : 1
    const files = []

    for (let i = 0; i < max; i++) {
      const file = uploadedFiles[i]
      file.preview = window.URL.createObjectURL(file)
      files.push(file)
    }
    onUpload(files, e)
  }

  const handleClick = () => {
    if (disabled) return

    refInput.current.value = null
    refInput.current.click()
  }

  return (
    <div
      {...rest}
      className={classNames(
        'gm-uploader',
        {
          disabled
        },
        className
      )}
      onClick={handleClick}
    >
      {children || <Default />}
      <input
        ref={refInput}
        type='file'
        className='gm-uploader-input'
        multiple={!is.weixin() && multiple}
        accept={accept}
        onChange={handleUpload}
      />
    </div>
  )
}

const Default = ({ className, children, ...rest }) => {
  return (
    <Flex
      {...rest}
      alignCenter
      justifyCenter
      className={classNames('gm-uploader-default gm-text-primary', className)}
    >
      {children || <SVGPlus />}
    </Flex>
  )
}

Default.propTypes = {
  className: PropTypes.string
}

const DefaultImage = ({ className, children, ...rest }) => {
  return (
    <Default {...rest} className={classNames('gm-text-12', className)}>
      {children || '+ 加图'}
    </Default>
  )
}

DefaultImage.propTypes = {
  className: PropTypes.string
}

Uploader.Default = Default
Uploader.DefaultImage = DefaultImage

Uploader.propTypes = {
  onUpload: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

export default Uploader
