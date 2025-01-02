const SelectPlayer = ({ selectedplayer, handleDelete }) => {
    const { id, name, position, image } = selectedplayer;
  
    return (
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt={`${name}'s avatar`} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{position}</td>
        <td>
          <button onClick={() => handleDelete(id)} className="btn btn-error">
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  export default SelectPlayer;
  