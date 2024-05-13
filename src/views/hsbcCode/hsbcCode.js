import React, { Fragment, useState, useEffect } from "react"
import './hsbcCode.css'

export default function HsbcCode(){
    let [currentTime, setCurrentTime] = useState("")
    let [newTime, setNewTime] = useState("")
   
    useEffect(() => {
        setCurrentTime(getTime())
    }, []);

    /**
     * @description 获取当前时间，处理转显示字符串
     */
    const getTime = () => {
        let current = new Date()
        let year = current.getFullYear()
        let month = current.getMonth() + 1
        let day = current.getDate()
        let hour = current.getHours()
        let minutes = current.getMinutes()

        return `${year}/${month}/${day} ${hour}:${minutes}`
    }

    /**
     * @description 更新第一个时间
     */
    const updateTime = () => {
        setCurrentTime(getTime())
    }

    /**
     * @description 新建一个时间
     */
    const updateNewTime = () => {
        setNewTime(getTime())
    }

    return(
        <Fragment>
            <div className="line">
                <span className="label">姓名：</span>
                <b className="text">林晓姿</b>
            </div>
            <div className="line">
                <span className="label">当前时间：</span>
                <b className="text">{currentTime}</b>
                <button className="time-btn" onClick={updateTime}>刷新时间</button>
            </div>
            <div className="line">
                {
                    newTime && (
                        <>
                            <span className="label">新的时间：</span>
                            <b className="text">{newTime}</b>
                        </>
                    )
                }
                <button className="time-btn" onClick={updateNewTime}>新建时钟</button>
            </div>
        </Fragment>
    )
}
