import React from 'react'
import { Space } from 'antd'

const Headerz = () => {
  return (
    <div className='container-fluid hidden lg:inline-block'>
      <div className="row bg-color-primary text-white py-3">
        <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
        <div className="col-sm col-md col-lg">
          <span className='hidden lg:inline-block'>Micfix is modern, agile and relevant. Our concern is your business always</span>
        </div>
        <div className="col-sm col-md-3 col-lg-3 flex justify-end">
          <Space>
            <span className='px-3 border-r'><i className="bi bi-instagram"></i></span>
            <span className='px-3 border-r'><i className="bi bi-twitter-x"></i></span>
            <span className='px-3 border-r'><i className="bi bi-facebook"></i></span>
            <span className='px-3 '><i className="bi bi-linkedin"></i></span>
          </Space>
        </div>
        <div className="col-sm-0 col-md-0 col-lg-1">&ensp;</div>
      </div>
    </div>
  )
}

export default Headerz