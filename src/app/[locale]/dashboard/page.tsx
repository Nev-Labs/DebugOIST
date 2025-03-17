import React from 'react';
import { Metadata } from 'next';
import ProfileRegistrations from '@/src/components/ProfileRegistrations';

export const metadata: Metadata = {
  title: 'OIST - Your Dashboard',
  description: 'View your registrations and account information',
};

export default function DashboardPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
          Your Dashboard
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          View your event registrations and manage your account
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        <ProfileRegistrations />
      </div>
    </main>
  );
}
