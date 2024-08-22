import React from 'react'

const Members = () => {
    return (
        <div className='min-h-screen flex flex-col gap-11' id="memberContainer">
            <div>
                <h1 className='text-white text-center text-2xl pt-20'>विभिन्न पदाधिकारियों की सूची </h1>
            </div>

            <div>
                <div className="flex flex-col items-center gap-5">
                    <h1 className='text-white text-2xl'>अध्यक्ष - गजराज वर्मा</h1>
                </div>
                <div className="flex flex-col items-center gap-5">

                    <h1 className='text-white text-2xl'>उपाध्यक्ष - रविशंकर वर्मा</h1>
                </div>
                <div className="flex flex-col items-center gap-5">

                    <h1 className='text-white text-2xl'>सचिव - संजय वर्मा</h1>
                </div>
                <div className="flex flex-col items-center gap-5">

                    <h1 className='text-white text-2xl'>कोषाध्यक्ष - प्रदीप कुमार पटेल</h1>
                </div>
            </div>

            <div>
                <h1 className='text-white text-center text-2xl'>विभिन्न सदस्यों की सूची </h1>
            </div>

            <div>
                <div className="flex flex-col items-center gap-5">
                    <h1 className='text-white text-2xl'>
                    राजेश कुमार शर्मा</h1>
                </div>
                <div className="flex flex-col items-center gap-5">

                    <h1 className='text-white text-2xl'>अरविंद कुमार पटेल</h1>
                </div>
                <div className="flex flex-col items-center gap-5">

                    <h1 className='text-white text-2xl'>गौतम पटेल</h1>
                </div>
                <div className="flex flex-col items-center gap-5">

                    <h1 className='text-white text-2xl'>अजय कुमार पॉल</h1>
                </div>
                <div className="flex flex-col items-center gap-5">

                    <h1 className='text-white text-2xl'>राजेश वर्मा</h1>
                </div>
                <div className="flex flex-col items-center gap-5 pb-5">

                    <h1 className='text-white text-2xl'>हरिश्चंद्र कुमार</h1>
                </div>
            </div>
        </div>
    )
}

export default Members