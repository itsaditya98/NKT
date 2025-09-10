export function Footer() {
  return (
   <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">NKT</h2>
            <p className="text-gray-400 mb-4 max-w-md">
              Authorized distributor of UltraTech Cement.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.indiamart.com/neel-kanth-traders-gautam-buddha-nagar/"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer">
              <span className="sr-only">IndiaMART</span>
              <p>IndiaMart</p>
              <img
              src="https://static.cdnlogo.com/logos/i/39/indiamart.svg"
              alt="IndiaMART"
              className="h-6 w-6"/>
              </a>
            </div> 
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contacts</a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-services" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              {/*<li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div> */}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">&copy; {new Date().getFullYear()} NKT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
