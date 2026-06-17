'use client';

import { motion } from 'framer-motion';
import { slideInView } from '@/lib/motion';

export default function DemoForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const notice = form.querySelector('.notice') as HTMLElement | null;
    if (notice) {
      notice.style.display = 'block';
      notice.textContent = 'Thanks — this demo form is ready to connect to your CRM or email workflow.';
    }
  };

  return (
    <motion.form
      className="form-card"
      data-demo
      onSubmit={handleSubmit}
      initial={slideInView.initial}
      whileInView={slideInView.whileInView}
      viewport={{ once: true }}
      transition={slideInView.transition}
    >
      <div className="form-grid">
        <div className="field">
          <label>Name</label>
          <input required placeholder="Your name" />
        </div>
        <div className="field">
          <label>Work email</label>
          <input required type="email" placeholder="name@company.com" />
        </div>
        <div className="field">
          <label>Organisation</label>
          <input placeholder="Company or agency" />
        </div>
        <div className="field">
          <label>You are</label>
          <select>
            <option>Research agency</option>
            <option>Brand / end client</option>
            <option>Independent researcher</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field full">
          <label>What would you like to test?</label>
          <textarea rows={5} placeholder="Tell us about the project, languages, number of interviews or studies..."></textarea>
        </div>
        <div className="field full">
          <button className="btn btn-primary" type="submit">Request a demo</button>
          <div className="notice"></div>
        </div>
      </div>
    </motion.form>
  );
}
