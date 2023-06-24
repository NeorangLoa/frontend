import { useState } from 'react'
import './charsearch.scss'
import { useNavigate } from 'react-router-dom';

export default function Charsearch(){

  const [name, setName] = useState('');

  const onSearch = (e:any) => {
    setName(e.target.value)
    console.log(name);
  }

  const navigate = useNavigate();

  const handleSearch = () =>{
    if (name === ''){
      alert("이름을 입력해주세요")
    }else{
      const queryParems = new URLSearchParams();
      queryParems.set('q',name);
      const queryString = queryParems.toString();
      navigate(`/char?${queryString}`);
    }
  }
  
    return(
        <div className="charsearchlayout">
          <div className="charsearchbar">
            <input placeholder="검색할 캐릭터명을 입력하세요" onChange={onSearch} value={name} className="searchinput"/>
            <button className="charsearchbutton" onClick={handleSearch}/>
          </div>
        </div>
    )
} 