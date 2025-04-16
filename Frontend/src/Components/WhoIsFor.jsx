import React from 'react';
import '../Style/WhoIsFor.css'; // Custom CSS for additional styling

const WhoIsFor = () => {
  return (
    <section className="tldr-this-for container py-5">
      <h2 className="text-center mb-4">Who is TLDR This for?</h2>
      <p className="text-center mb-5">
        TLDR This is a summarizing tool designed for students, writers, teachers, institutions, journalists, and any internet user who needs to quickly understand the essence of lengthy content.
      </p>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="use-case-item p-3 shadow-sm rounded">
            <i className="fas fa-book-open use-case-icon mb-3"></i>
            <h3>Anyone with access to the Internet</h3>
            <p>TLDR This is for anyone who just needs to get the gist of a long article. You can read this summary, then go read the original article if you want to.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="use-case-item p-3 shadow-sm rounded">
            <i className="fas fa-book-open use-case-icon mb-3"></i>
            <h3>Students</h3>
            <p>TLDR This is for students studying for exams, who are overwhelmed by information overload. This tool will help them summarize information into a concise, easy-to-digest piece of text.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="use-case-item p-3 shadow-sm rounded">
            <i className="fas fa-book-open use-case-icon mb-3"></i>
            <h3>Writers</h3>
            <p>TLDR This is for anyone who writes frequently and wants to quickly summarize their articles for easier writing and easier reading.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="use-case-item p-3 shadow-sm rounded">
            <i className="fas fa-book-open use-case-icon mb-3"></i>
            <h3>Teachers</h3>
            <p>TLDR This is for teachers who want to summarize a long document or chapter for their students.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="use-case-item p-3 shadow-sm rounded">
            <i className="fas fa-book-open use-case-icon mb-3"></i>
            <h3>Institutions</h3>
            <p>TLDR This is for corporations and institutions who want to condense a piece of content into a summary that is easy to digest for their employees/students.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="use-case-item p-3 shadow-sm rounded">
            <i className="fas fa-book-open use-case-icon mb-3"></i>
            <h3>Journalists</h3>
            <p>TLDR This is for journalists who need to summarize a long article for their newspaper or magazine.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsFor;
