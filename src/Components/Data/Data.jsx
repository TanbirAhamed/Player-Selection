const Data = ({ data,  handlePlayer}) => {
  
    const {image, name, position, nationality, rating, batingposition, bowlingposition, price} = data
  return (
    <div className="p-4 bg-base-100 w-90 shadow-xl rounded-xl ">
        <figure className="">
            <img
            src={image}
            alt="Player Image"
            className="rounded-xl h-96 w-full" />
        </figure>
        <div>
            <h2 className="text-left font-bold">{name}</h2>
            <div className="flex justify-between">
                <p>{nationality}</p>
                <p>{position}</p>
            </div>
            <hr className='my-4' />
            <div className="flex justify-between font-bold">
                <p>Rating</p>
                <p>{rating}</p>
            </div>
            <div className="text-left font-bold">
                <p>Bating Position: {batingposition}</p>
                <p>Bowling Position: {bowlingposition}</p>
            </div>
            <div className="flex card-actions justify-between">
                <p className="font-bold">Price: {price}$</p>
                <button 
                    onClick={() => handlePlayer(data)}
                    className="btn bg-gray-300 font-bold text-base">Choose Player</button>
            </div>
        </div>
    </div>
  )
}

export default Data