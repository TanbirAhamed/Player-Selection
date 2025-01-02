import SelectPlayer from "../SelectPlayer/SelectPlayer";

const Selected = ({ selected, handleDelete }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-3xl font-bold">Selected Player ({selected.length})/6</h3>
      <div className="my-7">
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr className="text-black text-base">
                <th>Name</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {selected.map((selectedplayer) => (
                <SelectPlayer
                  key={selectedplayer.id}
                  selectedplayer={selectedplayer}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Selected;
