import './charsearch.scss'

export default function Charsearch(){

    return(
        <div className="charsearchlayout">
          <div className="charsearchbar">
            <input placeholder="검색할 캐릭터명을 입력하세요" className="searchinput">
            </input>
            <button className="charsearchbutton"/>
          </div>
        </div>
    )
}