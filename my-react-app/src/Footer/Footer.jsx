function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10 mt-10 rounded-box shadow-xl">
      <aside>
        <p className="font-bold text-lg">
          Enjoy ☕
          <br />
          <span className="text-sm font-normal">I learn React and Tailwind CSS</span>
        </p> 
        <p className="mt-4 opacity-75">Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
}

export default Footer;