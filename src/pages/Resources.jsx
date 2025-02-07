import React from 'react';

export default function Resources() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Ressources Pédagogiques</h2>
      <ul className="list-disc ml-6">
        <li>
          <a className="cursor-pointer text-blue-600" href="#" target="_blank" rel="noreferrer">
            Vidéo explicative sur le CAP Petite Enfance
          </a>
        </li>
        <li>
          <a className="cursor-pointer text-blue-600" href="#" target="_blank" rel="noreferrer">
            Document PDF de révision
          </a>
        </li>
        <li>
          <a className="cursor-pointer text-blue-600" href="#" target="_blank" rel="noreferrer">
            Cours en ligne
          </a>
        </li>
      </ul>
    </div>
  );
}