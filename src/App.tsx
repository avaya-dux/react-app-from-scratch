import logo from "/logo.svg";
import dashboardLight from "/dashboard-light.svg";
import settingsLight from "/settings-light.svg";
import dashboardDark from "/dashboard-dark.svg";
import settingsDark from "/settings-dark.svg";
import "./App.css";

function App() {
  return (
    <main>
      <header>
        <div className="left-section">
          <a href="https://avaya.com" className="logo-link" target="_blank">
            <img src={logo} className="logo" alt="Avaya logo" />
          </a>
          <span>Neo Demo Site</span>
        </div>

        <div className="right-section">
          <a href="/products">Products</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>

          <a href="/dashboard" className="link-icon">
            <picture>
              <source
                srcSet={dashboardDark}
                media="(prefers-color-scheme: dark)"
              />
              <img src={dashboardLight} alt="Dashboard" />
            </picture>
          </a>

          <a href="/settings" className="link-icon">
            <picture>
              <source
                srcSet={settingsDark}
                media="(prefers-color-scheme: dark)"
              />
              <img src={settingsLight} alt="Settings" />
            </picture>
          </a>

          <div className="avatar">JS</div>
        </div>
      </header>

      <section className="form-container">
        <h4>User Profile</h4>

        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" name="comments" />
          </div>

          <div className="form-group">
            <h4 className="checkbox-group-header">Subscribe to Newsletter</h4>
            <label htmlFor="newsletter" className="checkbox-label">
              <input type="checkbox" id="newsletter" name="newsletter" />I agree
              to receive emails from Avaya
            </label>
          </div>

          <div className="form-button-group">
            <button type="submit" className="primary">
              Submit
            </button>
            <button className="seconday">Cancel</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
