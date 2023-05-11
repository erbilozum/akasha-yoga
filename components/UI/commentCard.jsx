import React from 'react'
import Image from 'next/image';

const CommentCard = (props) => {
    return (
        <div className={"border-2 border-gray-400 rounded-xl p-1 flex flex-row justify-center"}>
            {/*Image*/}
            <div className={"flex items-center justify-center w-3/12 sm:w-1/12"}>
                <Image
                    style={{width: 100, height: 100, position: "relative"}}
                    className="rounded-full"
                    src={props.data.imageUrl}
                    alt={props.data.fullName}
                    width={800}
                    height={800}

                />
            </div>
            {/*Comment*/}
            <div className={"flex flex-col px-2 justify-center w-9/12 sm:w-11/12"}>
                <span className={"font-NotoSans tracking-wider font-bold text-2xl text-gray-700 uppercase text-start"}>
                    {props.data.fullName}
                </span>
                <span
                    className={"text-sm sm:text-lg italic text-justify text-gray-700"}>&ldquo;{props.data.comment}&ldquo;</span>
            </div>
        </div>
    )
}

export default CommentCard