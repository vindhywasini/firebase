// src/app/demo/page.js
"use client";            // ← this makes the entire file a Client Component

import { useState, useEffect } from "react";

export default function Page() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Hello, world!</h1>
    </div>
  );
}
