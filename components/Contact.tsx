"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-300"
          >
            GET IN <span className="text-gray-500">TOUCH</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-6 md:p-8 rounded-2xl space-y-6 md:space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-greenish font-semibold">PHONE</p>
              <a
                href="tel:+2347017956387"
                className="text-xl md:text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
              >
                <span className="text-greenish">☎️</span>
                +234 (0)7017956387
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-orangish font-semibold">EMAIL</p>
              <a
                href="mailto: kennethistifanus1@gmail.com"
                className="text-xl md:text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center"
              >
                <span className="text-orangish">📧</span>
                kennethistifanus1@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-bluish">OFFICE</p>
              <address className="text-lg md:text-xl not-italic leading-relaxed font-semibold">
                <span className="text-bluish">🏢</span>
                No. 12 D Plaza Sokoto Road, MTD, Zaria
                <br /> Kaduna State
                <br /> Nigeria.
              </address>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-pinkish font-semibold">GITHUB</p>
              <a
                href="https://github.com/realkendo"
                className="text-xl md:text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center"
              >
                <span className="text-pinkish">👨🏿‍💻</span>
                Visit realkendo on github
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.748097235204!2d7.7138903!3d11.1221421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2833378ffd55b%3A0x13d858db3581c3c!2sBiteExpress%20-%20Online%20Food%20%26%20Grocery%20Delivery!5e0!3m2!1sen!2sng!4v1697041234567!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
