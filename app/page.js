// app/page.js
"use client";
import './globals.css'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/attractions');
  }, [router]);

  return <div className="container">
  <div class="spinner-container">
  <div class="spinner"></div>
  <div class="spinner-inner"></div>
<div class="text">Loading...</div>
</div>
</div>
  ;
}
