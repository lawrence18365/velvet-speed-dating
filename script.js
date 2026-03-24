/**
 * VELVET — Interaction Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Simple scroll reveal for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll('.the-room, .the-admission').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
});

// ==========================================
// Application Page Logic
// ==========================================

function unlockApplication(e) {
  e.preventDefault();
  
  const codeInput = document.getElementById('accessCode');
  const errorMsg = document.getElementById('lockError');
  const code = codeInput.value.trim().toUpperCase();
  
  // Simple client-side check. For real security, this needs a backend.
  if (code === 'VELVET26' || code === 'ACCESS') {
    document.getElementById('lockState').style.display = 'none';
    
    const appState = document.getElementById('applicationState');
    appState.style.display = 'block';
    
    // Slight fade in
    appState.style.opacity = '0';
    setTimeout(() => {
      appState.style.transition = 'opacity 0.5s ease';
      appState.style.opacity = '1';
    }, 50);
  } else {
    errorMsg.style.display = 'block';
    codeInput.style.borderColor = '#ff4444';
    
    setTimeout(() => {
      errorMsg.style.display = 'none';
      codeInput.style.borderColor = 'var(--border-color)';
    }, 3000);
  }
}

function submitApplication(e) {
  e.preventDefault();
  
  const btn = document.getElementById('submitBtn');
  const originalText = btn.textContent;
  
  btn.textContent = 'Submitting...';
  btn.disabled = true;
  
  // Simulate network processing delay
  setTimeout(() => {
    document.getElementById('applicationState').style.display = 'none';
    
    const successState = document.getElementById('successState');
    successState.style.display = 'flex';
    successState.style.opacity = '0';
    
    setTimeout(() => {
      successState.style.transition = 'opacity 0.5s ease';
      successState.style.opacity = '1';
    }, 50);
    
    // Reset button internally
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1200);
}
