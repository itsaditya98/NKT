import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-[#0288D1] text-white py-12 px-6 m-10 md:m-14 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
      <div className="space-y-6 max-w-md mx-auto">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <Phone className="flex-shrink-0 h-6 w-6 mt-1" />
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <a href="tel:+911234" className="text-white hover:underline">
              +91 1234
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <Mail className="flex-shrink-0 h-6 w-6 mt-1" />
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <a href="xyz@gmail.com" className="text-white hover:underline">
              xyz@gmail.com
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <MapPin className="flex-shrink-0 h-6 w-6 mt-1" />
          <div>
            <h4 className="font-medium mb-1">Address</h4>
            <address className="not-italic text-white">
              x, <br />
              y, <br />
              z
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
