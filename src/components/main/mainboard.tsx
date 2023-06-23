import React from "react";

export default function MainBoard() {
    return (
        <table>
            <thead>
                <tr>
                    <th className="ID">번호</th>
                    <th className="category">카테고리</th>
                    <th className="title">제목</th>
                    <th className="recommendation">추천 수</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="ID">1</td>
                    <td className="category">잡담</td>
                    <td className="title">아무거나 제목1</td>
                    <td className="recommendation">100</td>
                </tr>
                <tr>
                    <td className="ID">2</td>
                    <td className="category">수다</td>
                    <td className="title">아무거나 제목2</td>
                    <td className="recommendation">75</td>
                </tr>
                <tr>
                    <td className="ID">3</td>
                    <td className="category">동영상</td>
                    <td className="title">아무거나 제목3</td>
                    <td className="recommendation">50</td>
                </tr>
            </tbody>
        </table>
    )
}