"use client";
import { useState } from 'react';
// Inline styles used for now, no module needed.

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="p-8 text-center bg-surface border border-border">
                <h3>Message Sent</h3>
                <p>Thanks for reaching out! I'll get back to you shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn mt-4">Send Another</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                    <label className="block text-sm uppercase mb-1">Name</label>
                    <input required name="name" type="text" className="w-full p-3 border border-border bg-transparent" />
                </div>
                <div>
                    <label className="block text-sm uppercase mb-1">Email</label>
                    <input required name="email" type="email" className="w-full p-3 border border-border bg-transparent" />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                    <label className="block text-sm uppercase mb-1">Service Type</label>
                    <select name="type" className="w-full p-3 border border-border bg-transparent">
                        <option value="Video">Video Production</option>
                        <option value="Photo">Photography</option>
                        <option value="Both">Both</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm uppercase mb-1">Budget Range</label>
                    <select name="budget" className="w-full p-3 border border-border bg-transparent">
                        <option value="<2k">&lt; $2,000</option>
                        <option value="2k-5k">$2,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k+">$10,000+</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm uppercase mb-1">Location Context</label>
                <select name="location" className="w-full p-3 border border-border bg-transparent">
                    <option value="Syracuse">Syracuse, NY</option>
                    <option value="Boston">Boston, MA (Summer)</option>
                    <option value="Remote">Remote</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label className="block text-sm uppercase mb-1">Project Details</label>
                <textarea required name="message" rows="5" className="w-full p-3 border border-border bg-transparent"></textarea>
            </div>

            <button type="submit" disabled={status === 'submitting'} className="btn w-full">
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
            </button>

            {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
        </form>
    );
}
