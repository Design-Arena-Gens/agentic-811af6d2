import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [keyword, setKeyword] = useState('inverter batteries');
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateTopics = () => {
    setLoading(true);

    const blogTopics = [
      {
        title: "The Ultimate Guide to Choosing the Right Inverter Battery for Your Home",
        description: "Comprehensive guide covering battery types, capacity calculations, brand comparisons, and buying tips",
        searchIntent: "Informational/Commercial",
        keywords: ["best inverter batteries", "inverter battery buying guide", "how to choose inverter battery"]
      },
      {
        title: "Top 10 Inverter Battery Brands in 2025: Features, Prices & Performance Review",
        description: "In-depth comparison of leading brands like Luminous, Exide, Amaron with real user reviews",
        searchIntent: "Commercial",
        keywords: ["inverter battery brands", "best battery for inverter", "inverter battery comparison"]
      },
      {
        title: "Inverter Battery Maintenance: 7 Essential Tips to Extend Lifespan",
        description: "Practical maintenance guide with water topping, cleaning terminals, and storage tips",
        searchIntent: "Informational",
        keywords: ["inverter battery maintenance", "battery care tips", "extend battery life"]
      },
      {
        title: "Tubular vs Flat Plate Inverter Batteries: Which One Should You Buy?",
        description: "Detailed comparison of battery technologies with pros, cons, and use case recommendations",
        searchIntent: "Informational/Commercial",
        keywords: ["tubular vs flat plate battery", "types of inverter batteries", "battery technology comparison"]
      },
      {
        title: "How Long Do Inverter Batteries Last? Lifespan, Warranty & Replacement Guide",
        description: "Comprehensive overview of battery lifespan factors, warranty details, and when to replace",
        searchIntent: "Informational",
        keywords: ["inverter battery lifespan", "battery warranty", "when to replace inverter battery"]
      },
      {
        title: "Inverter Battery Prices 2025: Complete Cost Breakdown by Type & Capacity",
        description: "Updated price guide covering 100Ah to 220Ah batteries with cost-benefit analysis",
        searchIntent: "Commercial",
        keywords: ["inverter battery price", "battery cost", "inverter battery price list"]
      },
      {
        title: "Common Inverter Battery Problems and How to Fix Them (Troubleshooting Guide)",
        description: "Step-by-step solutions for low backup, sulfation, overheating, and charging issues",
        searchIntent: "Informational",
        keywords: ["inverter battery problems", "battery troubleshooting", "battery not charging"]
      },
      {
        title: "Lithium-ion vs Lead-Acid Inverter Batteries: The Future of Home Power Backup",
        description: "Technology comparison with ROI analysis, environmental impact, and future trends",
        searchIntent: "Informational/Commercial",
        keywords: ["lithium ion inverter battery", "lead acid vs lithium", "best battery technology"]
      },
      {
        title: "How to Calculate the Right Inverter Battery Capacity for Your Power Needs",
        description: "Practical guide with formulas, examples, and load calculation tools",
        searchIntent: "Informational",
        keywords: ["battery capacity calculation", "inverter sizing", "power backup calculation"]
      },
      {
        title: "Inverter Battery Installation Guide: Step-by-Step Process & Safety Tips",
        description: "Complete DIY installation guide with safety precautions, wiring, and setup instructions",
        searchIntent: "Informational",
        keywords: ["inverter battery installation", "how to install inverter", "battery setup guide"]
      },
      {
        title: "Best Inverter Batteries for Home, Office & Industrial Use in 2025",
        description: "Segmented recommendations based on application with load requirements and use cases",
        searchIntent: "Commercial",
        keywords: ["best inverter battery for home", "commercial inverter batteries", "industrial batteries"]
      },
      {
        title: "Inverter Battery vs Solar Battery: Key Differences & Which One You Need",
        description: "Comparison of battery types for grid backup vs solar storage applications",
        searchIntent: "Informational",
        keywords: ["solar battery vs inverter battery", "battery for solar system", "grid vs solar battery"]
      },
      {
        title: "How to Dispose & Recycle Old Inverter Batteries Safely (Environmental Guide)",
        description: "Eco-friendly disposal methods, recycling programs, and environmental regulations",
        searchIntent: "Informational",
        keywords: ["battery disposal", "recycle inverter battery", "battery recycling"]
      },
      {
        title: "Water Topping in Inverter Batteries: Complete Guide on When, How & Why",
        description: "Detailed guide on distilled water requirements, topping frequency, and proper techniques",
        searchIntent: "Informational",
        keywords: ["battery water topping", "distilled water for battery", "battery maintenance water"]
      },
      {
        title: "Inverter Battery Backup Time Calculator: Get the Right Runtime for Your Appliances",
        description: "Interactive guide with backup time calculations for different loads and battery capacities",
        searchIntent: "Informational/Tool",
        keywords: ["battery backup time", "backup calculator", "how long will battery last"]
      },
      {
        title: "Gel vs AGM vs Flooded Inverter Batteries: Complete Technology Comparison",
        description: "Deep dive into battery chemistry with maintenance requirements and application suitability",
        searchIntent: "Informational",
        keywords: ["gel battery", "AGM battery", "flooded battery comparison"]
      },
      {
        title: "Top 5 Budget-Friendly Inverter Batteries Under $150 (Value for Money Picks)",
        description: "Curated list of affordable batteries with performance reviews and long-term value analysis",
        searchIntent: "Commercial",
        keywords: ["cheap inverter batteries", "budget batteries", "affordable inverter battery"]
      },
      {
        title: "Inverter Battery Charging Time: Factors, Calculations & Optimization Tips",
        description: "Guide on charging cycles, optimal charging current, and factors affecting charge time",
        searchIntent: "Informational",
        keywords: ["battery charging time", "how long to charge battery", "charging optimization"]
      },
      {
        title: "Smart Inverter Batteries: IoT Features, Monitoring Apps & Future Technology",
        description: "Overview of smart battery features, mobile monitoring, and emerging technologies",
        searchIntent: "Informational/Commercial",
        keywords: ["smart inverter battery", "battery monitoring app", "IoT battery"]
      },
      {
        title: "Inverter Battery Safety Guide: Risks, Precautions & Emergency Procedures",
        description: "Comprehensive safety guide covering acid handling, ventilation, and emergency response",
        searchIntent: "Informational",
        keywords: ["battery safety", "inverter battery hazards", "battery acid safety"]
      }
    ];

    setTimeout(() => {
      setTopics(blogTopics);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>SEO Blog Topic Generator - Inverter Batteries</title>
        <meta name="description" content="Generate top Google SERP and SEO-friendly blog topics for inverter batteries" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>SEO Blog Topic Generator</h1>
          <p style={styles.subtitle}>Top Google SERP-Friendly Topics for 800-1000 Word Articles</p>
        </header>

        <main style={styles.main}>
          <div style={styles.searchBox}>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter keyword..."
              style={styles.input}
            />
            <button onClick={generateTopics} style={styles.button} disabled={loading}>
              {loading ? 'Generating...' : 'Generate Topics'}
            </button>
          </div>

          {topics.length > 0 && (
            <div style={styles.topicsContainer}>
              <h2 style={styles.resultsTitle}>
                {topics.length} SEO-Optimized Blog Topics for "{keyword}"
              </h2>

              {topics.map((topic, index) => (
                <div key={index} style={styles.topicCard}>
                  <div style={styles.topicNumber}>#{index + 1}</div>
                  <h3 style={styles.topicTitle}>{topic.title}</h3>
                  <p style={styles.topicDescription}>{topic.description}</p>

                  <div style={styles.metaInfo}>
                    <div style={styles.badge}>
                      <strong>Search Intent:</strong> {topic.searchIntent}
                    </div>
                    <div style={styles.keywords}>
                      <strong>Target Keywords:</strong>
                      <div style={styles.keywordTags}>
                        {topic.keywords.map((kw, i) => (
                          <span key={i} style={styles.keywordTag}>{kw}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={styles.wordCount}>
                    Recommended Length: 800-1000 words
                  </div>
                </div>
              ))}
            </div>
          )}

          {topics.length === 0 && !loading && (
            <div style={styles.emptyState}>
              <p>Click "Generate Topics" to get SEO-friendly blog ideas</p>
            </div>
          )}
        </main>

        <footer style={styles.footer}>
          <p>Generated with SEO best practices • Updated 2025</p>
        </footer>
      </div>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '3rem 2rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  title: {
    margin: 0,
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  subtitle: {
    margin: '0.5rem 0 0 0',
    fontSize: '1.1rem',
    opacity: 0.95,
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  searchBox: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap',
  },
  input: {
    flex: '1',
    minWidth: '300px',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 6px rgba(102, 126, 234, 0.3)',
  },
  topicsContainer: {
    marginTop: '2rem',
  },
  resultsTitle: {
    fontSize: '1.8rem',
    color: '#2d3748',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  topicCard: {
    backgroundColor: 'white',
    padding: '2rem',
    marginBottom: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    position: 'relative',
  },
  topicNumber: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#667eea',
    color: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '1.1rem',
  },
  topicTitle: {
    fontSize: '1.4rem',
    color: '#2d3748',
    marginBottom: '0.75rem',
    paddingRight: '3rem',
    lineHeight: '1.4',
  },
  topicDescription: {
    color: '#4a5568',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  metaInfo: {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '1rem',
    marginTop: '1rem',
  },
  badge: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: '#edf2f7',
    borderRadius: '6px',
    fontSize: '0.9rem',
    color: '#2d3748',
    marginBottom: '1rem',
  },
  keywords: {
    fontSize: '0.9rem',
    color: '#4a5568',
  },
  keywordTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  keywordTag: {
    display: 'inline-block',
    padding: '0.4rem 0.8rem',
    backgroundColor: '#f0f4ff',
    color: '#667eea',
    borderRadius: '20px',
    fontSize: '0.85rem',
    border: '1px solid #d6e0ff',
  },
  wordCount: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#f7fafc',
    borderLeft: '4px solid #667eea',
    fontSize: '0.9rem',
    color: '#2d3748',
    fontWeight: '500',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: '#718096',
    fontSize: '1.1rem',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    color: '#718096',
    fontSize: '0.9rem',
  },
};
