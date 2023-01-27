import React, {useState} from 'react';

/**
 * ui의 변경은 state가 변경될때에만 일어나야 한다. 
 * input이 변경되면 사용할 공통적인 함수를 만듬 => handleChange
 * 나는 따로따로 만들었었는데 더 간편하다!
 */
export default function AppForm() {
  const [form, setForm] = useState({name: '', email: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}))
  }

  return (    
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input type="text" id="name" name="name" value={form.name} onChange={handleChange}/>
      <label htmlFor="email">이메일:</label>
      <input type="email" id="email" name="email" value={form.email} onChange={handleChange}/>
      <button type='submit'>Submit</button>
    </form>
  );
}