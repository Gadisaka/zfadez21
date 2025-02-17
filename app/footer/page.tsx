import React from "react";

const footerData = {
  contacts: [
    { type: "Email", value: "zfadez21@gmail.com" },
    { type: "Phone", value: "+1 469-643-8566" },
  ],
  location: "12101 Greenville Ave #108B, Dallas, TX, 75243",
  activeHours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "10:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 7:00 PM" },
    { day: "Friday", hours: "10:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 7:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 6:00 PM" },
  ],
  socialMedia: [
    { platform: "Facebook", href: "https://facebook.com" },
    { platform: "Twitter", href: "https://twitter.com" },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/zfadez21/?igshid=YmMyMTA2M2Y%3D",
    },
  ],
};

const Footer = () => {
  return (
    <div className="w-full h-fit relative bg-[#543310] p-10 lg:px-32">
      <div className="absolute bottom-0 right-0 w-full h-full z-10 bg-gradient-to-t from-black opacity-60"></div>

      <div className="relative z-20 container flex flex-col md:flex-row gap-5 justify-between items-start">
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
