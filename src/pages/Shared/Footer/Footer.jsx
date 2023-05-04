import React from "react";
import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
      <footer className="footer p-10 bg-orange-200 text-base-content font-medium text-lg mb-24 rounded-3xl">
        <div>
          <span className="footer-title font-extrabold text-xl">Explore</span>
          <a className="link link-hover">Menu</a>
          <a className="link link-hover">Recipes</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Catering</a>
          <a className="link link-hover">Food Safety</a>
        </div>
        <div>
          <span className="footer-title font-extrabold text-xl">Connect</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Visit Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press Releases</a>
        </div>
        <div>
          <span className="footer-title font-extrabold text-xl">Legal</span>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Partners</a>
        </div>
        <div>
          <span className="footer-title font-extrabold text-xl">Discover</span>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Gift Cards</a>
          <a className="link link-hover">Awards & Recognition</a>
          <a className="link link-hover">Feedback</a>
        </div>
        <div>
          <span className="footer-title font-extrabold text-xl">Others</span>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Accessibility</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Sustainability</a>
        </div>
        <div>
          <span className="footer-title">Join our community</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-lg font-bold">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-lg font-bold">Follow us on:</span>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="btn btn-outline btn-square">
                 <FaFacebook className="text-4xl" /> 
              </a>
              <a href="#" className="btn btn-outline btn-square">

              <FaInstagram className="text-4xl" /> 

              </a>
              <a href="#" className="btn btn-outline btn-square">
              <FaTwitter className="text-4xl" /> 
              </a>
              <a href="#" className="btn btn-outline btn-square">
              <FaPinterestP className="text-4xl" /> 
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
