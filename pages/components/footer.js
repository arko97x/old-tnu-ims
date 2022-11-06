import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div style={{ WebkitTapHighlightColor: 'transparent', fontFamily: "'Karla', sans-serif" }}>
                <div
                    className="w-full px-8 md:px-8 lg:px-24 py-16 mt-auto flex flex-col sm:flex-row bg-[#CCCCCC] text-sm items-start"
                >
                    <div className="w-full sm:w-1/2 flex flex-col space-y-6">
                        <img
                            className='w-16 h-auto object-cover'
                            src='/logo-color.png'
                        />
                        <div className="text-gray-700">Oh, My E! — © 2022. All rights (and lefts) reserved.<br />An outcome of the Innovation Management & Strategy T&U Seminar.<br />Srishti Manipal Institute of Art, Design, and Technology.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer