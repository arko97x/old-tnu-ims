import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedTextWord(props) {
    var text = props.text
    var delay = props.delay
    var words = text.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    }

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 20,
            y: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <div className='flex items-center justify-center'>
            <motion.div
                className='overflow-hidden flex'
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {words.map((word, index) => (
                    <motion.span
                        className='mr-[0.3125rem]'
                        variants={child}
                        key={index}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </div>
    )
}