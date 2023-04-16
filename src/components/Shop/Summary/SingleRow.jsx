import React, { useState } from "react";

const SingleRow = ({ meal, counter, handleRemoveFromStorage }) => {
  const { id, image_url, title } = meal;

  return (
    <tr>
      <th>{counter}</th>
      <td>
        <img src={image_url} className="h-8 w-8 rounded-full" alt="" />
      </td>
      <td>{title}</td>
      <td>
        <button
          onClick={() => handleRemoveFromStorage(id)}
          className="btn btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleRow;
