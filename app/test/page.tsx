'use client'

import React, { useEffect, useRef } from 'react'
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
const DEFAULT_INITIAL_DATA = {
    "time": new Date().getTime(),
    "blocks": [
        {
            "type": "header",
            "data": {
                "text": "This is my awesome editor!",
                "level": 1
            }
        },
    ]
}
type Props = {}

const Page = (props: Props) => {
    const ejInstance: any = useRef<any>();

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();
                console.log(content);
            },
            tools: {
                header: Header,
            },
        });

    };
    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);
    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <div className=" w-full m-auto bg-white lg:max-w-lg">
                <><div id='editorjs'></div></>;
            </div>
        </div>

    )

};

export default Page