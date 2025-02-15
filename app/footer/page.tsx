import React from "react";

const footerData = {
  contacts: [
    { type: "Email", value: "contact@example.com" },
    { type: "Phone", value: "+123 456 7890" },
  ],
  location: "123 Main Street, City, Country",
  activeHours: [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  socialMedia: [
    { platform: "Facebook", href: "https://facebook.com" },
    { platform: "Twitter", href: "https://twitter.com" },
    { platform: "LinkedIn", href: "https://linkedin.com" },
  ],
};

const Footer = () => {
  return (
    <div className="w-full h-fit relative bg-[#543310] p-10 lg:px-32">
      <div className="absolute bottom-0 right-0 w-full h-full z-10 bg-gradient-to-t from-black opacity-60"></div>

      <div className="relative z-20 container flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Contacts */}
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul>
            {footerData.contacts.map((contact, index) => (
              <li key={index} className="text-sm mt-1">
                {contact.type}: {contact.value}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-bold">Location</h3>
          <p className="text-sm mt-1">{footerData.location}</p>
        </div>

        {/* activeHours */}

        <div>
          <h3 className="text-lg font-bold">Active Hours</h3>
          <ul>
            {footerData.activeHours.map((hour, index) => (
              <li key={index} className="text-sm mt-1">
                {hour.day}: {hour.hours}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold">Follow Us</h3>
          <ul>
            {footerData.socialMedia.map((social, index) => (
              <li key={index} className="text-sm mt-1">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {social.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
