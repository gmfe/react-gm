import React from 'react'
import { storiesOf } from '@storybook/react'
import Row from './row'
import Col from './col'

storiesOf('grid', module).add('default', () => (
  <div className='gm-padding-10'>
    占满24栅格
    <Row className='gm-back-bg' style={{ height: '120px' }}>
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={24}>
        Col 24
      </Col>
    </Row>
    <br />
    三等分，每块占8栅格
    <Row justifyStart className='gm-back-bg' style={{ height: '120px' }}>
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={8}>
        Col 8
      </Col>
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={8}>
        Col 8
      </Col>
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={8}>
        Col 8
      </Col>
    </Row>
    <br />
    第一块占8栅格，第二块，左偏移8栅格，占8栅格
    <Row
      alignCenter
      justifyCenter
      className='gm-back-bg'
      style={{ height: '120px' }}
    >
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={8}>
        Col 8
      </Col>
      <Col
        className='gm-bg-primary'
        style={{ height: '60px' }}
        span={8}
        offset={8}
      >
        Col 8, Offset 8
      </Col>
    </Row>
    <br />
    第一块占4栅格，第二块和第三块，左偏移4栅格，占4栅格
    <Row alignEnd className='gm-back-bg' style={{ height: '120px' }}>
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={4}>
        Col 4
      </Col>
      <Col
        className='gm-bg-primary'
        style={{ height: '60px' }}
        span={4}
        offset={4}
      >
        Col 4, Offset 4
      </Col>
      <Col
        className='gm-bg-primary'
        style={{ height: '60px' }}
        span={4}
        offset={4}
      >
        Col 4, Offset 4
      </Col>
    </Row>
    <br />
    响应式
    <Row className='gm-back-bg' style={{ height: '120px' }}>
      <Col
        className='gm-bg-primary'
        sm={{ span: 4, offset: 4 }}
        md={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        xl={8}
        style={{ height: '60px' }}
      >
        Col
      </Col>
      <Col
        className='gm-bg-primary'
        sm={{ span: 4, offset: 4 }}
        md={{ span: 11, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        xl={8}
        style={{ height: '60px' }}
      >
        Col
      </Col>
      <Col
        className='gm-bg-primary'
        sm={{ span: 4, offset: 4 }}
        md={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
        xl={8}
        style={{ height: '60px' }}
      >
        Col
      </Col>
    </Row>
    <br />
    gutter
    <Row
      justifyStart
      className='gm-back-bg'
      style={{ height: '120px' }}
      gutter={8}
    >
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={8}>
        Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8
      </Col>
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={8}>
        Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8
      </Col>
      <Col className='gm-bg-primary' style={{ height: '60px' }} span={8}>
        Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8Col 8
      </Col>
    </Row>
  </div>
))
