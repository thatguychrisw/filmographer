import React, { useState } from 'react';

export default function (props) {
    const {onSearch} = props;
    let [criteria, setCriteria] = useState('');

    function onNewRequest (event) {
        return event.key === 'Enter' ? onSearch(criteria) : null;
    }

    return (
      <div className="bg-white rounded w-5/12 mt-4 p-2 flex flex-col m-auto shadow-2xl">
          <div className="flex">
              <input autoFocus
                     className="w-9/12 outline-none p-2 border-gray-400"
                     placeholder="Search for an actor"
                     onKeyDown={onNewRequest}
                     onChange={(e) => setCriteria(e.target.value)}
                     data-testid="fetch-filmography"
                     type="text"/>
          </div>
      </div>
    );
};
