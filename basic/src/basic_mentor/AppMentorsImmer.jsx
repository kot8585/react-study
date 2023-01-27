import React from "react";
import {useImmer} from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleAdd = () => {
          const name = prompt(`어떤 이름을 추가하고 싶은가요?`);
          const title = prompt(`추가할 직급 적어주세요`);
          
          updatePerson(person => person.mentor.push({name, title}));
        };
  const handleUpdate = () => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          
          updatePerson((person) => {
            const mentor = person.mentor.find(m=> m.name === prev);
            mentor.name = current;
          });
        };
  const handleDelete = () => {
        const name = prompt(`삭제할 이름 적어주세요`);
        
        const idx = person.mentor.findIndex(m => m.name === name);
        person.mentor.splice(idx, 1);
      };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는: 
        <ul>
         {person.mentor.map((mentor, index) => {return <li key={index}>{mentor.name} ({mentor.title})</li>})}
        </ul>
      </p>
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  )
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentor: [
      {
        id: 1,
        name: '밥',
        title: '시니어개발자',
      },
      {
        id: 2,
        name: '제임스',
        title: '시니어개발자',
      },
    ],
  };