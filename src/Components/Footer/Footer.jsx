const Footer = () => {
  return (
    <section className='bg-neutral-950'>
        <div className='max-w-screen-2xl mx-auto p-5 space-y-5 mt-24'>
            <div className='flex justify-between my-5'>
                <div className='space-y-3'>
                    <h6 className='text-white font-semibold'>About Us</h6>
                    <p className='text-slate-300'>We are a passionate team dedicated to providing the <br /> best services to our customers.</p>
                </div>
                <div className='space-y-3'>
                    <h6 className='text-white font-semibold'>Quick Links</h6>
                    <nav className='text-slate-300'>
                        <li>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </nav>
                </div>
                <div className='space-y-3'>
                    <h6 className='text-white font-semibold'>Subscribe</h6>
                    <p className='text-slate-300'>Subscribe to our newsletter for the latest updates.</p>
                    <div className="space-x-5">
                        <input type="email" placeholder='Enter Your Email' className='p-2 rounded-xl'/>
                        <button className='font-bold px-4 py-2 bg-white rounded-xl'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='border-t-2 p-2'>
                <p className='text-white text-center'>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    </section>
  )
}

export default Footer