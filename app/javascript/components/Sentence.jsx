import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Sentence = () => {
  const [sentence, changeSentence] = useState();
  const [text, changeText] = useState();
  const [type, changeType] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/sentences/${id}`)
      .then(response => response.json())
      .then(data => { changeSentence(data) })
      .catch(error => console.log('error', error));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/sentences/${id}/entities`, {
        method: 'POST',
        body: JSON.stringify({ text, type }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => { navigate('/sentences') })
      .catch(error => console.log('error', error));
  };
  const handleCancel = () => navigate('/sentences');

  if (!sentence) return null;
  return (
    <div>
      <div className='my-5'>{sentence.text}</div>

      <h2>Create Entity</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>TEXT</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => changeText(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>TYPE</label>
          <select
            name="type"
            value={type}
            onChange={(e) => changeType(e.target.value)}
            className="form-control"
          >
            <option value="ORG">ORG</option>
            <option value="GPE">GPE</option>
            <option value="MONEY">MONEY</option>
            <option value="THEME">THEME</option>
            <option value="TIME">TIME</option>
          </select>
        </div>

        <div className="btn-group">
          <button type="submit" className="btn btn-dark">Create</button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Sentence;
