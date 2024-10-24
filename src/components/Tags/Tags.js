import React from 'react';
import './Tags.css';

const Tags = ({ tags }) => (
  <div className="tags">
    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
  </div>
);

export default Tags;