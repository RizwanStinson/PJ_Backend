exports.emailTemp = (sub, body) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dance Group Newsletter</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #f7f7f7;
          color: #333;
        }
        .newsletter-container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #d23669;
          color: #ffffff;
          text-align: center;
          padding: 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .body {
          padding: 20px;
        }
        .section {
          margin-bottom: 20px;
        }
        .section h2 {
          color: #d23669;
          margin-bottom: 10px;
          font-size: 20px;
        }
        .section p {
          margin: 0;
          line-height: 1.6;
        }
        .cta {
          text-align: center;
          margin: 20px 0;
        }
        .cta a {
          display: inline-block;
          background-color: #d23669;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }
        .cta a:hover {
          background-color: #b02d57;
        }
        .footer {
          background-color: #f4f4f4;
          text-align: center;
          padding: 10px;
          font-size: 12px;
          color: #999;
        }
        .footer a {
          color: #d23669;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="newsletter-container">
        <div class="header">
          <h1>🕺 ${sub} 💃</h1>
        </div>
        <div class="body">
          <div class="section">
            <h2>Upcoming Events</h2>
            <p>
              🎉 <strong>[Event Name]</strong><br />Date: [Event Date]<br />Location:
              [Event Location]<br />Don't miss out on our special event this
              month!
            </p>
          </div>
          <div class="section">
            <h2>Spotlight on Dancers</h2>
            <p>
              🌟 Meet [Dancer's Name], our featured performer of the month. Learn
              about their journey and achievements in the dance world!
            </p>
          </div>
          <div class="section">
            <h2>Join Our Classes</h2>
            <p>
              💪 Ready to level up your dance skills? Check out our latest
              schedule and register for upcoming classes!
            </p>
          </div>
        </div>
        <div class="footer">
          <p>
            Stay connected with us on <a href="[Facebook Link]">Facebook</a>,
            <a href="[Instagram Link]">Instagram</a>, and
            <a href="[Twitter Link]">Twitter</a>.
          </p>
          <p>© ${new Date().getFullYear()} [Priya Jayanthi]. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>`;
};
