
const Banner = ({ coin, setCoin, handleIsActive, isActive, selected }) => {
    function addCoin(amount) {
        setCoin((prevCoin) => prevCoin + amount)
    }
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="hero bg-slate-600 min-h-96 rounded-xl text-white ">
                <img className="rounded-xl w-full" src="/src/assets/images/bg-shadow.png" alt="" />
                <div className="hero-content text-center">
                    <div className="">
                        <img className="mx-auto" src="/src/assets/images/banner-main.png" alt="" />
                        <h1 className="text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="py-6 text-2xl">Beyond Boundaries Beyond Limits</p>
                        <button className="btn btn-primary font-bold" onClick={() => addCoin(9999999)}>Claim Free Coin</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-10'>
                <div className='font-semibold text-2xl rounded-lg space-x-2'>
                    <button
                        onClick={() => handleIsActive("available")}
                        className={`${isActive.available ? "btn bg-[#E7FE29] p-2 rounded-lg" : "btn p-2"}`}
                    >Available</button>

                    <button
                        onClick={() => handleIsActive("selected")}
                        className={`${isActive.available ? "btn p-2" : "btn bg-[#E7FE29] p-2 rounded-lg"}`}
                    >Selected ({selected.length})</button>
                </div>
            </div>
        </div>

    )
}

export default Banner