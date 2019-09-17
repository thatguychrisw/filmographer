import React from 'react';

export default function (props) {
    const movies = props.movies;

    // @todo create component
    const items = movies.map((item, key) =>
      <li className="bg-gray-900 text-gray-100 rounded p-1 mb-8 shadow-2xl" key={key}>
          <div className="flex h-40">
              <div className="w-7/12">
                  <div className="m-auto h-40 shadow-xl"
                       style={Object.assign({}, {
                           WebkitClipPath: "polygon(0px 0px, 0px 0px, 0px 450%, 100% 0px)",
                           background: "url('duke-nukem.jpeg') no-repeat top left",
                           backgroundSize: "100%"
                       })}
                  />
              </div>
              <div className="w-5/12">
                  <h2 className="pt-8 px-8 text-xl capitalize font-bold">{item.title}</h2>
                  <h3 className="px-8 text-sm capitalize font-bold">Horror, Sci-fi, Thriller</h3>

                  <h3 className="pt-4 px-8 text-md capitalize font-bold text-gray-400">
                      Rotten Tomato: 50%<span role="img" aria-label="tomato">🍅</span>
                  </h3>
              </div>
          </div>
      </li>
    );

    return (
      <div className="rounded w-2/3 mt-4 p-2 flex flex-col m-auto">
          {items.length > 0 &&
              <ul data-testid="filmography-list">{items}</ul>
          }
      </div>
    );
};
