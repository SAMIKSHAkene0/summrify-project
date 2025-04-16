import React from 'react';
import '../Style/spem.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Spem = () => {
  return (
    <div className="container-fluid p-0 zigzag">
      {/* Feature 1 */}
      <div className="feature-container">
        <div className="image-side">
          <img src="/article_metadata.webp" alt="Feature 1" className="img-fluid" />
        </div>
        <div className="content-side">
          <h3>Condense & Comprehend: Summarization Simplified</h3>
          <p>100% Automatic Article Summarization with just a click</p>
          <p>
            In the sheer amount of information that bombards Internet users from all sides, hardly anyone wants to devote
            their valuable time to reading long texts. TLDR This's clever AI analyzes any piece of text and summarizes it
            automatically, in a way that makes it easy for you to read, understand and act on.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="feature-container">
        <div className="image-side">
          <img src="/auto_summary.webp" alt="Feature 2" className="img-fluid" />
        </div>
        <div className="content-side">
          <h3>Essentials Unveiled: Metadata Extraction Simplified</h3>
          <p>Article Metadata Extraction</p>
          <p>
            TLDR This, the online article summarizer tool, not only condenses lengthy articles into shorter, digestible
            content, but it also automatically extracts essential metadata such as author and date information, related
            images, and the title. Additionally, it estimates the reading time for news articles and blog posts, ensuring
            you have all the necessary information consolidated in one place for efficient reading.
          </p>
          <ul>
            <li>Automated author-date extraction</li>
            <li>Related images consolidation</li>
            <li>Instant reading time estimation</li>
          </ul>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="feature-container">
        <div className="image-side">
          <img src="/distraction_free.webp" alt="Feature 3" className="img-fluid" />
        </div>
        <div className="content-side">
          <h3>Pure Focus, No Fuss: Your Ad-Free Reading Haven</h3>
          <p>Distraction and ad-free reading</p>
          <p>
            As an efficient article summarizer tool, TLDR This meticulously eliminates ads, popups, graphics, and other
            online distractions, providing you with a clean, uncluttered reading experience. Moreover, it enhances your
            focus and comprehension by presenting the essential content in a concise and straightforward manner, thus
            transforming the way you consume information online.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="feature-container">
        <div className="image-side">
          <img src="/harekrishna.webp" alt="Feature 4" className="img-fluid" />
        </div>
        <div className="content-side">
          <h3>Dodge the Distraction, Embrace the Essence</h3>
          <p>Avoid the Clickbait Trap</p>
          <p>
            TLDR This smartly selects the most relevant points from a text, filtering out weak arguments and baseless
            speculation. It allows for quick comprehension of the essence, without needing to sift through all paragraphs.
            By focusing on core substance and disregarding fluff, it enhances efficiency in consuming information, freeing
            more time for valuable content.
          </p>
          <ul>
            <li>Filters weak arguments and speculation</li>
            <li>Highlights most relevant points</li>
            <li>Saves time by eliminating fluff</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Spem;
