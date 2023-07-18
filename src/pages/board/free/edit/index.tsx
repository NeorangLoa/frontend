import React, { useState } from "react";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './index.scss'

export default function FreepostEdit(){
    
    
    return(
        <div className="editpage">
            <div className="editlayout">
                <div>
                    게시물 작성
                </div>
                <div>
                    게시물 제목
                </div>
                <input />
                <div>
                    날짜 등록
                </div>
                
                <Editor
                    initialValue="내용을 입력해주세요!"
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="wysiwyg"
                    useCommandShortcut={true}
                />
                <button>작성</button>
            </div>
        </div>


    )
}