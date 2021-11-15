import React, { useState } from 'react'
import BtnButton from './BtnButton'

const WatchCom = () => {

    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0)

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

    const start = () => {
        run()
        setStatus(1)
        setInterv(setInterval(run, 10))
    }
    const stop = () => {
        clearInterval(interv)
        setStatus(2)
    }
    const reset = () => {
        clearInterval(interv)
        setStatus(0)
        setTime({ms:0 ,s:0 ,m:0 ,h:0})
    }
    const resume = () => {
        start()
    }
    const run = () => {
        if (updatedM === 60) {
            updatedH++
            updatedM = 0
        }
        if (updatedS === 60) {
            updatedM++
            updatedS = 0
        }
        if (updatedMs === 100) {
            updatedS++
            updatedMs = 0
        }
        updatedMs++

        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })


    }


    return (
        <div>
            <h5>Watch Component</h5>
            <span>{(time.h >= 10) ? time.h : "0" + time.h}:</span>
            <span>{(time.m >= 10) ? time.m : "0" + time.m}:</span>
            <span>{(time.s >= 10) ? time.s : "0" + time.s}:</span>
            <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>

            <BtnButton status={status} start={start} stop={stop} reset={reset} resume={resume} />

        </div>
    )
}

export default WatchCom