import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-400 font-sans border-t">
      {/* Top Section: Multi-column Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* Column 1: Brand & App Download */}
        <div className="col-span-2 md:col-span-4,font-bold lg:col-span-1 flex flex-col space-y-4">
          <div className="text-2xl font-bold text-white tracking-wide">
            Job<span className="text-blue-500">Portal</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            Connect with millions of employers and find your dream career today.
          </p>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2">
            <a href="#" className="flex items-center justify-center bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg px-4 py-2 text-xs text-white transition">
              <span>Get it on Google Play</span>
            </a>
            <a href="#" className="flex items-center justify-center bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg px-4 py-2 text-xs text-white transition">
              <span>Download on the App Store</span>
            </a>
          </div>
        </div>

        {/* Column 2: Information */}
        <div>
          <h3 className="text-sm font-bold text-black tracking-wider uppercase mb-4">Information</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Employer Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Sitemap</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Credits</a></li>
          </ul>
        </div>

        {/* Column 3: Job Seekers */}
        <div>
          <h3 className="text-sm font-bold text-black tracking-wider uppercase mb-4">Job Seekers</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Search Jobs</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Create Free Resume</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Job Alerts</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Resume Writing Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
          </ul>
        </div>

        {/* Column 4: Employers */}
        <div>
          <h3 className="text-sm font-bold text-black tracking-wider uppercase mb-4">Employers</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Post a Job</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Browse Resumes</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Recruiter Login</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Talent Solutions</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Advertise with Us</a></li>
          </ul>
        </div>

        {/* Column 5: Legal & Trust */}
        <div>
          <h3 className="text-sm font-bold text-black tracking-wider uppercase mb-4">Legal</h3>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Fraud Alert</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Trust & Safety</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section: Copyright & Socials */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} JobPortal. All rights reserved. All trademarks are the property of their respective owners.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
