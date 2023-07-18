import React from "react";

export default function MainBoard() {
    return (
        <table>
            <tbody>
                <tr>
                    <td className="category">[잡담]</td>
                    <td className="title">아무거나 긴 제목1 ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</td>
                    <td className="recommendation">100</td>
                </tr>
                <tr>
                    <td className="category">[수다]</td>
                    <td className="title">아무거나 제목2</td>
                    <td className="recommendation">75</td>
                </tr>
                <tr>
                    <td className="category">[동영상]</td>
                    <td className="title">아무거나 제목3</td>
                    <td className="recommendation">50</td>
                </tr>
            </tbody>
        </table>
    )
}