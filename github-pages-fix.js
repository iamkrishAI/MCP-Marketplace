// This script fixes client-side navigation issues on GitHub Pages
// by adding the correct base path to all relative links
(function() {
  // Only run on GitHub Pages
  if (typeof window === 'undefined' || !window.location.hostname.includes('github.io')) {
    return;
  }

  const basePath = '/MCP-Marketplace';
  
  // Define a function to fix all links
  function fixGitHubPagesLinks() {
    // Fix all regular links in the document that are relative
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      
      // Only modify relative links that don't already have the base path
      if (href && 
          !href.startsWith('http') && 
          !href.startsWith('#') && 
          !href.startsWith('mailto:') && 
          !href.startsWith(basePath)) {
        
        // Ensure proper formatting with slashes
        const cleanHref = href.startsWith('/') ? href.substring(1) : href;
        const newHref = `${basePath}/${cleanHref}`;
        
        link.setAttribute('href', newHref);
      }
    });
  }

  // Run once when the page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixGitHubPagesLinks);
  } else {
    fixGitHubPagesLinks();
  }
  
  // Also fix links after any dynamic content changes
  // using MutationObserver to detect DOM changes
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        fixGitHubPagesLinks();
      }
    });
  });
  
  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });
})(); 