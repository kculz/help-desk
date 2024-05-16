import Logo from "../assets/ict.png";
const Contact = () => {
  return (
    <>
    <div className="grid md:grid-cols-3 grid-flow-row gap-4 pt-24 px-10 md:px-32 w-full h-full">
        <div className="py-2 md:py-10 my-5 md:my-10">
            <h1 className="text-3xl md:text-5xl font-semibold text-black">
                Get in touch
            </h1>
            <p className="text-lg md:text-xl text-red">Unlock exceptional service and support-call our dedicated team now for enquiries and assistance.</p>
            <img src={Logo} alt="logo" />
        </div>
        <div className="col-span-2 grid md:grid-cols-2 grid-flow-row gap-4 py-2 md:py-10 my-5 md:my-10">
            <div className="rounded-xl bg-off-white py-2 px-3">
                <h1 className="text-2xl font-semibold text-black pb-3">
                    Contact us 
                </h1>
                <a className="py-2" href="mailto:ministryict@gmail.com">Email: ministryict@gmail.com</a><br />
                <a className="py-2" href="tel:263774833609">Phone: 774833609</a><br />
                
            </div>

            <div className="rounded-xl bg-off-white py-2 px-3">
                <h1 className="text-2xl font-semibold text-black pb-3">
                    Ask Something 
                </h1>
                <a className="py-2" href="mailto:admin@loadfix.net">Email: admin@loadfix.net</a><br />
                <a className="py-2" href="tel:263774833609">Phone: 0771 392 149</a><br />
                
            </div>

           
            <div className="rounded-xl bg-off-white py-2 px-3">
                <h1 className="text-2xl font-semibold text-black pb-3">
                    Visit us! 
                </h1>
                <p className="py-2" href="mailto:careers@loadfix.net">Address: No. 2 Simon Mazorodze, Mutare, Zimbabwe</p>
                <a className="py-2" href="tel:263774833609">Phone: 0771 392 149</a><br />
                
            </div>

           
        </div>

        
    </div>
    </>
  )
}

export default Contact