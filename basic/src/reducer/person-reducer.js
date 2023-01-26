export default function personReducer(person, action) {
  switch(action.type) {
    case 'update': {
      //const prev = action.prev
      //const current = action.current와 아래 코드와 같음
      const {prev, current} = action;
      
      return {
        ...person,
        mentor: person.mentor.map((mentor) => {
          if(mentor.name === prev){
          return {...mentor, name: current};
        }
        return mentor;
      }),
      };
    }
    case 'added': {
      const {name, title} = action;
      return {
          ...person,
          mentor: [...person.mentor, {name, title}],
        };
    }
    case 'deleted': {
      const {name} = action;
      return {
          ...person, 
          mentor: person.mentor.filter((m) => m.name !== name),
        }
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`)
    }
  }
}