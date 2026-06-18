'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInView } from '@/lib/motion';
import { useRouter } from 'next/navigation';

type FormState = 'idle' | 'submitting' | 'error';

const MIN_MESSAGE_LENGTH = 20;

export default function DemoForm() {
  const router = useRouter();
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    if (!name) errors.name = 'Name is required.';
    if (!email) {
      errors.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (message && message.length < MIN_MESSAGE_LENGTH) {
      errors.message = `Please provide at least ${MIN_MESSAGE_LENGTH} characters.`;
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'submitting') return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const errors = validate(data);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      // Focus the first invalid field for accessibility
      const firstKey = Object.keys(errors)[0];
      const el = form.elements.namedItem(firstKey) as HTMLElement | null;
      el?.focus();
      return;
    }

    setValidationErrors({});
    setState('submitting');
    setErrorMsg('');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      console.warn('Web3Forms access key is missing or set to placeholder. Simulating successful form submission in development.');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push('/thank-you');
      return;
    }

    const payload = {
      access_key: accessKey,
      name: data.get('name'),
      email: data.get('email'),
      organisation: data.get('organisation'),
      role: data.get('role'),
      message: data.get('message'),
      subject: 'New demo request — Qualisense',
      from_name: 'Qualisense Website',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        router.push('/thank-you');
      } else {
        throw new Error(json.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setState('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'A network error occurred. Please check your connection and try again.'
      );
    }
  };

  const isSubmitting = state === 'submitting';

  return (
    <motion.form
      className="form-card"
      data-demo
      onSubmit={handleSubmit}
      noValidate
      aria-label="Request a demo"
      initial={slideInView.initial}
      whileInView={slideInView.whileInView}
      viewport={{ once: true }}
      transition={slideInView.transition}
    >
      <div className="form-grid">

        <div className="field">
          <label htmlFor="demo-name">Name</label>
          <input
            id="demo-name"
            name="name"
            required
            placeholder="Your name"
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={!!validationErrors.name}
            aria-describedby={validationErrors.name ? 'error-name' : undefined}
          />
          {validationErrors.name && (
            <span id="error-name" role="alert" style={{ color: '#c0392b', fontSize: '.82rem', marginTop: 4 }}>
              {validationErrors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="demo-email">Work email</label>
          <input
            id="demo-email"
            name="email"
            required
            type="email"
            placeholder="name@company.com"
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={!!validationErrors.email}
            aria-describedby={validationErrors.email ? 'error-email' : undefined}
          />
          {validationErrors.email && (
            <span id="error-email" role="alert" style={{ color: '#c0392b', fontSize: '.82rem', marginTop: 4 }}>
              {validationErrors.email}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="demo-org">Organisation</label>
          <input
            id="demo-org"
            name="organisation"
            placeholder="Company or agency"
            disabled={isSubmitting}
          />
        </div>

        <div className="field">
          <label htmlFor="demo-role">You are</label>
          <select id="demo-role" name="role" disabled={isSubmitting}>
            <option>Research agency</option>
            <option>Brand / end client</option>
            <option>Independent researcher</option>
            <option>Other</option>
          </select>
        </div>

        <div className="field full">
          <label htmlFor="demo-message">What would you like to test?</label>
          <textarea
            id="demo-message"
            name="message"
            rows={5}
            placeholder="Tell us about the project, languages, number of interviews or studies..."
            disabled={isSubmitting}
            aria-invalid={!!validationErrors.message}
            aria-describedby={validationErrors.message ? 'error-message' : undefined}
          />
          {validationErrors.message && (
            <span id="error-message" role="alert" style={{ color: '#c0392b', fontSize: '.82rem', marginTop: 4 }}>
              {validationErrors.message}
            </span>
          )}
        </div>

        <div className="field full">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Request a demo'}
          </button>

          {state === 'error' && (
            <div
              role="alert"
              className="notice"
              style={{
                display: 'block',
                background: 'rgba(192,57,43,.08)',
                color: '#922b21',
                borderLeft: '3px solid #c0392b',
                marginTop: 12,
              }}
            >
              {errorMsg}
            </div>
          )}
        </div>

      </div>
    </motion.form>
  );
}
