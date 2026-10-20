import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: "The Weaving Hands: Equality & Dignity",
      category: "rights",
      badge: "Constitutional Rights",
      readTime: "3 min read",
      summary: "How Article 14 and Article 21A weave together equality, girls' education, and India's unity in diversity.",
      content: [
        "A tapestry is never made of a single color. It derives its beauty from a million distinct threads woven together with purpose.",
        "From northern mountains to southern coastlines, India is a vibrant mosaic of traditions. Under Article 14 of our Constitution, every citizen stands equal before the law—no one is superior, and dignity belongs to all.",
        "Through Article 21A, education became a fundamental right for every child. When a girl learns to read and write, she doesn't just change her own life—she elevates her entire community, honoring the true spirit of Unity in Diversity."
      ],
      takeaways: [
        "Equality under law ensures fairness and respect for everyone.",
        "Educating young girls builds the foundation of a progressive nation.",
        "Diversity is our strength, harmony is our shared responsibility."
      ]
    },
    {
      id: 2,
      title: "The Bending Bamboo: Patience in Mobility",
      category: "fitness",
      badge: "Physical Mobility",
      readTime: "4 min read",
      summary: "Why natural flexibility and daily active mobility outlast forced physical strain.",
      content: [
        "In the heart of the forest stands a tall bamboo tree. When heavy winds blow, it does not fight or snap—it bends gracefully, storing energy and returning to balance.",
        "True physical fitness and flexibility mirror the bamboo. Pushing the body through harsh, forced stretching often leads to resistance. Sustainable mobility comes from gentle, consistent daily practice and listening to your body's natural rhythm.",
        "At age 25 or any stage of life, building strength is a marathon of patience, breath, and steady movement."
      ],
      takeaways: [
        "Consistency always outperforms aggressive, forced effort.",
        "Active mobility protects joints and builds long-term vitality.",
        "Honor your body's natural pace without comparison."
      ]
    },
    {
      id: 3,
      title: "The Still Lake: Finding Mental Clarity",
      category: "mind",
      badge: "Mental Peace",
      readTime: "3 min read",
      summary: "How letting thoughts settle naturally clears the mind better than overthinking.",
      content: [
        "Imagine a mountain lake whose waters are churned up by the day's busy storms. If you try to flatten the mud with your hands, the water only grows cloudier.",
        "The human mind works the same way. When stress and technical complexities pile up, fighting your thoughts only creates more friction. True clarity arrives when you step back and simply let the mud settle on its own.",
        "Taking 10 quiet minutes each day resets your internal focus, bringing calm confidence to code, work, and life."
      ],
      takeaways: [
        "Silence and stillness are active forms of mental recharge.",
        "Do not fight anxious thoughts; observe them and let them pass.",
        "A clear mind solves complex problems with effortless precision."
      ]
    }
  ];

  const filteredStories = activeCategory === 'all' 
    ? stories 
    : stories.filter(s => s.category === activeCategory);

  return (
    <div style={{ padding: '40px 0' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '20px', marginBottom: '40px' }}>
        <div style={{ cursor: 'pointer' }} onClick={() => setSelectedStory(null)}>
          <h2 style={{ fontSize: '28px', margin: 0, color: 'var(--text-h)' }}>CivicPulse</h2>
          <p style={{ fontSize: '13px', opacity: 0.7, margin: 0 }}>Clarity in Law, Body & Mind</p>
        </div>
        <nav style={{ display: 'flex', gap: '15px', fontSize: '15px' }}>
          <button onClick={() => { setActiveCategory('all'); setSelectedStory(null); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontWeight: activeCategory === 'all' ? 'bold' : 'normal' }}>All</button>
          <button onClick={() => { setActiveCategory('rights'); setSelectedStory(null); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontWeight: activeCategory === 'rights' ? 'bold' : 'normal' }}>Rights</button>
          <button onClick={() => { setActiveCategory('fitness'); setSelectedStory(null); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontWeight: activeCategory === 'fitness' ? 'bold' : 'normal' }}>Fitness</button>
          <button onClick={() => { setActiveCategory('mind'); setSelectedStory(null); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontWeight: activeCategory === 'mind' ? 'bold' : 'normal' }}>Mind</button>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {selectedStory ? (
          <div>
            <button 
              onClick={() => setSelectedStory(null)}
              style={{ background: 'var(--code-bg)', border: '1px solid var(--border)', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px', color: 'inherit' }}
            >
              ← Back to stories
            </button>
            <span style={{ display: 'inline-block', fontSize: '12px', padding: '4px 10px', background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', borderRadius: '20px', color: 'var(--accent)', marginBottom: '15px', fontWeight: '600' }}>
              {selectedStory.badge}
            </span>
            <h1>{selectedStory.title}</h1>
            <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '30px' }}>{selectedStory.readTime}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '170%', marginBottom: '40px' }}>
              {selectedStory.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div style={{ background: 'var(--code-bg)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <h3 style={{ margin: '0 0 15px 0', color: 'var(--text-h)' }}>Key Takeaways</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {selectedStory.takeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1>Complex concepts, explained with heart.</h1>
              <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
                Modern stories on constitutional awareness, natural body mobility, and mental clarity.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
              {filteredStories.map((story) => (
                <div 
                  key={story.id}
                  onClick={() => setSelectedStory(story)}
                  style={{ 
                    background: 'var(--code-bg)', 
                    border: '1px solid var(--border)', 
                    borderRadius: '12px', 
                    padding: '24px', 
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow)'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
                      {story.badge}
                    </span>
                    <h2 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--text-h)' }}>{story.title}</h2>
                    <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: '150%', marginBottom: '20px' }}>{story.summary}</p>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent)' }}>Read story →</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ marginTop: '80px', borderTop: '1px solid var(--border)', paddingTop: '20px', textAlign: 'center', fontSize: '14px', opacity: 0.6 }}>
        <p>© {new Date().getFullYear()} CivicPulse. Built for awareness and growth.</p>
      </footer>
    </div>
  );
}