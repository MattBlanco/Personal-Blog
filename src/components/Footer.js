import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-gray-700">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-white uppercase">
                  About
                </h3>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Instagram
                </Link>
                <Link
                  to="/"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Community
                </Link>
                <Link
                  to="/contact"
                  className="block mt-2 text-sm text-white hover:underline"
                >
                  Contact Me
                </Link>
              </div>

              {/* <div>
                <h3 className="text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-white hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-white hover:underline">
                  example@email.com
                </span>
              </div> */}
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-white">
            © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
