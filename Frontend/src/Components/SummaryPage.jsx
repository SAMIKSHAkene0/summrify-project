import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Spinner, Container, Card } from "react-bootstrap";
import "../Style/summaryPage.css";
import { decode } from "html-entities";

const API_BASE = "http://localhost:5000"; // Change when deployed

const SummaryPage = () => {
    const location = useLocation();
    const { summary, videoUrl, title, author, language } = location.state || {};
    const [loading, setLoading] = useState(false);

    if (!summary || !videoUrl) {
        return <h3 className="text-center mt-5">No summary found. Please go back and generate one.</h3>;
    }

    // ✅ Ensure `summary` is a string by accessing `summary.text`
    const summaryText = typeof summary === "object" && summary.text ? summary.text : summary;
    const cleanedSummary = decode(summaryText.replace(/&#39;/g, "'").replace(/&quot;/g, '"'));

    const handleDownloadPDF = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE}/pdf/generate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ transcript: cleanedSummary, videoUrl, language }),
            });

            if (!response.ok) throw new Error("PDF generation failed");

            const data = await response.json();
            window.open(`${API_BASE}${data.pdfUrl}`, "_blank");
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="summary-page-container mt-4">
            <Card className="shadow-lg p-4">
                <Card.Body>
                    <h2 className="text-center mb-3">Generated Summary</h2>
                    <h4 className="text-center text-primary">{title || "Unknown Title"}</h4>
                    <h6 className="text-center text-muted">By: {author || "Unknown Author"}</h6>
                    <h6 className="text-center text-success">Language: {language || "English"}</h6>
                    <hr />
                    <div className="summary-content">
                        {cleanedSummary.split("\n").map((paragraph, index) => (
                            <p key={index} className="summary-text">{paragraph}</p>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Button variant="success" onClick={handleDownloadPDF} disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : "Download as PDF"}
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SummaryPage;
