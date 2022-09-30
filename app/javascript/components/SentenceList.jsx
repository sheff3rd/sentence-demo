import React, { useState, useEffect } from 'react';
import reactStringReplace from 'react-string-replace';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

/* Ideally this should belong in AR model, but this will do */
const colors = [
  { type: "ORG", color: "#7feceb" },
  { type: "GPE", color: "#fec979" },
  { type: "MONEY", color: "#e4e7d3" },
  { type: "THEME", color: "#4caf50" },
  { type: "TIME", color: "#3f51b5" },
];

const SentenceList = () => {
  const [sentences, changeSentences] = useState([]);

  useEffect(() => {
    fetch('/api/sentences')
      .then(response => response.json())
      .then(data => { changeSentences(data) })
      .catch(error => console.log('error', error));
  }, []);

  const _interpolateString = (sentence) => {
    if (!sentence.entities.length) return sentence.text;

    const entities = sentence.entities.map((_e) => _e.text);
    const regex = new RegExp('(.*?)($|' + entities.join('|') + ')', 'gi');

    const split = sentence.text.split(regex).filter((word) => !!word);

    const result = split.map((word) => {
      const entity = sentence.entities.find((_e) => _e.text === word);


      if (entity) {
        const color = colors.find((_c) => _c.type === entity.type).color;

        return (
          <span className={styles.tag} key={entity.id} style={{ backgroundColor: color }}>
            {entity.text}&nbsp;
            <span className='font-weight-bold'>{entity.type}</span>
          </span>
        );
      };
      return <span className={styles.phrase}>{word}</span>;
    });

    return result;
  }

  return (
    <div className='mt-5'>

      <h5>Click a sentence to add entities!</h5>
      <hr />
      {sentences.map((sentence) => (
        <Link key={sentence.id} to={`/sentences/${sentence.id}`}>
          {_interpolateString(sentence)}
          <hr />
        </Link>
      ))}
    </div>
  );
}

export default SentenceList;
